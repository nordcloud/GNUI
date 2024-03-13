import * as React from "react";
import { rgba, getContrast } from "polished";
import ReactSelect, {
  type SelectInstance,
  type GroupBase,
  type StylesConfig,
  type Props as ReactSelectProps,
} from "react-select";
import styled, { css } from "styled-components";
import theme from "../../theme";

const SelectContainer = styled.div<{ isError?: boolean }>`
  .react-select {
    &-container {
      & > .react-select__control {
        background: ${theme.color.field.default};
        border: 1px solid ${theme.color.border.input};
        ${({ isError }) =>
          isError &&
          css`
            border: 1px solid ${theme.color.border.error};
          `}
        &:hover {
          border: 1px solid ${theme.color.border.border02};
        }
        &:focus {
          border: 1px solid ${theme.color.border.focus};
          outline: none;
        }
        &--is-disabled {
          background: ${theme.color.interactive.disabled};
        }
      }
    }
    &__value-container {
      color: ${theme.color.text.text01};
    }
    &__multi-value {
      padding: 0 0.125rem 0 ${theme.spacing.spacing02};
      margin: ${theme.spacing.spacing01};
      border-radius: 1rem;
      align-items: center;
      height: 1.5rem;

      &__label {
        padding-left: 0;
        padding-right: 0.375rem;
        font-size: ${theme.fontSizes.sm};
      }

      &__remove {
        width: 1.125rem;
        height: 1.125rem;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        svg {
          color: ${theme.color.text.text04};
          width: 0.75rem;
          height: 0.75rem;
        }
      }
    }
    &__placeholder {
      color: ${theme.color.text.text02};
    }
    &__single-value {
      color: ${theme.color.text.text01};
      font-size: ${theme.fontSizes.md};
      line-height: 1.5rem;
    }
    &__menu {
      box-shadow: ${theme.shadow.shadow04};
      margin-top: ${theme.spacing.spacing01};
      z-index: ${theme.zindex.dropdown};
      border-radius: ${theme.radiusDefault};
      background: ${theme.color.background.ui01};
      border: 1px solid ${theme.color.border.input};

      &-list {
        padding: ${theme.spacing.spacing02};
      }
    }
    &__option {
      margin-top: ${theme.spacing.spacing01};
      border-radius: ${theme.radius.md};
      &:active {
        background: ${theme.color.interactive.secondaryActive};
        color: ${theme.color.text.text01};
      }
      &--is-focused {
        cursor: pointer;
        background: ${theme.color.interactive.secondary};
        color: ${theme.color.text.text01};
      }
      &--is-selected {
        cursor: not-allowed;
        background: ${theme.color.interactive.secondaryActive};
        color: ${theme.color.text.text01};
        font-weight: 500;
        &:active {
          background: ${theme.color.interactive.secondaryActive};
          color: ${theme.color.text.text01};
        }
      }
    }
  }
`;

export type SelectOption = {
  value: string;
  label: string;
  isFixed?: boolean;
  isDisabled?: boolean;
};

export type SelectColoredOption = SelectOption & {
  color: string;
  isError?: boolean;
};

function getDefaultStyles<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(): StylesConfig<Option, IsMulti, Group> {
  return {
    input: (styles) => {
      return {
        ...styles,
        color: theme.color.text.text01,
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: theme.color.interactive.primary,
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        backgroundColor: theme.color.interactive.primaryActive,
        ":hover": {
          backgroundColor: theme.color.interactive.primaryActive,
        },
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        color: theme.color.text.text04,
      };
    },
  };
}

function getOptionBgColor(
  isDisabled: boolean,
  isSelected: boolean,
  isFocused: boolean
) {
  return (color: string) => {
    if (isDisabled) {
      return undefined;
    }

    if (isSelected) {
      return color;
    }

    if (isFocused) {
      return rgba(color, 0.1);
    }

    return undefined;
  };
}

/* taken from https://github.com/JedWatson/react-select/blob/master/docs/examples/StyledMulti.tsx */
export const customMultiColorStyles: StylesConfig<SelectColoredOption, true> = {
  ...getDefaultStyles(),
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const baseColor = data.color ?? theme.color.text.text01;

    const contrastingColor =
      getContrast(baseColor, "white") > 2 ? "white" : "black";
    const color = isSelected ? contrastingColor : baseColor;

    const activeSelectedBgColor =
      data.color ?? theme.color.interactive.secondary;
    const activeBgColor = isSelected
      ? activeSelectedBgColor
      : rgba(baseColor, 0.3);

    return {
      ...styles,
      backgroundColor: getOptionBgColor(
        isDisabled,
        isSelected,
        isFocused
      )(color),
      color: isDisabled ? theme.color.interactive.disabled : color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: isDisabled ? undefined : activeBgColor,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = data.color ?? theme.color.interactive.primary;
    return {
      ...styles,
      backgroundColor: color,
    };
  },
  multiValueRemove: (styles, { data }) => {
    const color = data.color ?? theme.color.interactive.primaryActive;

    return {
      ...styles,
      color,
      ":hover": {
        backgroundColor: color,
        color: "white",
      },
    };
  },
};

// Removing `React.` breaks the Typecheck
/* eslint-disable @typescript-eslint/no-unnecessary-qualifier */
// Redeclare forwardRef to handle generics
declare module "react" {
  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

function SelectInner<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  {
    styles = getDefaultStyles(),
    ...props
  }: ReactSelectProps<Option, IsMulti, Group> & {
    isError?: boolean;
  },
  ref: React.ForwardedRef<SelectInstance<Option, IsMulti, Group>>
) {
  return (
    <SelectContainer isError={props.isError}>
      <ReactSelect
        ref={ref}
        className="react-select-container"
        classNamePrefix="react-select"
        styles={styles}
        theme={(reactSelectTheme) => ({
          ...reactSelectTheme,
          colors: {
            ...reactSelectTheme.colors,
          },
        })}
        {...props}
      />
    </SelectContainer>
  );
}

export const Select = React.forwardRef(SelectInner);
export type { SelectInstance } from "react-select";
