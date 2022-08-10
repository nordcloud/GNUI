import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { FlexContainer } from "../container";
import { SVGIcon } from "../svgicon";

type CheckboxLabelProps = {
  withoutLabel?: boolean;
};

const CheckboxLabel = styled.label<CheckboxLabelProps>`
  cursor: pointer;
  margin-left: ${theme.spacing.spacing02};
  font-weight: ${theme.fontWeights.medium};

  ${({ withoutLabel }) =>
    withoutLabel &&
    css`
      position: absolute;
      top: -0.2rem;
      left: -0.2rem;
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 0;
    `}
`;

const CheckboxContainer = styled.div`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  position: relative;

  &::before {
    content: "";
    border-radius: 2px;
    border: 1px solid ${theme.color.border.input};
    background-color: ${theme.color.field.default};
    transition: all 0.2s linear;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

const Fill = styled(SVGIcon)`
  border-radius: 2px;
  fill: ${theme.color.background.ui05};
  transition: all 0.2s linear;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
`;

const CheckboxInput = styled.input`
  opacity: 0;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:checked {
    & ~ ${Fill} {
      border-radius: 2px;
      fill: ${theme.color.background.ui01};
      transition: all 0.2s linear;
      background-color: ${theme.color.background.ui05};
    }
  }

  &:disabled {
    & ~ ${Fill} {
      border-radius: 2px;
      fill: ${theme.color.text.text03};
      transition: all 0.2s linear;
    }
  }

  &:checked:disabled {
    & ~ ${Fill} {
      border-radius: 2px;
      fill: ${theme.color.text.text03};
      transition: all 0.2s linear;
      background-color: ${theme.color.background.ui04};
    }
  }
`;

export type CheckmarkCheckboxProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: string;
    withoutLabel?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    double?: boolean;
  };

export const CheckmarkCheckbox = React.forwardRef<
  HTMLInputElement,
  CheckmarkCheckboxProps
>(({ id, labelText, withoutLabel, double, ...props }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
  };

  return (
    <FlexContainer>
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id={id}
          ref={ref}
          {...props}
          onChange={handleChange}
        />
        <Fill name={double ? "checkmarkDouble" : "checkmark"} />
      </CheckboxContainer>
      <CheckboxLabel withoutLabel={withoutLabel} htmlFor={id}>
        {labelText}
      </CheckboxLabel>
    </FlexContainer>
  );
});
