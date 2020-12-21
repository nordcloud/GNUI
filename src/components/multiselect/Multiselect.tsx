import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { default as ReactSelect, CommonProps } from "react-select";

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
          border: 1px solid ${theme.color.border.hover};
        }
        &:focus {
          border: 1px solid ${theme.color.border.focus};
          outline: none;
        }
      }
    }
    &__value-container {
      color: ${theme.color.text.primary};
    }
    &__multi-value {
      padding: 0 0.125rem 0 ${theme.spacing.spacing02};
      margin: ${theme.spacing.spacing01};
      border-radius: 1rem;
      align-items: center;
      height: 1.5rem;

      &__label {
        color: ${theme.color.text.invert};
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
        background-color: rgba(0, 0, 0, 0.3);
        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
        svg {
          color: ${theme.color.text.invert};
          width: 0.75rem;
          height: 0.75rem;
        }
      }
    }
    &__placeholder {
      color: ${theme.color.text.placeholder};
    }
    &__single-value {
      color: ${theme.color.text.primary};
      font-size: ${theme.fontSizes[2]};
      line-height: 1.5rem;
    }
    &__menu {
      box-shadow: ${theme.shadow.shadow04};
    }
    &__option {
      color: ${theme.color.text.primary};
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

export const Select: FunctionComponent<SelectProps & CommonProps<any>> = ({
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
            neutral10: "#161632",
          },
        })}
        {...props}
      ></ReactSelect>
    </SelectContainer>
  );
};
