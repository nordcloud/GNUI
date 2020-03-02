import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container } from "../container";

const StyledText = styled(Container)`
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeight};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${props => props.size || theme.fontSizes.regular};
  color: ${props => props.color || theme.colors.primary};
  margin: 0;
  ${({ fontWeight }) =>
    fontWeight === "bold" &&
    css`
      font-weight: ${theme.fontWeights.bold};
    `}
  ${({ fontWeight }) =>
    fontWeight === "light" &&
    css`
      font-weight: ${theme.fontWeights.light};
    `}
`;

const StyledCode = styled.code`
  font-family: ${theme.fonts.monospace};
`;

export const Text: FunctionComponent = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

export const Code: FunctionComponent = ({ children, ...props }) => (
  <StyledCode {...props}>{children}</StyledCode>
);
