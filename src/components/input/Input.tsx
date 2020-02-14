import React from "react";
import styled from "styled-components";
import theme from "../../theme";

interface InputProps {
  className: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  value?: string;
}

const StyledInput = styled.input<InputProps>`
  border: 0.075rem solid ${theme.colors.gray};
  padding: 0.7rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  color: ${props =>
    props.disabled ? theme.colors.darkGray : theme.colors.primary};
  background-color: ${props =>
    props.disabled ? theme.colors.gray : theme.colors.light};
  transition: ${theme.transition};

  &:focus {
    outline: 0;
    border: 0.075rem solid ${theme.colors.dark};
  }
`;

export const Input: React.FC<InputProps> = props => (
  <StyledInput
    type={props.type ? props.type : "text"}
    placeholder={props.placeholder ? props.placeholder : "Input"}
    disabled={props.disabled}
    value={props.disabled ? "Disabled" : props.value}
    {...props}
  />
);
