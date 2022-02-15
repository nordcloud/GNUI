import * as React from "react";
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
  SizeProps,
} from "./styles";
import { Option } from "./types";

type DropdownProps = SpaceProps &
  SizeProps & {
    name: string;
    options: Option[];
    onChange: (value: string) => void;
    width?: string;
    value?: string;
    isOpen?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    title?: string;
    minNumOfOptionsToShowSearchBox?: number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClear?: () => void;
  };

export function Dropdown({
  value = "",
  name,
  options,
  disabled = false,
  title,
  onChange,
  onClear,
  minNumOfOptionsToShowSearchBox = 4,
  size,
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
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
        disabled={disabled}
        title={title}
        type="button"
        size={size}
      >
        <Inner>{innerText}</Inner>
        {showClearButton && (
          <Clear
            onClick={() => onClear && onClear()}
            title={`Clear ${name} value`}
            role="button"
            size={size}
          >
            <SVGIcon size="sm" name="close" />
          </Clear>
        )}
        <DropdownIcon animate={isOpen}>
          <SVGIcon name="chevronDown" size={size && "sm"} />
        </DropdownIcon>
      </DropdownButton>
      {showMenu && (
        <DropdownMenu>
          {showSearch && (
            <>
              <Input
                type="search"
                name="filter"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                small
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
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
                const optionValue = getOptionValue(option);

                return (
                  <DropdownItem
                    title={optionValue}
                    value={optionValue}
                    key={optionValue}
                    onClick={() => {
                      // default empty string is used to satisfy typescript, we're lacking proper typing in props and getOptionValue
                      onChange(optionValue ?? "");
                      setIsOpen(!isOpen);
                      setSearch("");
                    }}
                    type="button"
                    size={size}
                  >
                    {getOptionValue(option, "label") || optionValue}
                  </DropdownItem>
                );
              })}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
}
