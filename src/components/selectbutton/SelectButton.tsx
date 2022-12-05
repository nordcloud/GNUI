import * as React from "react";
import { darken } from "polished";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";
import { setColor } from "../../utils/setcolor";

export type SelectButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  name: string;
  value: string;
  labelText: React.ReactNode;
  isActive?: boolean;
  onClick: (value: SelectButtonProps["value"]) => void;
  disabled: boolean;
};

// Extend props with intrinsic attributes of ul as containerProps
// ref: https://github.com/kristerkari/react-native-css-modules-with-typescript-example/issues/3#issuecomment-852947240
export type SelectButtonListProps = {
  children: React.ReactNode;
  status?: SingleColors;
  size?: string;
} & React.HTMLAttributes<HTMLUListElement>;

type StyledSelectButtons = Pick<SelectButtonListProps, "size" | "status">;

/* stylelint-disable no-descending-specificity */
function getStatusCss(status: SingleColors) {
  return css`
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
  `;
}

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
      font-size: ${theme.fontSizes.md};
      font-family: ${theme.fonts.body};
      line-height: 1.5;
      text-transform: ${theme.typography.titleCase};

      &.active {
        background: ${theme.color.interactive.primary};
        color: ${theme.color.text.text04};
      }

      ${({ size }) =>
        size === "small" &&
        css`
          font-size: ${theme.fontSizes.sm};
          line-height: initial;
          padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
        `}

      &:disabled {
        cursor: not-allowed;
        background: ${theme.color.interactive.disabled};
        border-color: transparent;
        color: ${theme.color.text.text03};
      }
    }
  }

  ${({ status }) => status && getStatusCss(status)}
`;

export function SelectButton({
  name,
  value,
  labelText,
  isActive = false,
  onClick,
  disabled = false,
  ...props
}: SelectButtonProps) {
  return (
    <li>
      <button
        type="button"
        value={value}
        name={name}
        className={isActive ? "active" : ""}
        onClick={() => onClick(value)}
        disabled={disabled}
        {...props}
      >
        {labelText}
      </button>
    </li>
  );
}

export function MultipleSelect({
  status,
  children,
  size,
  ...containerProps
}: SelectButtonListProps) {
  return (
    <StyledSelectButtons status={status} size={size} {...containerProps}>
      {children}
    </StyledSelectButtons>
  );
}
