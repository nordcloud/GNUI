import styled, { css } from "styled-components";
import { space } from "styled-system";
import theme from "../../theme";
import { GnuiContainer } from "../container";

type DropdownWrapperProps = {
  value: string;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onClear?: () => void;
};

export const DropdownWrapper = styled(GnuiContainer)<DropdownWrapperProps>`
  position: relative;
  ${space}
`;

export type SizeProps = {
  size?: "sm" | "xs";
};

export const DropdownButton = styled.button<SizeProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.color.field.default};
  border: 1px solid ${theme.color.border.input};
  border-radius: ${theme.radiusDefault};
  line-height: 1.5em;
  font-size: inherit;
  color: ${theme.color.text.text01};
  padding: ${theme.spacing.spacing02};
  cursor: pointer;
  transition: ${theme.transition};

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: ${theme.spacing.spacing01};
  }

  &:focus {
    outline: none;
    border: 1px solid ${theme.color.border.focus};
  }

  &:hover {
    border-color: ${theme.color.border.border02};
    color: ${theme.color.text.text01};
  }

  &:active {
    border-color: ${theme.color.border.border02};
    color: ${theme.color.text.text01};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${theme.color.interactive.disabled};
      border: 1px solid ${theme.color.border.input};
      color: ${theme.color.text.text03};
      cursor: not-allowed;

      &:hover {
        background: ${theme.color.interactive.disabled};
        color: ${theme.color.text.text03};
      }
    `}

  ${({ size }) =>
    size &&
    css`
      padding: ${getPadding(size)};
      font-size: ${theme.fontSizes.sm};
    `}
`;

const getPadding = (size: string) => {
  switch (size) {
    case "sm":
      return `5px ${theme.spacing.spacing02}`;
    case "xs":
      return `1px ${theme.spacing.spacing01}`;
    default:
      return `1px ${theme.spacing.spacing01}`;
  }
};

type DropdownIconProps = {
  animate?: boolean;
};

export const DropdownIcon = styled.div<DropdownIconProps>`
  transition: ${theme.transition};
  display: flex;
  align-items: center;
  justify-items: center;
  ${({ animate }) =>
    animate &&
    css`
      transform: rotate(180deg);
      transform-origin: center center;
    `};
`;

type DropdownMenuProps = {
  onClick?: () => void;
};

export const DropdownMenu = styled(GnuiContainer)<DropdownMenuProps>`
  text-align: left;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  box-sizing: border-box;
  position: absolute;
  padding: ${theme.spacing.spacing02};
  border: 1px solid ${theme.color.border.input};
  color: ${theme.color.text.text01};
  font-weight: ${theme.fontWeights.regular};
  border-radius: ${theme.radiusDefault};
  background: ${theme.color.background.ui01};
  z-index: ${theme.zindex.default};
  transition: ${theme.transition};
  box-shadow: ${theme.shadow.shadow04};
  margin-top: ${theme.spacing.spacing01};
`;

export const Inner = styled.span`
  margin-right: 1rem;
`;

type IClear = SizeProps & {
  onClick: () => void;
};

export const Clear = styled.span<IClear>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 2rem;
  display: flex;
  align-items: center;
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  background: none;
  border: none;
  margin-left: auto;
  appearance: button;

  ${({ size }) =>
    size &&
    css`
      right: 1.25rem;
    `}
`;

export const DropdownItem = styled.button<SizeProps>`
  border: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  background: transparent;
  color: ${theme.color.text.text01};
  font-size: inherit;
  list-style: none;
  transition: ${theme.transition};
  line-height: 1.5rem;
  padding: ${theme.spacing.spacing01} ${theme.spacing.spacing02};
  border-radius: ${theme.radius.md};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background: ${theme.color.interactive.secondary};
  }

  ${({ size }) =>
    size &&
    css`
      padding: 0 ${theme.spacing.spacing01};
      font-size: ${theme.fontSizes.sm};
    `}
`;
