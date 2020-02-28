import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Icon } from "../icon";
import { Container, Flex } from "../container";
import { IconProps } from "../icon";

interface DropdownProps {
  name: string;
  options: Array<string>;
  width?: string;
  value?: string;
  isOpen?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
  onChange?: (e: React.ChangeEvent) => void;
}

interface DropdownIconProps extends IconProps {
  animate?: boolean;
}

const DropdownWrapper = styled(Container)`
  position: relative;
`;

const DropdownButton = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: 0.0625rem solid ${theme.colors.lights[4]};
  color: ${theme.colors.primary};
  padding: 0.5rem;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover {
    background: ${theme.colors.lights[1]};
    border: 0.0625rem solid ${theme.colors.lights[4]};
    color: ${theme.colors.primary};
  }
  &:active {
    background: ${theme.colors.lights[2]};
    border: 0.0625rem solid ${theme.colors.lights[4]};
    color: ${theme.colors.primary};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background: transparent;
      border: 0.0625rem solid ${theme.colors.lights[4]};
      color: ${theme.colors.lights[4]};
      cursor: not-allowed;
      &:hover {
        background: transparent;
        color: ${theme.colors.lights[4]};
      }
    `}
`;

const DropdownIcon = styled(Icon)<DropdownIconProps>`
  transition: ${theme.transition};
  ${({ animate }) =>
    animate &&
    css`
      transform: rotate(180deg);
      transition: ${theme.transition};
    `}
`;

const DropdownMenu = styled(Container)`
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  border: 0.0625rem solid ${theme.colors.lights[4]};
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeights.regular};
  border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
  background: ${theme.colors.white};
  z-index: 1;
  transition: ${theme.transition};
`;

const DropdownItem = styled.option`
  border: 0;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  font-size: ${theme.fontSizes.regular};
  transition: ${theme.transition};
  padding: 0.25rem 0 0.25rem 0.5rem;
  list-style: none;
  transition: ${theme.transition};
  &:hover {
    cursor: pointer;
    background: ${theme.colors.lights[3]};
  }
  &:first-of-type {
    color: ${theme.colors.lights[2]};
    background: ${theme.colors.darks[4]};
    cursor: not-allowed;
  }
`;

export const Dropdown: FunctionComponent<DropdownProps> = ({
  value = "",
  name,
  options,
  disabled = false,
  onChange,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  return (
    <DropdownWrapper value={selectedValue} {...props}>
      <DropdownButton
        name={name}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled && disabled}
      >
        {selectedValue || name}
        <DropdownIcon
          width="0.75rem"
          height="0.75rem"
          image="ARROW_BOTTOM"
          animate={isOpen && true}
        />
      </DropdownButton>
      {isOpen && !disabled && (
        <DropdownMenu
          onClick={() => setIsOpen(!isOpen)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <DropdownItem key="dropdown-title">{name}</DropdownItem>
          {options &&
            options.map((option: string) => (
              <DropdownItem
                value={option}
                key={option}
                onClick={() => setSelectedValue(option)}
              >
                {option}
              </DropdownItem>
            ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
