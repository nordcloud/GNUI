import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { setColor } from "../../utils/setcolor";
import { darken } from "polished";

export type ToggleProps = {
  name: string;
  toggleValue?: boolean;
  labelText?: string;
  id?: string;
  className?: string;
  status?: string;
  size?: string;
  handleSelect?: (e: any) => void;
};

const StyledToggle = styled.button<ToggleProps>`
  border: ${theme.borderDefault};
  border-radius: ${theme.radiusDefault};
  line-height: ${theme.lineHeight};
  outline: none;
  cursor: pointer;
  color: ${theme.colors.primary};
  background: transparent;
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  transition: ${theme.transition};
  font-size: ${theme.fontSizes.md};

  &.active {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
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
    `}
`;

export const Toggle: FunctionComponent<ToggleProps> = ({
  status,
  size,
  name,
  toggleValue,
  labelText,
  handleSelect,
}) => {
  return (
    <StyledToggle
      size={size}
      status={status}
      name={name}
      className={toggleValue ? "active" : ""}
      onClick={() => handleSelect && handleSelect(!toggleValue)}
    >
      {labelText}
    </StyledToggle>
  );
};
