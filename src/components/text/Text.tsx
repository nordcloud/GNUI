import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface TextProps {
  size?: number;
  display?: string;
  color?: string;
  tag?: string;
  as?: any;
  bold?: boolean;
  italic?: boolean;
  small?: boolean;
  caption?: boolean;
}

const changeSize = (size: number) => css`
  font-size: ${theme.fontSizes[size]};
`;

const basicStyles = css<TextProps>`
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeight};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.regular};
  color: ${(props) => props.color || theme.colors.primary};
`;

const StyledText = styled.p<TextProps>`
  ${basicStyles};
  margin: ${theme.spacing.spacing04} 0;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${theme.fontWeights.bold};
    `}
  ${({ size }) =>
    size &&
    css`
      ${changeSize(size)};
    `}
  ${({ small }) =>
    small &&
    css`
      margin: ${theme.spacing.spacing02} 0;
      font-size: ${theme.fontSizes.small};
    `}
  ${({ caption }) =>
    caption &&
    css`
      font-size: ${theme.fontSizes.small};
    `}
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
`;

const StyledCode = styled.code`
  ${basicStyles};
  font-family: ${theme.fonts.monospace};
  font-size: inherit;
`;

export const Text: FunctionComponent<TextProps> = ({
  tag,
  children,
  ...props
}) => (
  <StyledText as={tag || "p"} tag={tag} {...props}>
    {children}
  </StyledText>
);

export const Code: FunctionComponent = ({ children, ...props }) => (
  <StyledCode {...props}>{children}</StyledCode>
);
