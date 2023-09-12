import * as React from "react";
import { SpaceProps } from "styled-system";
import { useClickOutside, useDisclosure } from "../../hooks";
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

type DropdownProps = SizeProps &
  SpaceProps & {
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
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
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
  const { isOpen, close, toggle } = useDisclosure();
  const [search, setSearch] = React.useState("");
  const wrapper = React.useRef<HTMLDivElement>(null);

  useClickOutside({ ref: wrapper, active: isOpen, onClickAway: close });

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
    <DropdownWrapper ref={wrapper} value={value} {...props}>
      <DropdownButton
        name={name}
        disabled={disabled}
        title={title}
        type="button"
        size={size}
        onClick={() => !disabled && toggle()}
      >
        <Inner>{innerText}</Inner>
        {showClearButton && (
          <Clear
            title={`Clear ${name} value`}
            role="button"
            size={size}
            onClick={() => onClear?.()}
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
                value={search}
                name="filter"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(event.target.value)
                }
                small
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
              />
              <Spacer height={theme.spacing.spacing02} />
            </>
          )}
          {options
            ?.filter((option) =>
              JSON.stringify(option)
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((option: Option) => {
              const optionValue = getOptionValue(option);

              return (
                <DropdownItem
                  key={optionValue}
                  title={optionValue}
                  value={optionValue}
                  type="button"
                  size={size}
                  onClick={() => {
                    // default empty string is used to satisfy typescript, we're lacking proper typing in props and getOptionValue
                    onChange(optionValue ?? "");
                    toggle();
                    setSearch("");
                  }}
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
