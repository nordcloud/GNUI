import styled, { css } from "styled-components";
import theme from "../../theme";

export type NavWrapperProps = {
  secondary?: boolean;
  popoverMenu?: boolean;
};

const Item = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  line-height: ${theme.lineHeight};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
  border-radius: ${theme.radiusDefault};
  padding: 0 ${theme.spacing.spacing03};
  color: ${theme.color.text.text01};
  text-decoration: none;
  height: 2.5rem;
  vertical-align: middle;
  text-decoration: none;
  transition: ${theme.transition};
  &.separator {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.color.text.text02};
    margin-bottom: 0;
  }
  & + .separator {
    margin-top: -${theme.spacing.spacing02};
  }
  &:not(.separator) {
    &:hover {
      background-color: ${theme.color.interactive.secondary};
      text-decoration: none !important;
      color: ${theme.color.text.text01};
    }
    &:active,
    &:focus {
      background-color: ${theme.color.interactive.secondary};
      color: ${theme.color.text.text01};
    }
    &.active {
      background: ${theme.color.interactive.primary};
      color: ${theme.color.text.text04};
      * {
        fill: ${theme.color.text.text04};
      }
    }
  }
  &.hasBg {
    position: relative;
    background: ${theme.color.background.ui03};
    svg {
      position: absolute;
      right: 0;
      width: 1.25rem;
      height: 1.25rem;
      opacity: 0;
    }
    &:active,
    &:focus {
      background-color: ${theme.color.interactive.secondary};
      color: ${theme.color.text.text01};
    }
    &.active {
      background: ${theme.color.interactive.secondaryHover};
      color: ${theme.color.text.text01};
      * {
        opacity: 1;
        fill: ${theme.color.text.text01};
      }
    }
  }
  * {
    margin-right: 0.8125rem;
  }
`;

const Info = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  background: ${theme.color.background.error};
  display: block;
  color: ${theme.color.text.text04};
  text-align: center;
  margin-left: auto;
  font-size: ${theme.fontSizes.sm};
  line-height: 1.25rem;
  border-radius: ${theme.radius.sm};
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

  ${({ popoverMenu }) =>
    popoverMenu &&
    css`
      width: 100%;
      display: block;
      > * {
        margin: 0 0 ${theme.spacing.spacing01};
        padding: 0;
        height: 2rem;
        white-space: nowrap;

        svg {
          width: 1.125rem;
          height: 1.125rem;
          margin: 0 0.5rem;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    `}
`;

export const Navigation = { Container, Item, Info };
