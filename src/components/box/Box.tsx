import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container } from "../container";

type BoxProps = {
  dark?: boolean;
  minHeight?: string;
  minWidth?: string;
  radius?: string;
  padding?: string;
  spacing?: string;
  shadow?: string;
  children?: React.ReactNode
};

const changeRadius = (radius: string) => css`
  border-radius: ${theme.radius[radius]};
`;

const changePadding = (padding: string) => css`
  padding: ${theme.spacing[padding]};
`;

const changeMargin = (spacing: string) => css`
  margin-bottom: ${theme.spacing[spacing]};
`;

const changeShadow = (shadow: string) => css`
  box-shadow: ${theme.shadow[shadow]};
`;

const StyledBox = styled(Container) <BoxProps>`
  padding: ${theme.spacing.spacing05};
  border-radius: ${theme.radius.default};
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  font-weight: ${theme.fontWeights.regular};
  box-shadow: ${theme.shadow.shadow02};
  transition: ${theme.transition};
  ${({ dark }) =>
    dark &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
  ${({ radius }) =>
    radius &&
    css`
    ${changeRadius(radius)};
  `} 
  ${({ padding }) =>
    padding &&
    css`
    ${changePadding(padding)};
  `} 
  ${({ shadow }) =>
    shadow &&
    css`
    ${changeShadow(shadow)};
  `} 
  ${({ margin }) =>
    margin &&
    css`
    ${changeMargin(margin)};
  `} 
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight};
    `}
  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}
`;

export const Box: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);
