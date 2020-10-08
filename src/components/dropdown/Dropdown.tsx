import React, { FunctionComponent, useState } from "react";
import { SpaceProps } from "styled-system";
import { useClickOutside } from "../../hooks";
import { SVGIcon } from "../svgicon/SVGIcon";
import { Input } from "../input";
import {
  Clear,
  DropdownButton,
  DropdownIcon,
  DropdownItem,
  DropdownMenu,
  DropdownWrapper,
  Inner,
} from "./styles";
import { getOptionValue } from "./helpers";
import { Option } from "./types";

interface DropdownProps {
  name: string;
  options: Option[];
  onChange: (e: any) => void;
  width?: string;
  value?: string;
  isOpen?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  title?: string;
  onClick?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  onClear?: () => void;
}

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
  const wrapper = React.useRef<HTMLDivElement>(null);

  useClickOutside(wrapper, isOpen, () => {
    setIsOpen(false);
  });

  const displayValue: Option | undefined = options.find((option) => {
    if (typeof option === "string") {
      return option === value;
    }
    return option.value === value;
  });

  const innerText =
    getOptionValue(displayValue, "label") ||
    getOptionValue(displayValue, "value") ||
    name;
  const showClearButton = onClear && displayValue;
  const showMenu = isOpen && !disabled;
  const showSearch = options && options.length > 3;

  return (
    <DropdownWrapper value={value} ref={wrapper} {...props}>
      <DropdownButton
        name={name}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled && disabled}
        title={title}
        type="button"
      >
        <Inner>{innerText}</Inner>
        {showClearButton && (
          <Clear
            onClick={() => onClear && onClear()}
            title={`Clear ${name} value`}
            role="button"
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
      {showMenu && (
        <DropdownMenu>
          {showSearch && (
            <Input
              type="search"
              name="filter"
              autoFocus
              noBorder
              small
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
              .map((option: Option) => {
                const value = getOptionValue(option);

                return (
                  <DropdownItem
                    title={value}
                    value={value}
                    key={value}
                    onClick={() => {
                      onChange && onChange(value);
                      setIsOpen(!isOpen);
                      setSearch("");
                    }}
                    type="button"
                  >
                    {getOptionValue(option, "label") || value}
                  </DropdownItem>
                );
              })}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
