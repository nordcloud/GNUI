import * as React from "react";
import {
  StyledPaginationBox,
  PaginationAmount,
  PerPage,
  IPaginationBoxProps,
  IPaginationProps,
} from "../paginationHelpers";
import { SVGIcon } from "../svgicon";

function Pagination({ set, current, count, size }: IPaginationProps) {
  const currentPage = Math.ceil(current / size);
  const nPages = Math.ceil(count / size);
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        <li>
          <button
            type="button"
            className="pagination-first"
            disabled={current <= 0}
            onClick={() => set(0)}
            onKeyDown={() => set(0)}
          >
            <SVGIcon name="chevronLeft" /> <span>First</span>
          </button>
        </li>

        {new Array(Math.min(Math.ceil(count / size), 5))
          .map((_, index) => currentPage + index)
          .map((index) => {
            if (currentPage === nPages) {
              return index - 4;
            }

            return current > 3 ? index - 1 : index;
          })
          .filter((index) => index < nPages)
          .map((index) => {
            return (
              <li key={`p${index}`}>
                <button
                  type="button"
                  disabled={index < 0}
                  className={`pagination-link ${
                    index === currentPage ? `current` : ""
                  }`}
                  onClick={() => set(size * index)}
                  onKeyDown={() => set(size * index)}
                >
                  <span>{index < 0 ? "1" : index + 1}</span>
                </button>
              </li>
            );
          })}
        <li>
          <button
            type="button"
            className="pagination-last"
            disabled={currentPage === nPages - 1}
            onClick={() => set((nPages - 1) * size)}
            onKeyDown={() => set((nPages - 1) * size)}
          >
            <span>Last</span> <SVGIcon name="chevronRight" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export function PaginationBox({
  size,
  from,
  count,
  setSize,
  setPage,
  small,
  sidebar,
}: IPaginationBoxProps) {
  return (
    <StyledPaginationBox small={small} sidebar={sidebar}>
      {!small && <PaginationAmount from={from} size={size} count={count} />}
      <Pagination set={setPage} current={from} size={size} count={count} />
      {!small && <PerPage size={size} set={setSize} />}
    </StyledPaginationBox>
  );
}
