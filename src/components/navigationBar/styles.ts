import styled from "styled-components";
import theme from "../../theme";
import { ExpandableProps, Props } from "./types";

export const NavigationBarWrapper = styled.nav<Props & ExpandableProps>`
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
  padding: ${theme.spacing.spacing05} ${theme.spacing.spacing03}
    ${theme.spacing.spacing04};
  row-gap: ${theme.spacing.spacing07};
  border-right: solid 1px ${theme.color.border.border01};
  transition: ${({ expanded }) => (expanded ? "width 0.25s linear" : "unset")};
  align-items: ${({ expanded }) => (expanded ? "start" : "center")};
  z-index: ${theme.zindex.sticky};
`;

export const BurgerWrapper = styled.div<ExpandableProps>`
  cursor: pointer;
  display: flex;
  flex-wrap: no-wrap;
  margin: 0;
  width: 100%;
  align-items: center;
  column-gap: ${theme.spacing.spacing02};
  justify-content: ${({ expanded }) => (expanded ? "start" : "center")};
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  row-gap: ${theme.spacing.spacing04};
  width: 100%;
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
