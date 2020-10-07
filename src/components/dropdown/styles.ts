import styled, { css } from "styled-components";
import theme from "../../theme";
import { Icon } from "../icon";
import { GnuiContainer } from "../container";
import { IconProps } from "../icon";
import { space } from "styled-system";

interface DropdownWrapperProps {
  value: string;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onClear?: () => void;
}

export const DropdownWrapper = styled(GnuiContainer)<DropdownWrapperProps>`
  position: relative;
  ${space}
`;

export const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: ${theme.borderInput};
  border-radius: ${theme.radiusDefault};
  line-height: 1.5em;
  padding-right: 1.5rem;
  font-size: inherit;
  color: ${theme.colors.primary};
  padding: ${theme.spacing.spacing03};
  cursor: pointer;
  transition: ${theme.transition};

  &:hover {
    background: ${theme.colors.lights[1]};
    color: ${theme.colors.primary};
  }

  &:active {
    background: ${theme.colors.lights[2]};
    color: ${theme.colors.primary};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: transparent;
      border: ${theme.borderInput};
      color: ${theme.colors.lights[4]};
      cursor: not-allowed;

      &:hover {
        background: transparent;
        color: ${theme.colors.lights[4]};
      }
    `}
`;

interface DropdownIconProps extends IconProps {
  animate?: boolean;
}

export const DropdownIcon = styled(Icon)<DropdownIconProps>`
  transition: ${theme.transition};
  ${({ animate }) =>
    animate &&
    css`
      transform: rotate(180deg);
      transition: ${theme.transition};
    `}
`;

interface DropdownMenuProps {
  onClick: () => void;
}

export const DropdownMenu = styled(GnuiContainer)<DropdownMenuProps>`
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  border: ${theme.borderInput};
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeights.regular};
  border-radius: ${theme.radiusDefault};
  background: ${theme.colors.white};
  z-index: 1;
  transition: ${theme.transition};
  box-shadow: ${theme.shadow.shadow02};
`;

export const Inner = styled.span`
  margin-right: 1rem;
`;

interface IClear {
  onClick: () => void;
}

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
  background: transparent;
  font-size: inherit;
  transition: ${theme.transition};
  padding: ${theme.spacing.spacing01} 0 ${theme.spacing.spacing01} 1rem;
  list-style: none;
  transition: ${theme.transition};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.lights[3]};
  }
`;
