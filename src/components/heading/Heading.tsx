import * as React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  children: React.ReactNode;
  level: HeadingLevel;
  color?: string;
  marginBottom?: keyof typeof theme.spacing;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
};

const changeAttributes = (level: HeadingLevel) => {
  switch (level) {
    case 6:
      return theme.fontSizes.xs;
    case 5:
      return theme.fontSizes.sm;
    case 4:
      return theme.fontSizes.md;
    case 3:
      return theme.fontSizes.lg;
    case 2:
      return theme.fontSizes.xl;
    case 1:
      return theme.fontSizes.xxl;
    default:
      return theme.fontSizes.md;
  }
};

const StyledHeading = styled.h1<HeadingProps>`
  color: ${theme.color.text.text01};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.medium};
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 0;
  text-rendering: optimizeLegibility;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ level }) =>
    level &&
    css`
      font-size: ${changeAttributes(level)};
    `};
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${theme.spacing[marginBottom] || marginBottom};
    `};
  ${space}
`;

export function Heading({
  children,
  level,
  ...props
}: HeadingProps & SpaceProps) {
  return (
    <StyledHeading
      as={level ? (`h${level}` as keyof JSX.IntrinsicElements) : "h1"}
      level={level || 1}
      {...props}
    >
      {children}
    </StyledHeading>
  );
}
