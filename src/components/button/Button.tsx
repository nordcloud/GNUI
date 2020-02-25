import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { lighten } from "polished";

interface ButtonProps {
  children: string;
  severity?: string;
  priority?: string;
  size?: string;
  color?: string;
  select?: boolean;
  secondary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const StyledButton = styled.button<ButtonProps>`
  background: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.lights[0]};
  border: 0.0625rem solid ${theme.colors.primary};
  font-weight: ${theme.fontWeights.regular};
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontSizes.regular};
  line-height: ${theme.lineHeight};
  margin: 0rem 0.5rem;
  transition: ${theme.transition};
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    color: ${theme.colors.lights[4]};
  }
  &:active {
    color: ${theme.colors.darks[4]};
  }
  &:disabled {
    background: ${theme.colors.lights[3]};
    border: 0.0625rem solid ${theme.colors.lights[3]};
    color: ${theme.colors.darks[4]};
    &:hover {
      color: ${theme.colors.darks[4]};
      cursor: not-allowed;
    }
  }

  ${({ color }) =>
    color &&
    css`
      color: ${theme.colors.lights[0]};
      background: ${setColor(color)};
      border: 0.0625rem solid ${setColor(color)};
      &:hover,
      &:active,
      &:disabled,
      &:disabled:hover {
        color: ${theme.colors.lights[0]};
      }
      &:hover {
        border: 0.0625rem solid ${lighten(0.1, theme.colors[color] || color)};
        background: ${lighten(0.1, theme.colors[color] || color)};
      }
      &:active {
        border: 0.0625rem solid ${lighten(0.2, theme.colors[color] || color)};
        background: ${lighten(0.2, theme.colors[color] || color)};
      }
      &:disabled {
        border: 0.0625rem solid ${lighten(0.3, theme.colors[color] || color)};
        background: ${lighten(0.3, theme.colors[color] || color)};
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background: ${theme.colors.lights[1]};
      border: 0.0625rem solid ${theme.colors.lights[4]};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.lights[1]};
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.primary};
      }
      &:active {
        background: ${theme.colors.lights[2]};
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background: transparent;
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.lights[4]};
        cursor: not-allowed;
        &:hover {
          background: transparent;
          color: ${theme.colors.lights[4]};
        }
      }
    `}

  ${({ outline }) =>
    outline &&
    css`
      background: transparent;
      border: 0.0625rem solid ${theme.colors.lights[4]};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.lights[1]};
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.primary};
      }
      &:active {
        background: ${theme.colors.lights[2]};
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background: transparent;
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.lights[4]};
        cursor: not-allowed;
        &:hover {
          background: transparent;
          color: ${theme.colors.lights[4]};
        }
      }
    `}

  ${({ severity }) =>
    severity === "medium" &&
    css`
      background: transparent;
      border: 0.0625rem solid ${theme.colors.lights[4]};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.lights[1]};
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.primary};
      }
      &:active {
        background: ${theme.colors.lights[2]};
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background: transparent;
        border: 0.0625rem solid ${theme.colors.lights[4]};
        color: ${theme.colors.lights[4]};
        cursor: not-allowed;
        &:hover {
          background: transparent;
          color: ${theme.colors.lights[4]};
        }
      }
    `}

  ${({ severity }) =>
    severity === "low" &&
    css`
      background: transparent;
      border: 0.0625rem solid transparent;
      color: ${theme.colors.primary};
      &:hover {
        background: transparent;
        border: 0.0625rem solid transparent;
        color: ${theme.colors.primary};
      }
      &:active {
        background: ${theme.colors.lights[1]};
        border: 0.0625rem solid transparent;
        color: ${theme.colors.primary};
      }
      &:disabled {
        background: transparent;
        border: 0.0625rem solid transparent;
        color: ${theme.colors.lights[4]};
        &:hover {
          color: ${theme.colors.lights[4]};
        }
      }
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      padding: 0.75rem 1.25rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: ${theme.fontSizes.small};
      line-height: ${theme.lineHeight};
      padding: 0.5rem 0.7rem;
      letter-spacing: 0.025rem;
    `}
`;

export const Button: FunctionComponent<ButtonProps> = ({
  severity,
  children,
  ...props
}) => {
  return (
    <StyledButton severity={severity} {...props}>
      {children}
    </StyledButton>
  );
};
