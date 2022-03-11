import * as React from "react";
import { rgba, getContrast } from "polished";
import ReactSelect from "react-select";
import type {
  SelectInstance,
  GroupBase,
  StylesConfig,
  Props as ReactSelectProps,
} from "react-select";
import styled from "styled-components";
import theme from "../../theme";

const SelectContainer = styled.div`
  .react-select {
    &-container {
      & > div {
        background: ${theme.color.field.default};
        border: 1px solid ${theme.color.border.input};
        &:hover {
          border: 1px solid ${theme.color.border.border02};
        }
        &:focus {
          border: 1px solid ${theme.color.border.focus};
          outline: none;
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
      color: ${theme.color.text.text03};
    }
    &__single-value {
      color: ${theme.color.text.text01};
      font-size: ${theme.fontSizes.md};
      line-height: 1.5rem;
    }
    &__menu {
      box-shadow: ${theme.shadow.shadow04};
    }
    &__option {
      &--is-selected {
        &.react-select__option--is-focused {
          background-color: ${theme.color.interactive.secondary};
        }
      }
      &--is-focused {
        background-color: ${theme.color.interactive.secondary};
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
};

function getDefaultStyles<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(): StylesConfig<Option, IsMulti, Group> {
  return {
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

/* taken from https://github.com/JedWatson/react-select/blob/master/docs/examples/StyledMulti.tsx */
/* eslint-disable no-nested-ternary */
export const customMultiColorStyles: StylesConfig<SelectColoredOption, true> = {
  ...getDefaultStyles(),
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color ?? theme.color.text.text01;
    const selectedColor = data.color ?? theme.color.interactive.secondary;

    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? color
        : isFocused
        ? rgba(color, 0.1)
        : undefined,
      color: isDisabled
        ? theme.color.interactive.disabled
        : isSelected
        ? getContrast(color, "white") > 2
          ? "white"
          : "black"
        : color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? selectedColor
            : rgba(color, 0.3)
          : undefined,
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
      color: color,
      ":hover": {
        backgroundColor: color,
        color: "white",
      },
    };
  },
};

// Redeclare forwardRef to handle generics
declare module "react" {
  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

function SelectInner<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    styles = getDefaultStyles(),
    ...props
  }: ReactSelectProps<Option, IsMulti, Group>,
  ref: React.ForwardedRef<SelectInstance<Option, IsMulti, Group>>
) {
  return (
    <SelectContainer>
      <ReactSelect
        ref={ref}
        className="react-select-container"
        classNamePrefix="react-select"
        theme={(reactSelectTheme) => ({
          ...reactSelectTheme,
          colors: {
            ...reactSelectTheme.colors,
          },
        })}
        styles={styles}
        {...props}
      />
    </SelectContainer>
  );
}

export const Select = React.forwardRef(SelectInner);
export type { SelectInstance } from "react-select";
