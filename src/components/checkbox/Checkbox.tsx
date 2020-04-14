import React, { FunctionComponent} from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Container, Flex } from "../container";

export interface CheckboxProps {
  name: string;
  type?: string;
  labelText?: string;
  className?: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  valid?: boolean;
  checked?:boolean;
  children?: string | number | any;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface CheckboxGroupProps {
  name: string;
  children?: string | number | any;
}

const CheckboxWrapper = styled(Container)`
  position: relative;
`;
const SingleCheckWrapper = styled(Flex) `
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  margin-left: 0.5rem;
  font-weight: theme.typography.fontWeights[1];
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
  left:0;
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

export const Checkbox: FunctionComponent<CheckboxProps> = ({ 
  name,
  type="checkbox",
  labelText,
  ...props
  }) => (
  <SingleCheckWrapper>
    <CheckboxContainer>
      <CheckboxInput type={type} id={name} {...props}/>
      <Fill />
    </CheckboxContainer>
    <CheckboxLabel htmlFor={name}>{labelText}</CheckboxLabel>
  </SingleCheckWrapper>
);

export const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({ 
  name,
  children
}) => {
  return (
    <CheckboxWrapper name={name}>
      {children}
    </CheckboxWrapper>
  );
};
