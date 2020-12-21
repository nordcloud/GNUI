import styled, { css } from "styled-components";
import theme from "../../theme";
import { Icon } from "../icon";
import { GnuiContainer } from "../container";
import { IconProps } from "../icon";
import { space } from "styled-system";

type DropdownWrapperProps = {
  value: string;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onClear?: () => void;
};

export const DropdownWrapper = styled(GnuiContainer)<DropdownWrapperProps>`
  position: relative;
  ${space}
`;

export const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.color.field.default};
  border: ${theme.borderInput};
  border-radius: ${theme.radiusDefault};
  line-height: 1.5em;
  padding-right: 1.5rem;
  font-size: inherit;
  color: ${theme.color.text.primary};
  padding: ${theme.spacing.spacing02};
  cursor: pointer;
  transition: ${theme.transition};

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: ${theme.color.border.hover};
    color: ${theme.color.text.primary};
  }

  &:active {
    border-color: ${theme.color.border.hover};
    color: ${theme.color.text.primary};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${theme.color.field.disabled};
      border: ${theme.borderInput};
      color: ${theme.color.text.placeholder};
      cursor: not-allowed;

      &:hover {
        background: ${theme.color.field.disabled};
        color: ${theme.color.text.placeholder};
      }
    `}
`;

type DropdownIconProps = {
  animate?: boolean;
} & IconProps;

export const DropdownIcon = styled(Icon)<DropdownIconProps>`
  transition: ${theme.transition};
  ${({ animate }) =>
    animate &&
    css`
      transform: rotate(180deg);
      transition: ${theme.transition};
    `}
`;

type DropdownMenuProps = {
  onClick: () => void;
};

export const DropdownMenu = styled(GnuiContainer)<DropdownMenuProps>`
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  padding: ${theme.spacing.spacing02};
  border: ${theme.borderInput};
  color: ${theme.color.text.primary};
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

type IClear = {
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
`;

export const DropdownItem = styled.button`
  border: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  background: ${theme.color.field.default};
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
`;
