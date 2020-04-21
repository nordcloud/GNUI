import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface HeadingProps {
  level: number;
  color?: string;
  as?: any;
}

const changeAttrs = (level: number) => {
  let margin: string;
  switch (level) {
    case 6:
      margin = theme.spacing.spacing03;
      break;
    case 5:
    case 4:
      margin = theme.spacing.spacing04;
      break;
    case 3:
      margin = theme.spacing.spacing05;
      break;
    default:
      margin = theme.spacing.spacing06;
  }

  return css`
    font-size: ${theme.headings.sizes[level - 1]}rem;
    font-weight: ${theme.headings.weights[level > 2 ? 1 : 0]};
    margin: ${margin} 0;
  `;
};

const StyledHeading = styled.h1<HeadingProps>`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  font-weight: ${theme.headings.weights[0]};
  font-size: ${theme.headings.sizes[0]}rem;
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
