import React, { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";

type TextProps = HTMLAttributes<HTMLElement> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  display?: string;
  color?: SingleColors | string;
  tag?: keyof JSX.IntrinsicElements;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  weight?: "regular" | "medium" | "bold";
  textStyle?: "normal" | "italic";
  align?: "left" | "center" | "right";
  lineHeight?: string;
  width?: string;
  nowrap?: boolean;
  isTitle?: boolean;
};

const changeTag = (tag: keyof JSX.IntrinsicElements) => {
  let spacing: string;
  if (tag !== "p") {
    spacing = "0";
  } else {
    spacing = theme.spacing.spacing04;
  }
  return spacing;
};

const basicStyles = css<Pick<TextProps, "color">>`
  text-rendering: optimizeLegibility;
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeight};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.md};
  margin: 0 0 ${theme.spacing.spacing04} 0;
  color: ${(props) => props.color || theme.color.text.text01};
`;

const StyledText = styled.p<TextProps>`
  ${basicStyles}
  ${({ size }) =>
    size &&
    css`
      font-size: ${theme.fontSizes[size]};
    `}
  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
  ${({ tag }) =>
    tag &&
    css`
      margin-bottom: ${changeTag(tag)};
    `}
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${theme.fontWeights[weight]};
    `}
  ${({ textStyle }) =>
    textStyle &&
    css`
      font-style: ${textStyle};
    `}
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${theme.colors[color as SingleColors] || color};
    `}
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ nowrap }) =>
    nowrap &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `} 
  ${({ isTitle }) =>
    isTitle &&
    css`
      text-transform: ${theme.typography.titleCase};
    `}
  ${space}
`;

const StyledCode = styled.code`
  ${basicStyles};
  font-family: ${theme.fonts.body};
  font-size: inherit;
`;

export const Text: React.FC<TextProps & SpaceProps> = ({
  tag = "p",
  children,
  ...props
}) => (
  <StyledText as={tag} tag={tag} {...props}>
    {children}
  </StyledText>
);

type CodeProps = HTMLAttributes<HTMLSpanElement>;

export const Code: React.FC<CodeProps> = ({ children, ...props }) => (
  <StyledCode {...props}>{children}</StyledCode>
);
