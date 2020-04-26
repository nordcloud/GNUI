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
  margin?: string;
  shadow?: string;
  border?: string;
  color?: string;
  children?: React.ReactNode;
};

const StyledBox = styled(Container)<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  padding: ${theme.spacing.spacing05};
  border-radius: ${theme.radius.default};
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  font-weight: ${theme.fontWeights.regular};
  box-shadow: ${theme.shadow.shadow02};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};
  ${({ dark }) =>
    dark &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${theme.radius[radius]};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${theme.spacing[padding]};
    `}
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: ${theme.shadow[shadow]};
    `}
  ${({ margin }) =>
    // margin should be deleted ASAP after mergin Spacer
    margin &&
    css`
      margin-bottom: ${theme.spacing[margin]};
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
  ${({ border }) =>
    border &&
    css`
      border: ${theme.borders[border]};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${theme.colors[color] || color};
    `}
`;

export const Box: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);
