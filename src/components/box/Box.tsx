import React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";
import { GnuiContainer } from "../container";

type BoxProps = {
  dark?: boolean;
  minHeight?: string;
  minWidth?: string;
  border?: keyof typeof theme.borders;
  color?: string;
  backgroundColor?: string;
  radius?: keyof typeof theme.radius;
  spacing?: keyof typeof theme.spacing;
  innerSpacing?: keyof typeof theme.spacing;
  shadow?: keyof typeof theme.shadow;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  boxStyle?: "lightGrey" | "grey";
};

const changeBoxStyle = (boxStyle: string) => {
  switch (boxStyle) {
    case "lightGrey":
      return `
      background: ${theme.color.background.ui03};
      border: 1px solid ${theme.color.border.border01};
      padding: ${theme.spacing.spacing03};
      box-shadow: ${theme.shadow.shadow00};
      `;
    case "grey":
      return `
      background: ${theme.color.background.ui04};
      padding: ${theme.spacing.spacing03};
      box-shadow: ${theme.shadow.shadow00};
      `;
  }
};

const StyledBox = styled(GnuiContainer)<BoxProps & SpaceProps>`
  box-sizing: border-box;
  min-width: 0;
  padding: ${theme.spacing.spacing04};
  border-radius: ${theme.radiusDefault};
  color: ${theme.color.text.text01};
  background: ${theme.color.background.ui01};
  font-weight: ${theme.fontWeights.regular};
  box-shadow: ${theme.shadow.shadow02};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};
  ${({ boxStyle }) =>
    boxStyle &&
    css`
      ${changeBoxStyle(boxStyle)}
    `}
  ${({ dark }) =>
    dark &&
    css`
      background: ${theme.color.background.ui05};
      color: ${theme.color.text.text04};
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
      color: ${color};
    `}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
     ${space}
`;

export function Box({ children, ...props }: BoxProps & SpaceProps) {
  return <StyledBox {...props}>{children}</StyledBox>;
}
