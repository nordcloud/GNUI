import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Flex } from "../container";
import { SVGIcon } from "../svgicon";
import { Tooltip } from "../tooltip/Tooltip";

const SingleCheckWrapper = styled(Flex)`
  margin-bottom: ${theme.spacing.spacing04};
  position: ${({ withoutLabel }) => (withoutLabel ? "relative" : "static")};

  &:last-child {
    margin-bottom: 0;
  }
`;

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

export type CheckboxCheckmarkProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: string;
    withoutLabel?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    double?: boolean;
  };

export const CheckboxCheckmark = React.forwardRef<
  HTMLInputElement,
  CheckboxCheckmarkProps
>(({ id, labelText, withoutLabel, double, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(props.checked ?? false)

  const captionSelect = double ? "Select All" : "Select This";
  const captionDeselect = double ? "Deselect All" : "Deselect This";
  const caption = isChecked ? captionDeselect : captionSelect;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prevState) => !prevState);
    props.onChange?.(e);
  };

  const checkboxInput = (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" id={id} ref={ref} {...props} onChange={handleChange} />
      <Fill name={double ? "checkmarkDouble" : "checkmark"} />
    </CheckboxContainer>
  );

  const checkbox = props.disabled
    ? checkboxInput
    : (
      <Tooltip caption={caption} minWidth="5rem">
        {checkboxInput}
      </Tooltip>
    );

  return (
    <SingleCheckWrapper withoutLabel={withoutLabel}>
      {checkbox}
      <CheckboxLabel withoutLabel={withoutLabel} htmlFor={id}>
        {labelText}
      </CheckboxLabel>
    </SingleCheckWrapper>
  )
});
