import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface HeadingProps {
  color?: string;
  as?: string;
}

const headingSizes: any = {
  h1: "2.5rem",
  h2: "2rem",
  h3: "1.5rem",
  h4: "1.25rem",
  h5: "1rem",
  h6: "0.8rem"
};

const headingsWeights: any = {
  h1: theme.fontWeights.medium,
  h2: theme.fontWeights.medium,
  h3: theme.fontWeights.bold,
  h4: theme.fontWeights.bold,
  h5: theme.fontWeights.bold,
  h6: theme.fontWeights.bold
};

const changeAttrs = (size: string) => css`
  font-size: ${headingSizes[size]};
  font-weight: ${headingsWeights[size]};
  line-height: ${size === "h1" || size === "h2" || size === "h3"
    ? "1.2rem"
    : "1.4rem"};
`;

const StyledHeading = styled.h1<HeadingProps>`
  font-family: ${theme.fontFamily.headers};
  font-weight: ${headingsWeights["h1"]};
  font-size: ${headingSizes["h1"]};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ as }) =>
    as &&
    css`
      ${changeAttrs(as)};
    `}
`;

export const Heading: FunctionComponent = ({ children, ...props }) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);
