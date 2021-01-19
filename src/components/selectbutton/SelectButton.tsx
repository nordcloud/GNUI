import React, { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { setColor } from "../../utils/setcolor";
import { darken } from "polished";

export type SelectButtonProps = {
  name: string;
  value: string;
  labelText: string;
  isActive?: boolean;
  id?: string;
  onClick: (value: any) => void;
};

export type SelectButtonListProps = {
  children: ReactNode;
  status?: string;
  size?: string;
};

type StyledSelectButtons = {
  status?: string;
  size?: string;
};

const StyledSelectButtons = styled.ul<StyledSelectButtons>`
  margin: 0;
  padding: 0;
  display: inline-flex;
  list-style: none;
  border: 1px solid ${theme.color.interactive.primary};
  border-radius: ${theme.radiusDefault};
  line-height: ${theme.lineHeight};

  li {
    display: inline-block;
    border-right: 1px solid ${theme.color.interactive.primary};

    &:last-child {
      border-right: none;
    }
    button {
      outline: none;
      cursor: pointer;
      color: ${theme.color.interactive.primary};
      border: none;
      background: transparent;
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
      transition: ${theme.transition};
      font-size: ${theme.fontSizes.regular};
      text-transform: ${theme.typography.titleCase};

      &.active {
        background: ${theme.color.interactive.primary};
        color: ${theme.color.text.text04};
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
            color: ${theme.color.text.text04};
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
