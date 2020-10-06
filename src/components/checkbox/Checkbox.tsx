import React, { FunctionComponent, InputHTMLAttributes, Ref } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { GnuiContainer, Flex } from "../container";
import { space, SpaceProps } from "styled-system";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  ref?: Ref<HTMLInputElement>;
}

export type CheckboxGroupProps = Pick<CheckboxProps, "name" | "children">;

const SingleCheckWrapper = styled(Flex)`
  margin-bottom: ${theme.spacing.spacing04};
  ${space}

  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  margin-left: ${theme.spacing.spacing02};
  font-weight: ${theme.typography.fontWeights[1]};
`;

const CheckboxContainer = styled.div`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
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
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
      width: 0.75rem;
      height: 0.75rem;
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
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
> = React.forwardRef(({ id, labelText, ...props }, ref) => (
  <SingleCheckWrapper>
    <CheckboxContainer>
      <CheckboxInput type="checkbox" id={id} ref={ref} {...props} />
      <Fill />
    </CheckboxContainer>
    <CheckboxLabel htmlFor={id}>{labelText}</CheckboxLabel>
  </SingleCheckWrapper>
));

export const CheckboxGroup: FunctionComponent<
  CheckboxGroupProps & SpaceProps
> = ({ name, children }) => {
  return <CheckboxWrapper name={name}>{children}</CheckboxWrapper>;
};
