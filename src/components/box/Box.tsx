import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container } from "../container";

type BoxProps = {
  dark?: boolean;
  minHeight?: string;
};

const StyledBox = styled(Container)<BoxProps>`
  padding: ${theme.spacing.spacing05};
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  font-weight: ${theme.fontWeights.medium};
  box-shadow: ${theme.shadow.shadow02};
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
