import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Container } from "../container";

const StyledText = styled(Container)`
  font-family: ${theme.fonts.body};
  font-size: ${props => props.size || theme.fontSizes.regular};
`;

const StyledCode = styled(StyledText)`
  font-family: ${theme.fonts.monospace};
`;

export const Text: FunctionComponent = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

export const Code: FunctionComponent = ({ children, ...props }) => (
  <StyledCode {...props}>{children}</StyledCode>
);
