import * as React from "react";
import {
  IExtendedPaginationProps,
  IPaginationBoxProps,
  PaginationAmount,
  PerPage,
  StyledPaginationBox,
} from "../paginationHelpers";
import { Text } from "../text";
import { SVGIcon } from "../svgicon";

function Pagination({ count, from, set, size }: IExtendedPaginationProps) {
  const currentPage = Math.ceil(from / size);
  const nPages = Math.ceil(count / size);

  const generatePagesItems = (numberOfPages, subtract = false) => {
    return Array.from(Array(numberOfPages), (_, i) => {
      if (subtract) {
        return nPages - (i + 1);
      }
      return i;
    });
  };

  const getPages = () => {
    const endPages = generatePagesItems(5, true);
    if (currentPage < 5) {
      return generatePagesItems(5);
    } else if (endPages.includes(currentPage)) {
      return endPages.reverse();
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {currentPage > 0 && (
          <li>
            <button
              onClick={() => set(currentPage - 1)}
              onKeyDown={() => set(currentPage - 1)}
              type="button"
              className="pagination-prev"
              data-testid="prev-page"
            >
              <SVGIcon name="chevronLeft" />
            </button>
          </li>
        )}

        {currentPage > 4 && (
          <>
            <li>
              <button
                onClick={() => set(0)}
                onKeyDown={() => set(0)}
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
                  onClick={() => set(size * i)}
                  onKeyDown={() => set(size * i)}
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

        {currentPage + 5 < nPages && (
          <>
            <li className="dots" data-testid="last-page-dots">
              <Text tag="div">...</Text>
            </li>
            <li>
              <button
                onClick={() => set(0)}
                onKeyDown={() => set(0)}
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
                onClick={() => set(currentPage + 1)}
                onKeyDown={() => set(currentPage + 1)}
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
