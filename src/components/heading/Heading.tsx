import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import PropTypes from "prop-types";

interface HeadingProps {
  level: number;
  color?: string;
  as?: any;
}

type AttributesProps = { [name: number]: string | number };

const headingSizes: AttributesProps = {
  [1]: "2.5rem",
  [2]: "2rem",
  [3]: "1.5rem",
  [4]: "1.25rem",
  [5]: "1rem",
  [6]: "0.8rem"
};

const headingWeights: AttributesProps = {
  [1]: theme.fontWeights.medium,
  [2]: theme.fontWeights.medium,
  [3]: theme.fontWeights.bold,
  [4]: theme.fontWeights.bold,
  [5]: theme.fontWeights.bold,
  [6]: theme.fontWeights.bold
};

const headingHeights: AttributesProps = {
  [1]: "1.2rem",
  [2]: "1.2rem",
  [3]: "1.2rem",
  [4]: "1.4rem",
  [5]: "1.4rem",
  [6]: "1.4rem"
};

const headingMargins: AttributesProps = {
  [1]: "1.5rem 0",
  [2]: "1.5rem 0",
  [3]: "1.25rem 0",
  [4]: "1rem 0",
  [5]: "1rem 0",
  [6]: "0.75rem 0"
};

const changeAttrs = (level: number) => css`
  font-size: ${headingSizes[level]};
  font-weight: ${headingWeights[level]};
  /* line-height: ${headingHeights[level]}; */
  margin: ${headingMargins[level]};
`;

const StyledHeading = styled.h1<HeadingProps>`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.headers};
  font-weight: ${headingWeights[1]};
  font-size: ${headingSizes[1]};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
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
