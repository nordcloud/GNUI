import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Button, ButtonProps } from "../button";
import { PaginationAmount, StyledPaginationBox } from "../paginationHelpers";
import { LoadMoreProps } from "./types";

const Container = styled(StyledPaginationBox)<{ hideCount?: boolean }>`
  justify-content: ${({ hideCount }) =>
    hideCount ? "center" : "space-between"};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  min-height: 36px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.spacing02};
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
  onShowAll,
  isLoading = false,
  hideCount = false,
  className,
  showMoreLabel = "Show more",
  showAllLabel = "Show all",
  showLessLabel = "Show less",
  showMoreButtonProps,
  showAllButtonProps,
  showLessButtonProps,
}: LoadMoreProps) {
  const hasMoreItems = currentCount < total;
  const showLessButton = onLoadLess && currentCount === total && total > 0;

  const {
    children: _moreChildren,
    onClick: _moreOnClick,
    initialState: _moreInitialState,
    disabled: moreDisabled,
    ...restShowMoreProps
  } = showMoreButtonProps || {};

  const {
    children: _allChildren,
    onClick: _allOnClick,
    initialState: _allInitialState,
    disabled: allDisabled,
    ...restShowAllProps
  } = showAllButtonProps || {};

  const {
    children: _lessChildren,
    onClick: _lessOnClick,
    initialState: _lessInitialState,
    disabled: lessDisabled,
    ...restShowLessProps
  } = showLessButtonProps || {};

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

      {(hasMoreItems || showLessButton) && (
        <ButtonsContainer>
          {hasMoreItems && (
            <Button
              severity="medium"
              size="sm"
              status={"warning"}
              style={{ margin: 0 }}
              icon="chevronDown"
              aria-label="Show more items"
              initialState={isLoading ? "loading" : undefined}
              disabled={isLoading || moreDisabled}
              onClick={onLoadMore}
              //{...restShowMoreProps}
            >
              {showMoreLabel}
            </Button>
          )}

          {hasMoreItems && onShowAll && (
            <Button
              severity="medium"
              size="sm"
              style={{ margin: 0 }}
              icon="chevronDown"
              aria-label="Show all items"
              initialState={isLoading ? "loading" : undefined}
              disabled={isLoading || allDisabled}
              onClick={onShowAll}
              {...restShowAllProps}
            >
              {showAllLabel}
            </Button>
          )}

          {showLessButton && (
            <Button
              severity="medium"
              size="sm"
              aria-label="Show less items"
              initialState={isLoading ? "loading" : undefined}
              disabled={isLoading || lessDisabled}
              style={{ margin: 0 }}
              icon="chevronUp"
              onClick={onLoadLess}
              {...restShowLessProps}
            >
              {showLessLabel}
            </Button>
          )}
        </ButtonsContainer>
      )}
    </Container>
  );
}
