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

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.spacing02};
`;

function extractButtonProps<T extends Record<string, unknown>>(props?: T) {
  if (!props) {
    return { disabled: undefined, rest: {} as T };
  }

  const {
    disabled,
    children: ignoredChildren,
    onClick: ignoredOnClick,
    initialState: ignoredInitialState,
    ...rest
  } = props;

  return { disabled, rest: rest as T };
}

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

  const { disabled: isMoreDisabled, rest: restShowMoreProps } =
    extractButtonProps(showMoreButtonProps);
  const { disabled: isAllDisabled, rest: restShowAllProps } =
    extractButtonProps(showAllButtonProps);
  const { disabled: isLessDisabled, rest: restShowLessProps } =
    extractButtonProps(showLessButtonProps);

  const baseButtonProps = {
    severity: "medium" as const,
    size: "sm" as const,
    style: { margin: 0 },
    initialState: isLoading ? "loading" : undefined,
  };

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
              {...baseButtonProps}
              status="warning"
              icon="chevronDown"
              aria-label="Show more items"
              disabled={isLoading || isMoreDisabled}
              onClick={onLoadMore}
              {...restShowMoreProps}
            >
              {showMoreLabel}
            </Button>
          )}

          {hasMoreItems && onShowAll && (
            <Button
              {...baseButtonProps}
              icon="chevronDown"
              aria-label="Show all items"
              disabled={isLoading || isAllDisabled}
              onClick={onShowAll}
              {...restShowAllProps}
            >
              {showAllLabel}
            </Button>
          )}

          {showLessButton && (
            <Button
              {...baseButtonProps}
              icon="chevronUp"
              aria-label="Show less items"
              disabled={isLoading || isLessDisabled}
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
