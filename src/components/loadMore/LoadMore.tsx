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
  min-height: 36px;
`;

/**
 * LoadMore displays a "Show More" button to load additional items when clicked,
 * optionally with a count of loaded items.
 */
export function LoadMore({
  currentCount,
  total,
  onLoadMore,
  onLoadLess,
  isLoading = false,
  hideCount = false,
  className,
}: LoadMoreProps) {
  const hasMoreItems = currentCount < total;
  const showLessButton = onLoadLess && currentCount === total && total > 0;

  return (
    <Container className={className} small={false} hideCount={hideCount}>
      {!hideCount && (
        <PaginationAmount
          from={0}
          size={currentCount}
          count={total}
          style={{ width: "auto" }}
        />
      )}

      {hasMoreItems && (
        <Button
          severity="medium"
          size="sm"
          initialState={isLoading ? "loading" : undefined}
          aria-label="Show more items"
          disabled={isLoading}
          style={{ margin: 0 }}
          icon="chevronDown"
          onClick={onLoadMore}
        >
          {isLoading ? "Loading..." : "Show more"}
        </Button>
      )}

      {showLessButton && (
        <Button
          severity="medium"
          size="sm"
          aria-label="Show less items"
          initialState={isLoading ? "loading" : undefined}
          disabled={isLoading}
          style={{ margin: 0 }}
          icon="chevronUp"
          onClick={onLoadLess}
        >
          {isLoading ? "Loading..." : "Show less"}
        </Button>
      )}
    </Container>
  );
}
