import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container } from "../container";

type BoxProps = {
  dark?: boolean;
  minHeight?: string;
  minWidth?: string;
  border?: string;
  color?: string;
  backgroundColor?: string;
  radius?: "small" | "medium" | "large";
  padding?:
    | "spacing01"
    | "spacing02"
    | "spacing03"
    | "spacing04"
    | "spacing05"
    | "spacing06"
    | "spacing07"
    | "spacing08";
  spacing?:
    | "spacing01"
    | "spacing02"
    | "spacing03"
    | "spacing04"
    | "spacing05"
    | "spacing06"
    | "spacing07"
    | "spacing08";

  shadow?: "shadow01" | "shadow02" | "shadow03" | "shadow04";

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

     ${({ spacing }) =>
       spacing &&
       css`
         margin-top: ${theme.spacing[spacing]};
       `}

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: ${theme.shadow[shadow]};
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
      border: ${theme.borders[border] || border};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${theme.colors[color] || color};
    `}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${theme.colors[backgroundColor] || backgroundColor};
    `}
`;

export const Box: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);
