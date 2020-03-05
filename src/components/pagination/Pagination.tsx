import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Flex } from "../container";

interface IPaginationProps {
  set(start: number): void;
  current: number;
  count: number;
  size: number;
}

const Pagination = ({ set, current, count, size }: IPaginationProps) => {
  const currentPage = Math.ceil(current / size);
  const nPages = Math.ceil(count / size);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        <li>
          <button
            onClick={() => set(0)}
            onKeyDown={() => set(0)}
            type="button"
            className="pagination-first"
            disabled={current === 0}
          >
            First
          </button>
        </li>

        {[...Array(Math.min(Math.ceil(count / size), 5))]
          .map((_, i) => currentPage + i)
          .map(i => (currentPage === nPages ? i - 4 : current > 3 ? i - 1 : i))
          .filter(i => i < nPages)
          .map(i => {
            return (
              <li key={`p${i}`}>
                <button
                  onClick={() => set(size * i)}
                  onKeyDown={() => set(size * i)}
                  type="button"
                  className={`pagination-link ${i === currentPage &&
                    `current`}`}
                >
                  {i + 1}
                </button>
              </li>
            );
          })}
        <li>
          <button
            onClick={() => set((nPages - 1) * size)}
            onKeyDown={() => set((nPages - 1) * size)}
            type="button"
            className="pagination-last"
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

interface IPerPageProps {
  size: number;
  set(perPage: number): void;
}

const PerPage = ({ size, set }: IPerPageProps) => (
  <>
    <nav
      className="pagination-per-page"
      role="navigation"
      aria-label="pagination"
    >
      <span className="nav-title">Per page:</span>
      <ul className="pagination-list">
        <li>
          {[10, 20, 50].map(el => (
            <button
              key={el}
              className={`pagination-link ${el === size && `current`}`}
              onClick={() => set(el)}
            >
              {el}
            </button>
          ))}
        </li>
      </ul>
    </nav>
  </>
);

interface IPaginationAmountProps {
  from: number;
  size: number;
  count: number;
}

const PaginationAmount = ({ from, size, count }: IPaginationAmountProps) => (
  <p className="nav-title">
    Showing {from + 1} - {Math.min(from + size, count)} of {count}.
  </p>
);

interface IPaginationBoxProps {
  size: number;
  from: number;
  count: number;
  setSize(size: number): any;
  setPage(page: number): any;
}

const StyledPaginationBox = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .nav-title {
    font-weight: 400;
    font-size: 0.875rem;
  }
  .pagination-per-page {
    display: flex;
    align-items: center;
  }
  .pagination-list {
    display: flex;
    list-style: none;
    padding-left: 0;
  }
  button {
    padding: 0.4375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.125rem;
    border: 0.0625rem solid ${theme.colors.primary};
    border-radius: 0.25rem;
    margin-left: 0.25rem;
    cursor: pointer;
    &.current {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }
  .pagination {
    button {
      border-radius: 0;
      margin-left: -0.0625rem;
      &.pagination-first {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
      &.pagination-last {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
    }
  }
`;

export const PaginationBox = ({
  size,
  from,
  count,
  setSize,
  setPage
}: IPaginationBoxProps) => {
  return (
    <Flex>
      <StyledPaginationBox>
        <PerPage size={size} set={setSize} />
        <PaginationAmount from={from} size={size} count={count} />
        <Pagination set={setPage} current={from} size={size} count={count} />
      </StyledPaginationBox>
    </Flex>
  );
};
