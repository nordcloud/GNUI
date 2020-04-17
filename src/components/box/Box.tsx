import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container } from "../container";
import { lighten } from "polished";

type BoxProps = {
  dark?: boolean;
  minHeight?: string;
};

const StyledBox = styled(Container)<BoxProps>`
  padding: ${theme.spacing.spacing05};
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  font-weight: ${theme.fontWeights.medium};
  box-shadow: 0 0.05rem 0.25rem ${lighten(0.7, theme.colors.darks[1])};
  transition: ${theme.transition};
  ${({ dark }) =>
    dark &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight};
    `}
`;

export const Box: FunctionComponent = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);
