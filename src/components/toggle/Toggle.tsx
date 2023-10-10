import * as React from "react";
import { darken } from "polished";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";
import { setColor } from "../../utils/setcolor";

const StyledToggle = styled.button<Pick<CustomProps, "size" | "status">>`
  border: 1px solid ${theme.color.interactive.primary};
  border-radius: ${theme.radiusDefault};
  line-height: ${theme.lineHeight};
  color: ${theme.color.text.text01};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  transition: ${theme.transition};
  font-size: ${theme.fontSizes.md};
  outline: none;
  cursor: pointer;
  background: transparent;

  &.active {
    background: ${theme.color.interactive.primary};
    color: ${theme.color.text.text04};
  }

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: ${theme.fontSizes.md};
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
    `}

  ${({ status }) =>
    status &&
    css`
      color: ${setColor(status)};
      border: 1px solid ${setColor(status)};
      &.active {
        color: ${theme.color.text.text01};
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
    `}
`;

type CustomProps = {
  value: boolean;
  labelText?: string;
  status?: SingleColors;
  size?: string;
  onChange: (value: boolean) => void;
};

export type ToggleProps = CustomProps &
  React.ComponentProps<typeof StyledToggle>;

export function Toggle({
  value,
  labelText = "",
  onChange,
  ...props
}: ToggleProps) {
  return (
    <StyledToggle
      className={value ? "active" : ""}
      onClick={onChange}
      {...props}
    >
      {labelText}
    </StyledToggle>
  );
}
