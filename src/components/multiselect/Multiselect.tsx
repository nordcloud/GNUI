import React, { FunctionComponent } from "react";
import { default as ReactSelect, Props } from "react-select";
import styled from "styled-components";
import theme from "../../theme";

export type SelectProps = {
  options?: any;
  styles?: any;
};

const SelectContainer = styled.div<SelectProps>`
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
      background-color: ${theme.color.interactive.primary};

      &__label {
        color: ${theme.color.text.text04};
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
        background-color: ${theme.color.interactive.primaryActive};
        &:hover {
          background-color: ${theme.color.interactive.primaryActive};
        }
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
      color: ${theme.color.text.text01};
      &--is-selected {
        background-color: ${theme.color.interactive.secondary};
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

export const Select: FunctionComponent<SelectProps & Props<{}>> = ({
  options,
  styles,
  ...props
}) => {
  return (
    <SelectContainer>
      <ReactSelect
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
        styles={styles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
          },
        })}
        {...props}
      ></ReactSelect>
    </SelectContainer>
  );
};
