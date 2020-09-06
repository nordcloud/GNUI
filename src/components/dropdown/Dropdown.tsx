import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Icon } from "../icon";
import { SVGIcon } from "../svgicon/SVGIcon";
import { Container } from "../container";
import { IconProps } from "../icon";
import { space, SpaceProps } from "styled-system";
import { Input } from "../input";

interface DropdownProps {
  name: string;
  options: Array<string | IOption>;
  width?: string;
  value?: string;
  isOpen?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  title?: string;
  onClick?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  onChange: (e: any) => void;
  onClear?: () => void;
}

interface IOption {
  value: string;
  label?: string;
}
interface IDropdownWrapper {
  onMouseLeave?: (e: any) => void;
  onClear?: () => void;
  value: string;
}

interface DropdownIconProps extends IconProps {
  animate?: boolean;
}

const DropdownWrapper = styled(Container)<IDropdownWrapper>`
  position: relative;
  ${space}
`;

const DropdownButton = styled.button`
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

export const DropdownIcon = styled(Icon)<DropdownIconProps>`
  transition: ${theme.transition};
  ${({ animate }) =>
    animate &&
    css`
      transform: rotate(180deg);
      transition: ${theme.transition};
    `}
`;
interface IDropdownMenu {
  onClick: () => void;
}
const DropdownMenu = styled(Container)<IDropdownMenu>`
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
interface IClear {
  onClick: () => void;
}
const Inner = styled.span`
  margin-right: 1rem;
`;
const Clear = styled.button<IClear>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 2rem;
  display: inline-block;
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  background: none;
  border: none;
  margin-left: auto;
`;

const DropdownItem = styled.button`
  border: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  background: transparent;
  font-size: inherit;
  transition: ${theme.transition};
  padding: ${theme.spacing.spacing01} 0 ${theme.spacing.spacing01}
    ${theme.spacing.spacing01};
  list-style: none;
  transition: ${theme.transition};
  &:hover {
    cursor: pointer;
    background: ${theme.colors.lights[3]};
  }
`;

export const Dropdown: FunctionComponent<DropdownProps & SpaceProps> = ({
  value = "",
  name,
  options,
  disabled = false,
  title,
  onChange,
  onClear,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const displayValue: string | IOption | undefined = options.find((option) => {
    if (typeof option === "string") {
      return option === value;
    }
    return option.value === value;
  });
  return (
    <DropdownWrapper
      value={value}
      {...props}
      onMouseLeave={() => isOpen && setIsOpen(!isOpen)}
    >
      <DropdownButton
        name={name}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled && disabled}
        title={title}
        type="button"
      >
        <Inner>
          {!displayValue
            ? name
            : typeof displayValue === "string"
            ? displayValue
            : displayValue.label || displayValue.value}
        </Inner>
        {onClear && displayValue && (
          <Clear
            onClick={() => onClear && onClear()}
            title={`Clear ${name} value`}
          >
            <SVGIcon size="sm" name="close" />
          </Clear>
        )}
        <DropdownIcon
          width="0.75rem"
          height="0.75rem"
          image="ARROW_BOTTOM"
          animate={isOpen && true}
        />
      </DropdownButton>
      {isOpen && !disabled && (
        <DropdownMenu>
          {options && options.length > 3 && (
            <Input
              type="search"
              small
              name="filter"
              autoFocus
              noBorder
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
            />
          )}
          {options &&
            options
              .filter((option) =>
                JSON.stringify(option)
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((option: string | IOption) => (
                <DropdownItem
                  title={typeof option === "string" ? option : option.value}
                  value={typeof option === "string" ? option : option.value}
                  key={typeof option === "string" ? option : option.value}
                  onClick={() => {
                    onChange &&
                      onChange(
                        typeof option === "string" ? option : option.value
                      );
                    setIsOpen(!isOpen);
                    setSearch("");
                  }}
                  type="button"
                >
                  {typeof option === "string"
                    ? option
                    : option.label || option.value}
                </DropdownItem>
              ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
