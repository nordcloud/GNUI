import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface HeadingProps {
  level: number;
  color?: string;
  as?: any;
}

const changeAttrs = (level: number) => {
  const setMargins = () => {
    if (level === 6) {
      return theme.headings.margins[3];
    } else if (level === 4 || level === 5) {
      return theme.headings.margins[2];
    } else if (level === 3) {
      return theme.headings.margins[1];
    } else {
      return theme.headings.margins[0];
    }
  };

  return css`
    font-size: ${theme.headings.sizes[level - 1]}rem;
    font-weight: ${theme.headings.weights[level > 2 ? 1 : 0]};
    margin: ${setMargins()};
  `;
};

const StyledHeading = styled.h1<HeadingProps>`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.headers};
  font-weight: ${theme.headings.weights[0]};
  font-size: ${theme.headings.sizes[0]};
  margin: ${theme.headings.margins[0]};
  text-rendering: optimizeLegibility;
  ${({ color }) =>
    color &&
    css`
      color: ${theme.colors[color] || color};
    `}
  ${({ level }) =>
    level &&
    css`
      ${changeAttrs(level)};
    `}
`;

export const Heading: FunctionComponent<HeadingProps> = ({
  children,
  level,
  ...props
}) => (
  <StyledHeading as={level ? `h${level}` : "h1"} level={level || 1} {...props}>
    {children}
  </StyledHeading>
);
