import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { FlexContainer } from "../container";
import {
  ExtendedTooltip,
  ExtendedTooltipProps,
} from "../extendedTooltip/ExtendedTooltip";
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
    background: ${theme.color.field.default};
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
  fill: ${theme.color.background.ui05};
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
`;

const CheckboxInput = styled.input`
  opacity: 0;
  z-index: 2;
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
      background: ${theme.color.background.ui05};
    }
  }

  &:disabled {
    & ~ ${Fill} {
      border-radius: 2px;
      fill: ${theme.color.text.text03};
    }
  }

  &:checked:disabled {
    & ~ ${Fill} {
      border-radius: 2px;
      fill: ${theme.color.text.text03};
      background: ${theme.color.background.ui04};
    }
  }
`;

export type CheckmarkCheckboxProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: string;
    withoutLabel?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    double?: boolean;
    tooltipProps?: ExtendedTooltipProps;
  };

export const CheckmarkCheckbox = React.forwardRef<
  HTMLInputElement,
  CheckmarkCheckboxProps
>(({ id, labelText, withoutLabel, double, tooltipProps, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(props.checked ?? false);

  const captionSelect = double ? "Select All" : "Select This";
  const captionDeselect = double ? "Deselect All" : "Deselect This";
  const caption = isChecked ? captionDeselect : captionSelect;

  const tooltipProperties = tooltipProps
    ? {
        ...tooltipProps,
        caption: tooltipProps?.caption ?? caption,
      }
    : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prevState) => !prevState);
    props.onChange?.(e);
  };

  const checkboxInput = (
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
  );

  const checkbox = tooltipProperties ? (
    <ExtendedTooltip {...tooltipProperties}>{checkboxInput}</ExtendedTooltip>
  ) : (
    checkboxInput
  );

  return (
    <FlexContainer>
      {checkbox}
      <CheckboxLabel withoutLabel={withoutLabel} htmlFor={id}>
        {labelText}
      </CheckboxLabel>
    </FlexContainer>
  );
});
