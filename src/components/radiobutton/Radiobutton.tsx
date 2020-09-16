import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { GnuiContainer, Flex } from "../container";

export interface RadioProps {
  name: string;
  type: string;
  labelText: string;
  className?: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  valid?: boolean;
  children?: string | number | any;
  onClick?: (e: any) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps {
  name: string;
  children?: string | number | any;
}

const RadioWrapper = styled(GnuiContainer)`
  position: relative;
`;

const RadioFlexWrapper = styled(Flex)`
  margin-bottom: ${theme.spacing.spacing04};
  label {
    cursor: pointer;
    margin-left: ${theme.spacing.spacing02};
    font-weight: ${theme.typography.fontWeights[0]};
  }
`;

const Fill = styled.div`
  background: ${theme.colors.primary};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: ${theme.zindex.masked};

  &::before {
    content: "";
    opacity: 0;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
`;

const RadioInput = styled.input`
  opacity: 0;
  z-index: ${theme.zindex.sticky};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

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

const RadioContainer = styled.div`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  &::before {
    content: "";
    border-radius: 100%;
    border: 1px solid ${theme.colors.lights[3]};
    background: ${theme.colors.lights[0]};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: ${theme.zindex.zero};
  }
`;

export const Radio: FunctionComponent<RadioProps> = ({
  name,
  type = "radio",
  labelText,
  ...props
}) => (
  <RadioFlexWrapper>
    <RadioContainer>
      <RadioInput type={type} id={name} {...props} />
      <Fill />
    </RadioContainer>
    <label htmlFor={name}>{labelText}</label>
  </RadioFlexWrapper>
);

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  name,
  children,
}) => {
  const [isChecked, setIsChecked] = useState(children[0].props.value);

  return (
    <RadioWrapper role="radiogroup" name={name}>
      {React.Children.map(children, (element) =>
        React.cloneElement(element, {
          ...element.props,
          checked: isChecked === element.props.value,
          onChange: () => setIsChecked(element.props.value),
        })
      )}
    </RadioWrapper>
  );
};
