import styled, { css } from "styled-components";
import theme from "../../theme";
import { ExpandableConfig, ExpandedProps, Props } from "./types";

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ItemsSection = styled.div<{ stickToBottom?: boolean }>`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  row-gap: ${theme.spacing.spacing04};
  width: 100%;
  ${({ stickToBottom }) => stickToBottom && getBorder()}
  padding-top: ${({ stickToBottom }) =>
    stickToBottom ? theme.spacing.spacing03 : "0"};
  margin-top: ${({ stickToBottom }) =>
    stickToBottom ? theme.spacing.spacing06 : "0"};
`;

function getBorder() {
  return css`
    border-top: solid 1px ${theme.color.border.border01};
  `;
}

export const NavigationBarWrapper = styled.nav<
  Omit<Props, "items"> & ExpandedProps
>`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  margin: 0;
  flex-direction: column;
  position: ${({ position }) => position};
  top: 0;
  bottom: 0;
  left: 0;
  width: ${({ expanded }) => (expanded ? "14rem" : theme.spacing.spacing07)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-top: ${theme.spacing.spacing05};
  padding-bottom: ${theme.spacing.spacing04};
  padding-left: ${({ expanded }) =>
    expanded ? theme.spacing.spacing04 : theme.spacing.spacing03};
  padding-right: ${({ expanded }) =>
    expanded ? theme.spacing.spacing04 : theme.spacing.spacing03};
  row-gap: ${theme.spacing.spacing07};
  border-right: solid 1px ${theme.color.border.border01};
  ${({ expanded, expandableConfig }) =>
    getTransition({ expanded, expandableConfig })}
  align-items: ${({ expanded }) => (expanded ? "start" : "center")};
  z-index: ${theme.zindex.sticky};
  overflow-x: auto;
`;

function getTransition({
  expanded,
  expandableConfig,
}: {
  expanded: boolean;
  expandableConfig?: ExpandableConfig;
}) {
  const transition = expanded
    ? `width ${expandableConfig?.duration} ${expandableConfig?.timingFunction}`
    : "unset";
  return css`
    transition: ${transition};
  `;
}

export const BurgerWrapper = styled.div<ExpandedProps>`
  cursor: pointer;
  display: flex;
  flex-wrap: no-wrap;
  margin: 0;
  width: 100%;
  height: 2rem;
  align-items: center;
  column-gap: ${theme.spacing.spacing02};
  justify-content: ${({ expanded }) => (expanded ? "start" : "center")};
`;

export const StyledPopoverTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  column-gap: ${theme.spacing.spacing02};
`;

export const StyledTriggerWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${theme.radius.md};
  cursor: pointer;
  height: 2rem;
  width: 100%;

  &:hover {
    background-color: ${theme.color.interactive.secondary};
  }

  &:active {
    background-color: ${theme.color.interactive.secondaryActive};
  }

  &.active {
    background-color: ${theme.color.interactive.secondaryActive};
  }

  > * {
    width: 100%;
    height: 100%;
    display: flex;
    column-gap: ${theme.spacing.spacing02};
  }
`;
