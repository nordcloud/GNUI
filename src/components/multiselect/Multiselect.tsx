import React, { FunctionComponent } from "react";
import { color } from "styled-system";
import styled, { css } from "styled-components";
import theme from "../../theme";
import Select from 'react-select';

export interface SelectProps {
  options?:any;
}

const SelectContainer = styled.div<SelectProps>`
  .react-select {
    &-container {
      & > div {
        background: ${theme.colors.white};
        border: ${theme.borders.disabled};
        box-shadow:none;
        &:hover {
          border: ${theme.borders.darkenGrey};
        }
        &:focus {
          border: 1px solid ${theme.colors.darks[4]};
          box-shadow: none;
        }
      }
    }
    &__value-container {
      color: ${theme.colors.primary};
    }
    &__multi-value {
      background: ${theme.colors.lights[3]};
      &__label {
        color: ${theme.colors.primary};
        padding-left:${theme.spacing.spacing02};
        padding-right:${theme.colors.spacing02};
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
      box-shadow: ${theme.colors.shadow04};
      &-list {
        
      }
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

export const StyledSelect: FunctionComponent<SelectProps> = ({
  options,
  ...props
}) => {
  return (
    <SelectContainer>
      <Select 
        className="react-select-container"
        classNamePrefix="react-select"
        options={options} 
        {...props}>
        </Select>
    </SelectContainer>
  );
};

