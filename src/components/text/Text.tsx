import * as React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";

type TextProps = React.HTMLAttributes<HTMLElement> & {
  size?: "lg" | "md" | "sm" | "xl" | "xs" | "xxl";
  display?: string;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  color?: SingleColors | string;
  tag?: keyof JSX.IntrinsicElements;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  weight?: "bold" | "medium" | "regular";
  textStyle?: "italic" | "normal";
  align?: "center" | "left" | "right";
  lineHeight?: string;
  width?: string;
  nowrap?: boolean;
  isTitle?: boolean;
};

const changeTag = (tag: keyof JSX.IntrinsicElements) => {
  if (tag !== "p") {
    return "0";
  }
  return theme.spacing.spacing04;
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

export function Text({
  tag = "p",
  children,
  ...props
}: SpaceProps & TextProps) {
  return (
    <StyledText as={tag} tag={tag} {...props}>
      {children}
    </StyledText>
  );
}

type CodeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Code({ children, ...props }: CodeProps) {
  return <StyledCode {...props}>{children}</StyledCode>;
}
