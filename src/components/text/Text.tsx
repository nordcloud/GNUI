import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface TextProps {
  size?: string;
  fontWeight?: string;
  fontSize?: number;
  color?: string;
  small?: boolean;
  caption?: boolean;
}

const changeWeight = (weight: string) => css`
  font-weight: ${theme.fontWeights[weight]};
`;

const changeSize = (size: number) => css`
  font-size: ${theme.fontSizes[size] ? theme.fontSizes[size] : "1rem"};
`;

const basicStyles = css<TextProps>`
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeight};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${props => props.size || theme.fontSizes.regular};
  color: ${props => props.color || theme.colors.primary};
`;

const StyledText = styled.p<TextProps>`
  ${basicStyles};
  margin: 1rem 0;

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      ${changeWeight(fontWeight)}
    `}

  ${({ fontSize }) =>
    fontSize &&
    css`
      ${changeSize(fontSize)};
    `}

  ${({ small }) =>
    small &&
    css`
      margin: 0.5rem 0;
      font-size: ${theme.fontSizes.small};
    `}

    ${({ caption }) =>
      caption &&
      css`
        font-size: 0.875rem;
      `}
`;

const StyledCode = styled.code`
  ${basicStyles};
  font-family: ${theme.fonts.monospace};
  font-size: inherit;
`;

export const Text: FunctionComponent = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

export const Code: FunctionComponent = ({ children, ...props }) => (
  <StyledCode {...props}>{children}</StyledCode>
);
