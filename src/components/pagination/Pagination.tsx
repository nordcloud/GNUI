import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";

type IPaginationProps = {
  set(start: number): void;
  current: number;
  count: number;
  size: number;
  from: number;
};

const Pagination: React.FC<IPaginationProps> = ({
  set,
  current,
  count,
  size,
  from,
}) => {
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
            disabled={current <= 0}
          >
            <SVGIcon name="chevronLeft" /> <span>First</span>
          </button>
        </li>

        {[...Array(Math.min(Math.ceil(count / size), 5))]
          .map((_, i) => currentPage + i)
          .map((i) =>
            currentPage === nPages ? i - 4 : current > 3 ? i - 1 : i
          )
          .filter((i) => i < nPages)
          .map((i) => {
            return (
              <li key={`p${i}`}>
                <button
                  onClick={() => set(size * i)}
                  onKeyDown={() => set(size * i)}
                  type="button"
                  disabled={i < 0}
                  className={`pagination-link ${
                    i === currentPage && `current`
                  }`}
                >
                  <span>{i < 0 ? "1" : i + 1}</span>
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
            disabled={currentPage === nPages - 1}
          >
            <span>Last</span> <SVGIcon name="chevronRight" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

type IPerPageProps = {
  size: number;
  set(perPage: number): void;
};

const PerPage = ({ size, set }: IPerPageProps) => (
  <nav
    className="pagination-per-page"
    role="navigation"
    aria-label="pagination"
  >
    <div className="pagination-show">Show:</div>
    {[10, 20, 50].map((el, i) => (
      <button
        key={el}
        onClick={() => set(el)}
        className={`pagination-link ${
          el.toString() === size.toString() && `current`
        }`}
      >
        <span>{el}</span>
      </button>
    ))}
  </nav>
);

type IPaginationAmountProps = {
  from: number;
  size: number;
  count: number;
};

const PaginationAmount = ({ from, size, count }: IPaginationAmountProps) => {
  const s = Number(size);
  const maxCurrentPage = count < s ? count : Math.min(from + s);
  const minCurrentPage = count < s ? "1" : from + 1;
  return (
    <div className="pagination-result">
      {minCurrentPage} -{maxCurrentPage > count ? count : maxCurrentPage} of{" "}
      {count}
    </div>
  );
};

type IPaginationBoxProps = {
  size: number;
  from: number;
  count: number;
  setSize(size: number): any;
  setPage(page: number): any;
  small?: boolean;
  sidebar?: boolean;
};

type IStyledPaginationBox = {
  sidebar?: boolean;
  small?: boolean;
};

const StyledPaginationBox = styled.nav<IStyledPaginationBox>`
  display: flex;
  flex-wrap: wrap;
  flex: ${({ sidebar }) => (sidebar ? 1 : 0)};
  justify-content: center;
  background-color: ${theme.color.background.ui03};
  padding: ${theme.spacing.spacing03};
  border: ${({ sidebar }) =>
    sidebar ? "none" : `1px solid ${theme.color.border.border01}`};
  justify-content: ${({ small }) => (small ? "center" : "space-between")};
  border-radius: ${theme.radius.md};
  align-items: center;
  .pagination-result,
  .pagination-show {
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.color.text.text02};
    margin: 0 0.5rem 0 0;
    line-height: 1.5em;
  }
  .pagination-result {
    width: 12rem;
  }
  .pagination-per-page {
    display: flex;
    align-items: center;
  }
  .pagination-list {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  button {
    display: flex;
    align-items: center;
    border: 0;
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    font-family: ${theme.typography.fonts.body};
    color: ${theme.color.text.text01};
    line-height: 1.5em;
    padding: 0.5rem;
    border-radius: ${theme.radius.md};
    margin: 0 ${theme.spacing.spacing01};
    background-color: ${theme.color.interactive.secondary};

    &:hover:not([disabled]) {
      cursor: pointer;
      background-color: ${theme.color.interactive.secondaryHover};
    }

    &:active {
      background-color: ${theme.color.interactive.secondaryActive};
    }

    &:focus {
      outline: 0;
    }

    &.current {
      background-color: ${theme.color.interactive.primary};
      color: ${theme.color.text.text04};
      font-weight: ${theme.fontWeights.medium};

      &:hover {
        background-color: ${theme.color.interactive.primaryHover};
        color: ${theme.color.text.text03};
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.pagination-first {
      background-color: transparent;
      padding-left: 0.25rem;
      svg {
        padding-left: 0;
        margin-right: 0.25rem;
      }
    }
    &.pagination-last {
      background-color: transparent;
      padding-right: 0.25rem;
      svg {
        padding-right: 0;
        margin-left: 0.25rem;
      }
    }

    svg {
      width: 1rem;
      height: 1rem;
    }
    span {
      min-width: 1.125rem;
      text-align: center;
    }
  }
`;

export const PaginationBox: React.FC<IPaginationBoxProps> = ({
  size,
  from,
  count,
  setSize,
  setPage,
  small,
  sidebar,
}) => {
  return (
    <StyledPaginationBox small={small} sidebar={sidebar}>
      {!small && <PaginationAmount from={from} size={size} count={count} />}
      <Pagination
        from={from}
        set={setPage}
        current={from}
        size={size}
        count={count}
      />
      {!small && <PerPage size={size} set={setSize} />}
    </StyledPaginationBox>
  );
};
