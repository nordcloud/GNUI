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
