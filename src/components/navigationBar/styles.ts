import styled from "styled-components";
import theme from "../../theme";
import { ExpandedProps, Props } from "./types";

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
  width: ${({ expanded }) => (expanded ? "14rem" : theme.spacing.spacing07)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => height};
  padding: ${theme.spacing.spacing05}
    ${({ expanded }) =>
      expanded ? theme.spacing.spacing04 : theme.spacing.spacing03}
    ${theme.spacing.spacing04};
  row-gap: ${theme.spacing.spacing07};
  border-right: solid 1px ${theme.color.border.border01};
  transition: ${({ expanded, expandableConfig }) =>
    expanded
      ? `width ${expandableConfig?.duration} ${expandableConfig?.timingFunction}`
      : "unset"};
  align-items: ${({ expanded }) => (expanded ? "start" : "center")};
  z-index: ${theme.zindex.sticky};
`;

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

export const ItemsWrapper = styled.div<{ stickToBottom?: boolean }>`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  row-gap: ${theme.spacing.spacing04};
  width: 100%;
  border-top: ${({ stickToBottom }) =>
    stickToBottom ? `solid 1px ${theme.color.border.border01}` : "unset"};
  padding-top: ${({ stickToBottom }) =>
    stickToBottom ? theme.spacing.spacing03 : "0"};
  margin-top: ${({ stickToBottom }) => (stickToBottom ? "auto" : "0")};
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
