import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Flex } from "../container";
import { SVGIcon } from "../svgicon";

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
  width: 0;
  height: 0;
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
      width: 1rem;
      height: 1rem;
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
>(({ id, labelText, withoutLabel, double, ...props }, ref) => (
  <SingleCheckWrapper withoutLabel={withoutLabel}>
    <CheckboxContainer>
      <CheckboxInput type="checkbox" id={id} ref={ref} {...props} />
      <Fill name={double ? "checkmarkDouble" : "checkmark"} />
    </CheckboxContainer>
    <CheckboxLabel withoutLabel={withoutLabel} htmlFor={id}>
      {labelText}
    </CheckboxLabel>
  </SingleCheckWrapper>
));
