import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
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
        background: ${theme.colors.white};
        border: ${theme.borders.disabled};
        &:hover {
          border: ${theme.borders.lightenGrey};
        }
        &:focus {
          border: 1px solid ${theme.colors.darks[4]};
        }
      }
    }
    &__value-container {
      color: ${theme.colors.primary};
    }
    &__multi-value {
      padding: 0 0.125rem 0 ${theme.spacing.spacing02};
      margin: ${theme.spacing.spacing01};
      border-radius: 1rem;
      color: ${theme.colors.lights[0]};
      align-items: center;
      height: 1.5rem;

      &__label {
        color: ${theme.colors.white};
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
        background-color: rgba(255, 255, 255, 0.3);
        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        svg {
          color: ${theme.colors.white};
          width: 0.75rem;
          height: 0.75rem;
        }
      }
    }
    &__placeholder {
      color: ${theme.colors.darks[4]};
    }
    &__single-value {
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes[2]};
      line-height: 1.5rem;
    }
    &__menu {
      box-shadow: ${theme.shadow.shadow04};
    }
    &__option {
      color: ${theme.colors.primary};
      &--is-selected {
        background-color: ${theme.colors.lights[2]};
        &.react-select__option--is-focused {
          background-color: ${theme.colors.lights[2]};
        }
      }
      &--is-focused {
        background-color: ${theme.colors.lights[1]};
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
