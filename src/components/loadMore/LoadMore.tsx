import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Button } from "../button";
import { PaginationAmount, StyledPaginationBox } from "../paginationHelpers";
import { LoadMoreProps } from "./types";

const Container = styled(StyledPaginationBox)<{ hideCount?: boolean }>`
  justify-content: ${({ hideCount }) =>
    hideCount ? "center" : "space-between"};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  height: 36px;
`;

/**
 * LoadMore displays a "Show More" button to load additional items when clicked,
 * optionally with a count of loaded items.
 */
export function LoadMore({
  currentCount,
  total,
  onLoadMore,
  isLoading = false,
  hideCount = false,
  className,
}: LoadMoreProps) {
  const hasMoreItems = currentCount < total;

  return (
    <Container className={className} small={false} hideCount={hideCount}>
      {!hideCount && (
        <PaginationAmount from={0} size={currentCount} count={total} />
      )}

      {hasMoreItems && (
        <Button
          severity="medium"
          size="sm"
          initialState={isLoading ? "loading" : undefined}
          aria-label="Show more items"
          disabled={isLoading}
          onClick={onLoadMore}
        >
          {isLoading ? "Loading..." : "Show more"}
        </Button>
      )}
    </Container>
  );
}
