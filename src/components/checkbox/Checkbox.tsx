import React, { FunctionComponent, InputHTMLAttributes, Ref } from "react";
import styled, { css } from "styled-components/macro";
import theme from "../../theme";
import { GnuiContainer, Flex } from "../container";
import { space, SpaceProps } from "styled-system";

export type CheckboxProps = {
  labelText?: string;
  withoutLabel?: boolean;
  isIndeterminate?: boolean;
  ref?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export type CheckboxGroupProps = Pick<CheckboxProps, "name" | "children">;

type CheckboxLabelProps = {
  withoutLabel?: boolean;
};

const SingleCheckWrapper = styled(Flex)`
  margin-bottom: ${theme.spacing.spacing04};
  position: ${({ withoutLabel }) => (withoutLabel ? "relative" : "static")};

  ${space}
  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckboxLabel = styled.label<CheckboxLabelProps>`
  cursor: pointer;
  margin-left: ${theme.spacing.spacing02};
  font-weight: ${theme.typography.fontWeights[1]};
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
    border: 1px solid ${theme.colors.lights[3]};
    background: ${theme.colors.lights[0]};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

const Fill = styled.div`
  background: ${theme.colors.primary};
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

const CheckboxWrapper = styled(GnuiContainer)`
  position: relative;
  ${space}
  ${SingleCheckWrapper} {
    margin-bottom: 1rem;
  }
`;

export const Checkbox: FunctionComponent<
  CheckboxProps & SpaceProps
> = React.forwardRef(
  ({ id, labelText, withoutLabel, isIndeterminate, ...props }, ref) => (
    <SingleCheckWrapper withoutLabel={withoutLabel}>
      <CheckboxContainer>
        <CheckboxInput type="checkbox" id={id} ref={ref} {...props} />
        <Fill />
        {isIndeterminate && <FillInter />}
      </CheckboxContainer>
      <CheckboxLabel withoutLabel={withoutLabel} htmlFor={id}>
        {labelText}
      </CheckboxLabel>
    </SingleCheckWrapper>
  )
);

export const CheckboxGroup: FunctionComponent<
  CheckboxGroupProps & SpaceProps
> = ({ name, children }) => {
  return <CheckboxWrapper name={name}>{children}</CheckboxWrapper>;
};
