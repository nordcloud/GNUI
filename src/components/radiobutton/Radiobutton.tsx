import React, { FunctionComponent, useState } from 'react';
import styled from "styled-components";
import theme from "../../theme";
import { Container, Flex } from '../container';

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
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps {
  name: string;
  children?: string | number | any;
}

const RadioWrapper = styled(Container)`
  position: relative;
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
  z-index: 1;

  &::before {
    content: "";
    opacity: 0;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${theme.colors.lights[3]};
    border-radius: 100%;
  }
`;

const RadioInput = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
      outline: none;
  }

  &:checked {
    & ~ ${Fill} {
    width: 14px;
    height: 14px;
    transition: width 0.2s ease-out, height 0.2s ease-out;

    &::before {
        opacity: 1;
        transition: opacity 1s ease;
    }
    }
  }
`;

const RadioContainer = styled.div`
  margin: 5px;
  cursor: pointer;
  width: 24px;
  height: 24px;
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
    z-index: 0;
  }
`;

const radioStyle = {
  radioLabel: {
    cursor: 'pointer',
    marginLeft: 4,
    fontWeight: theme.typography.fontWeights[1]
  }
}

export const Radio: FunctionComponent<RadioProps> = ({ 
  name,
  type="radio",
  labelText,
  ...props
  }) => (
  <Flex>
    <RadioContainer>
      <RadioInput type={type} id={name} {...props}/>
      <Fill />
    </RadioContainer>
    <label htmlFor={name} style={radioStyle.radioLabel}>{labelText}</label>
  </Flex>
);

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({ 
  name,
  children
}) => {
  const [isChecked, setIsChecked] = useState(0);

  return (
    <RadioWrapper role="radiogroup" name={name}>
      {React.Children.map(children, (element, index) =>
        React.cloneElement(element, {
          ...element.props,
          checked: isChecked === index,
          onChange: () => setIsChecked(index)
        })
      )}
    </RadioWrapper>
  );
};