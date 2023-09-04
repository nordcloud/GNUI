import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { GnuiContainer, Flex } from "../container";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  withoutLabel?: boolean;
  isIndeterminate?: boolean;
  ref?: React.Ref<HTMLInputElement>;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, labelText, withoutLabel, isIndeterminate, ...props }, ref) => (
    <SingleCheckWrapper withoutLabel={withoutLabel}>
      <CheckboxContainer>
        <CheckboxInput ref={ref} type="checkbox" id={id} {...props} />
        <Fill />
        {isIndeterminate && <FillInter />}
      </CheckboxContainer>
      <CheckboxLabel withoutLabel={withoutLabel} htmlFor={id}>
        {labelText}
      </CheckboxLabel>
    </SingleCheckWrapper>
  )
);

export type CheckboxGroupProps = Pick<CheckboxProps, "children" | "name">;

export function CheckboxGroup({ name, children }: CheckboxGroupProps) {
  return <CheckboxWrapper name={name}>{children}</CheckboxWrapper>;
}

const SingleCheckWrapper = styled(Flex)<{
  withoutLabel?: boolean;
}>`
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

const Fill = styled.div`
  background: ${theme.color.background.ui05};
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: "";
    opacity: 0;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const FillInter = styled(Fill)``;

const CheckboxWrapper = styled(GnuiContainer)<{ name?: string }>`
  position: relative;

  ${SingleCheckWrapper} {
    margin-bottom: 1rem;
  }
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
      width: 0.65rem;
      height: 0.65rem;
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }

  & ~ ${FillInter} {
    width: 0.65rem;
    height: 0.25rem;
    transition: width 0.2s ease-out, height 0.2s ease-out;

    &::before {
      opacity: 1;
      transition: opacity 1s ease;
    }
  }
`;
