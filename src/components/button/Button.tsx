import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { setColor, changeHue } from "../../utils/colorFunctions";

interface ButtonProps {
  children: string;
  onClick?: (e: any) => void;
  severity?: string;
  priority?: string;
  size?: string;
  color?: string;
  select?: boolean;
  secondary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${theme.colors.primary};
  font-family: ${theme.fontFamily.regular};
  color: ${theme.colors.light};
  border: 0.0625rem solid ${theme.colors.primary};
  font-weight: ${theme.fontWeights.medium};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  transition: ${theme.transition};
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    color: ${theme.colors.light500};
  }
  &:active {
    color: ${theme.colors.dark100};
  }
  &:disabled {
    background-color: ${theme.colors.light400};
    border: 0.0625rem solid ${theme.colors.light400};
    color: ${theme.colors.dark100};
    &:hover {
      color: ${theme.colors.dark100};
      cursor: not-allowed;
    }
  }

  ${({ color }) =>
    color &&
    css`
      color: ${theme.colors.light};
      background-color: ${setColor(color)};
      border: 0.0625rem solid ${setColor(color)};
      &:hover {
        color: ${theme.colors.light};
        background-color: ${changeHue(color, 15)};
      }
      &:active {
        color: ${theme.colors.light};
        background-color: ${changeHue(color, 30)};
      }
      &:disabled {
        color: ${theme.colors.light};
        background-color: ${changeHue(color, 50)};
        &:hover {
          color: ${theme.colors.light};
        }
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 0.0625rem solid ${theme.colors.light500};
      color: ${theme.colors.primary};
      &:hover {
        background-color: ${theme.colors.light300};
        border: 0.0625rem solid ${theme.colors.light500};
        color: ${theme.colors.primary};
      }
      &:active {
        background-color: ${theme.colors.light400};
        border: 0.0625rem solid ${theme.colors.light500};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background-color: transparent;
        border: 0.0625rem solid ${theme.colors.light500};
        color: ${theme.colors.light500};
        cursor: not-allowed;
        &:hover {
          background-color: transparent;
          color: ${theme.colors.light500};
        }
      }
    `}

  ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      border: 0.0625rem solid ${theme.colors.light500};
      color: ${theme.colors.primary};
      &:hover {
        background-color: ${theme.colors.light300};
        border: 0.0625rem solid ${theme.colors.light500};
        color: ${theme.colors.primary};
      }
      &:active {
        background-color: ${theme.colors.light400};
        border: 0.0625rem solid ${theme.colors.light500};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background-color: transparent;
        border: 0.0625rem solid ${theme.colors.light500};
        color: ${theme.colors.light500};
        cursor: not-allowed;
        &:hover {
          background-color: transparent;
          color: ${theme.colors.light500};
        }
      }
    `}

  ${({ severity }) =>
    severity === "medium" &&
    css`
      background-color: transparent;
      border: 0.0625rem solid ${theme.colors.light500};
      color: ${theme.colors.primary};
      &:hover {
        background-color: ${theme.colors.light300};
        border: 0.0625rem solid ${theme.colors.light500};

        color: ${theme.colors.primary};
      }
      &:active {
        background-color: ${theme.colors.light400};
        border: 0.0625rem solid ${theme.colors.light500};
        color: ${theme.colors.primary};
      }
      &:disabled {
        background-color: transparent;
        border: 0.0625rem solid ${theme.colors.light500};
        color: ${theme.colors.light500};
        cursor: not-allowed;
        &:hover {
          background-color: transparent;
          color: ${theme.colors.light500};
        }
      }
    `}

  ${({ severity }) =>
    severity === "low" &&
    css`
      background-color: transparent;
      border: 0.0625rem solid transparent;
      color: ${theme.colors.primary};
      &:hover {
        background-color: transparent;
        border: 0.0625rem solid transparent;
        color: ${theme.colors.primary};
      }
      &:active {
        background-color: ${theme.colors.light400};
        border: 0.0625rem solid transparent;
        color: ${theme.colors.primary};
      }
      &:disabled {
        background-color: transparent;
        border: 0.0625rem solid transparent;
        color: ${theme.colors.light500};
        &:hover {
          color: ${theme.colors.light500};
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
      font-size: 0.75rem;
      line-height: 0.9rem;
      padding: 0.55rem 0.75rem;
    `}
`;

export const Button: React.FC<ButtonProps> = props => {
  return (
    <StyledButton
      severity={props.severity || "high"}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};
