import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { darken } from "polished";

export interface SelectButtonProps {
  name: string;
  value: string;
  labelText: string;
  isActive?: boolean;
  id?: string;
  onClick: (value: any) => void;
}

export interface SelectButtonListProps {
  children: any;
  status?: string;
  size?: string;
}

type StyledSelectButtons = {
  status?: string;
  size?: string;
};

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const StyledSelectButtons = styled.ul<StyledSelectButtons>`
  margin: 0;
  padding: 0;
  display: inline-flex;
  list-style: none;
  border: ${theme.borderDefault};
  border-radius: ${theme.radiusDefault};
  line-height: ${theme.lineHeight};

  li {
    display: inline-block;
    border-right: ${theme.borderDefault};

    &:last-child {
      border-right: none;
    }
    button {
      outline: none;
      cursor: pointer;
      color: ${theme.colors.primary};
      border: none;
      background: transparent;
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
      transition: ${theme.transition};
      font-size: ${theme.fontSizes.regular};

      &.active {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      ${({ size }) =>
        size === "small" &&
        css`
          font-size: ${theme.fontSizes.sm};
          padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
        `}
    }
  }

  ${({ status }) =>
    status &&
    css`
      border: 1px solid ${setColor(status)};
      li {
        border-right: 1px solid ${setColor(status)};
        button {
          color: ${setColor(status)};
          &.active {
            color: ${theme.colors.white};
            background: ${setColor(status)};
            &:hover {
              background: ${darken(0.1, theme.colors[status] || status)};
            }
            &:active {
              background: ${darken(0.2, theme.colors[status] || status)};
            }
            &:disabled {
              background: ${darken(0.3, theme.colors[status] || status)};
            }
          }
        }
      }
    `}
`;

export const SelectButton: FunctionComponent<SelectButtonProps> = ({
  name,
  value,
  labelText,
  isActive = false,
  id = "",
  onClick,
  ...props
}) => (
  <li>
    <button
      type="button"
      value={value}
      name={name}
      className={isActive ? "active" : ""}
      {...props}
      onClick={() => onClick(value)}
    >
      {labelText}
    </button>
  </li>
);

export const MultipleSelect: FunctionComponent<SelectButtonListProps> = ({
  status,
  children,
  size,
}) => {
  return (
    <StyledSelectButtons status={status} size={size}>
      {children}
    </StyledSelectButtons>
  );
};
