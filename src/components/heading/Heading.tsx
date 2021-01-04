import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { space, SpaceProps } from "styled-system";

type HeadingProps = {
  level: number;
  color?: string;
  marginBottom?: string;
  as?: any;
};

const changeAttrs = (level: number) => {
  let fontSize: string;
  switch (level) {
    case 6:
      fontSize = theme.fontSizes.xs;
      break;
    case 5:
      fontSize = theme.fontSizes.sm;
      break;
    case 4:
      fontSize = theme.fontSizes.md;
      break;
    case 3:
      fontSize = theme.fontSizes.lg;
      break;
    case 2:
      fontSize = theme.fontSizes.xl;
      break;
    case 1:
      fontSize = theme.fontSizes.xxl;
      break;
    default:
      fontSize = theme.fontSizes.md;
  }
  return fontSize;
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
      font-size: ${changeAttrs(level)};
    `};
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${theme.spacing[marginBottom] || marginBottom};
    `};
  ${space}
`;

export const Heading: FunctionComponent<HeadingProps & SpaceProps> = ({
  children,
  level,
  ...props
}) => (
  <StyledHeading as={level ? `h${level}` : "h1"} level={level || 1} {...props}>
    {children}
  </StyledHeading>
);
