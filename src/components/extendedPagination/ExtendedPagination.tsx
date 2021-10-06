import * as React from "react";
import {
  IExtendedPaginationProps,
  IPaginationBoxProps,
  PaginationAmount,
  PerPage,
  StyledPaginationBox,
} from "../paginationHelpers";
import { SVGIcon } from "../svgicon";
import { Text } from "../text";

function Pagination({ count, from, set, size }: IExtendedPaginationProps) {
  const currentPage = Math.ceil(from / size);
  const nPages = Math.ceil(count / size);

  // 6 & 7 pages make a lot of problem with dots so shrinking base number of visible
  // pages to 4 to avoid overlaps (problem: rendering dots and direct page at the same time)
  const baseNumberOfPages = [6, 7].includes(nPages) ? 4 : 5;

  const generatePagesItems = (numberOfPages: number, subtract = false) => {
    return Array.from(Array(numberOfPages), (_, i) => {
      if (subtract) {
        return nPages - (i + 1);
      }
      return i;
    });
  };

  const getPages = () => {
    const endPages = generatePagesItems(baseNumberOfPages, true);
    if (currentPage < baseNumberOfPages - 1) {
      return generatePagesItems(baseNumberOfPages);
    } else if (endPages.includes(currentPage - 1)) {
      return endPages.reverse();
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const setPage = (pageNumber: number) => {
    if (currentPage !== pageNumber) {
      set(pageNumber * size);
    }
  };

  const showFirstPageJump =
    currentPage >= baseNumberOfPages - 1 && nPages > baseNumberOfPages;
  const showLastPageJump =
    currentPage + baseNumberOfPages <= nPages && nPages > baseNumberOfPages;

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {currentPage > 0 && (
          <li>
            <button
              onClick={() => setPage(currentPage - 1)}
              onKeyDown={() => setPage(currentPage - 1)}
              type="button"
              className="pagination-prev"
              data-testid="prev-page"
            >
              <SVGIcon name="chevronLeft" />
            </button>
          </li>
        )}

        {showFirstPageJump && (
          <>
            <li>
              <button
                onClick={() => setPage(0)}
                onKeyDown={() => setPage(0)}
                type="button"
                className="pagination-link"
                data-testid="first-page"
              >
                <span>1</span>
              </button>
            </li>
            <li className="dots" data-testid="first-page-dots">
              <Text tag="div">...</Text>
            </li>
          </>
        )}

        {[...getPages()]
          .filter((i) => i < nPages)
          .map((i) => {
            return (
              <li key={`p${i}`}>
                <button
                  onClick={() => setPage(i)}
                  onKeyDown={() => setPage(i)}
                  type="button"
                  disabled={i < 0}
                  className={`pagination-link ${
                    i === currentPage && `current`
                  }`}
                  data-testid={`button-${i}`}
                >
                  <span>{i + 1}</span>
                </button>
              </li>
            );
          })}

        {showLastPageJump && (
          <>
            <li className="dots" data-testid="last-page-dots">
              <Text tag="div">...</Text>
            </li>
            <li>
              <button
                onClick={() => setPage(nPages - 1)}
                onKeyDown={() => setPage(nPages - 1)}
                type="button"
                className="pagination-link"
                data-testid="last-page"
              >
                <span>{nPages}</span>
              </button>
            </li>
          </>
        )}

        {currentPage + 1 < nPages && (
          <>
            <li>
              <button
                onClick={() => setPage(currentPage + 1)}
                onKeyDown={() => setPage(currentPage + 1)}
                type="button"
                className="pagination-next"
                data-testid="next-page"
              >
                <SVGIcon name="chevronRight" />
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export function ExtendedPaginationBox({
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
      <Pagination from={from} set={setPage} size={size} count={count} />
      {!small && <PerPage size={size} set={setSize} />}
    </StyledPaginationBox>
  );
}
