import styled, { css } from "styled-components";
import theme from "../../theme";

export interface NavWrapperProps {
  secondary?: boolean;
}

const Item = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  line-height: ${theme.lineHeight};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.regular};
  border-radius: ${theme.radius.default};
  padding: 0 ${theme.spacing.spacing03};
  color: ${theme.colors.primary};
  text-decoration: none;
  height: 2.5rem;
  vertical-align: middle;
  text-decoration: none;
  &.separator {
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.darks[4]};
    margin-bottom: 0;
  }
  & + .separator {
    margin-top: -${theme.spacing.spacing02};
  }
  &:not(.separator) {
    &:hover {
      background-color: ${theme.colors.lights[2]};
    }
    &:active,
    &:focus {
      background-color: ${theme.colors.lights[3]};
    }
    &.active {
      background: ${theme.colors.primary};
      color: #fff;
      * {
        fill: #fff;
      }
    }
  }
  &.hasBg {
    background: ${theme.colors.lights[2]};
    &:active,
    &:focus {
      background-color: ${theme.colors.lights[4]};
    }
    &.active {
      background: ${theme.colors.lights[4]};
      color: inherit;
    }
  }
  * {
    margin-right: 0.8125rem;
  }
`;

const Info = styled.span`
  width: 1rem;
  height: 1rem;
  background: ${theme.colors.danger};
  display: block;
  color: #fff;
  text-align: center;
  margin-left: auto;
  font-size: ${theme.typography.fontSizes[1]};
  line-height: 1rem;
`;

const Container = styled.div<NavWrapperProps>`
  margin: 0;
  padding-left: 0;
  display: flex;
  > * {
    margin-left: ${theme.spacing.spacing04};
    &:first-child {
      margin-left: 0;
    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      width: 100%;
      display: block;
      > * {
        margin: 0 0 ${theme.spacing.spacing02};
      }
    `}
`;

export const Navigation = { Container, Item, Info };
