import React, { FunctionComponent, useState } from "react";
import { SpaceProps } from "styled-system";
import { useClickOutside } from "../../hooks";
import theme from "../../theme";
import { Input } from "../input";
import { Spacer } from "../spacer";
import { SVGIcon } from "../svgicon/SVGIcon";
import { getOptionValue } from "./helpers";
import {
  Clear,
  DropdownButton,
  DropdownIcon,
  DropdownItem,
  DropdownMenu,
  DropdownWrapper,
  Inner,
} from "./styles";
import { Option } from "./types";

type DropdownProps = {
  name: string;
  options: Option[];
  onChange: (e: any) => void;
  width?: string;
  value?: string;
  isOpen?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  title?: string;
  minNumOfOptionsToShowSearchBox?: number;
  onClick?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  onClear?: () => void;
};

export const Dropdown: FunctionComponent<DropdownProps & SpaceProps> = ({
  value = "",
  name,
  options,
  disabled = false,
  title,
  onChange,
  onClear,
  minNumOfOptionsToShowSearchBox = 4,
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
  const showSearch =
    options && options.length >= minNumOfOptionsToShowSearchBox;

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
        <DropdownIcon animate={isOpen}>
          <SVGIcon name="chevronDown" />
        </DropdownIcon>
      </DropdownButton>
      {showMenu && (
        <DropdownMenu>
          {showSearch && (
            <>
              <Input
                type="search"
                name="filter"
                autoFocus
                small
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
              />
              <Spacer height={theme.spacing.spacing02} />
            </>
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
