import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { darken } from "polished";
import { space, SpaceProps } from "styled-system";
interface ButtonProps {
  children: string | React.ReactNode;
  severity?: "high" | "medium" | "low";
  priority?: string;
  size?: string;
  color?: string;
  select?: boolean;
  secondary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const StyledButton = styled.button<ButtonProps>`
  background: ${theme.colors.primary};
  white-space: nowrap;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.white};
  border: ${theme.borderDefault}; 
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.regular};
  line-height: ${theme.lineHeight};
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
    border: ${theme.borders.grey};
    color: ${theme.colors.darks[4]};
    &:hover {
      color: ${theme.colors.darks[4]};
      cursor: not-allowed;
    }
  }

  ${({ color }) =>
    color &&
    css`
      color: ${theme.colors.white};
      background: ${setColor(color)};
      border: 1px solid ${setColor(color)};
      &:hover,
      &:active,
      &:disabled,
      &:disabled:hover {
        color: ${theme.colors.white};
      }
      &:hover {
        border-color: ${darken(0.1, setColor(color))};
        background: ${darken(0.1, theme.colors[color] || color)};
      }
      &:active {
        border-color: ${darken(0.2, setColor(color))};
        background: ${darken(0.2, theme.colors[color] || color)};
      }
      &:disabled {
        border-color: ${darken(0.3, setColor(color))};
        background: ${darken(0.3, theme.colors[color] || color)};
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background: ${theme.colors.lights[1]};
      border: ${theme.borderDefault};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.lights[1]};
        color: ${theme.colors.primary};
      }
      &:active {
        background: ${theme.colors.lights[2]};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background: transparent;
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
      border: ${theme.borderDefault};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.lights[1]};
        color: ${theme.colors.primary};
      }
      &:active {
        background: ${theme.colors.lights[2]};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background: transparent;
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
      border: ${theme.borderDefault};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.lights[1]};
        color: ${theme.colors.primary};
      }
      &:active {
        background: ${theme.colors.lights[2]};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background: transparent;
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
      border: ${theme.borders.transparent};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.lights[1]};
        border: ${theme.borders.transparent};
        color: ${theme.colors.primary};
      }
      &:active {
        background: ${theme.colors.lights[2]};
        border: ${theme.borders.transparent};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background: transparent;
        border: ${theme.borders.transparent};
        color: ${theme.colors.lights[4]};
        &:hover {
          color: ${theme.colors.lights[4]};
        }
      }
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      padding: ${theme.spacing.spacing03} ${theme.spacing.spacing05};
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: ${theme.fontSizes.small};
      line-height: ${theme.lineHeight};
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
      letter-spacing: 0.025rem;
    `}

    ${space}
`;

export const Button: FunctionComponent<ButtonProps & SpaceProps> = ({
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
