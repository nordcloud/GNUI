import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container } from "../container";
import { space, SpaceProps } from "styled-system";

type BoxProps = {
  dark?: boolean;
  minHeight?: string;
  minWidth?: string;
  border?: string;
  color?: string;
  backgroundColor?: string;
  radius?: "small" | "medium" | "large";
  spacing?:
    | "spacing01"
    | "spacing02"
    | "spacing03"
    | "spacing04"
    | "spacing05"
    | "spacing06"
    | "spacing07"
    | "spacing08";
  innerSpacing?:
    | "spacing01"
    | "spacing02"
    | "spacing03"
    | "spacing04"
    | "spacing05"
    | "spacing06"
    | "spacing07"
    | "spacing08";
  shadow?: "shadow00" | "shadow01" | "shadow02" | "shadow03" | "shadow04";
  onClick?: (e: any) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

const StyledBox = styled(Container)<BoxProps & SpaceProps>`
  box-sizing: border-box;
  min-width: 0;
  padding: ${theme.spacing.spacing04};
  border-radius: ${theme.radius.default};
  color: ${theme.colors.primary};
  background: ${theme.colors.snowWhite};
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

  ${({ innerSpacing }) =>
    innerSpacing &&
    css`
      padding: ${theme.spacing[innerSpacing]};
    `}

  ${({ spacing }) =>
    spacing &&
    css`
      margin-bottom: ${theme.spacing[spacing]};
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
     ${space}
`;

export const Box: FunctionComponent<BoxProps & SpaceProps> = ({
  children,
  ...props
}) => <StyledBox {...props}>{children}</StyledBox>;
