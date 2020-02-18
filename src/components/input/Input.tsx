import React from "react";
import styled from "styled-components";
import theme from "../../theme";

interface InputProps {
  className: string;
  type: string;
  name: string;
  note?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange(e: any): void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-flow: column;
  font-family: ${theme.fontFamily.regular};
  font-weight: ${theme.fontWeights.regular};
  line-height: 1.5rem;
  font-size: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary};
`;

const StyledInput = styled.input<InputProps>`
  border: 0.0625rem solid ${theme.colors.light400};
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.light100};
  transition: ${theme.transition};
  &::placeholder {
    color: ${theme.colors.dark100};
  }
  &:hover {
    border: 0.0625rem solid ${theme.colors.light500};
  }
  &:focus {
    outline: 0;
    border: 0.0625rem solid ${theme.colors.dark100};
  }
  &:disabled {
    color: ${theme.colors.light500};
    background-color: ${theme.colors.light};
    border: 0.0625rem solid ${theme.colors.light400};
    cursor: not-allowed;
  }
`;

const Note = styled.p`
  color: ${theme.colors.dark200};
  margin-top: 0.25rem;
  font-size: 0.75rem;
`;

export const Input: React.FC<InputProps> = props => (
  <Wrapper>
    <Label htmlFor={props.name}>{props.name}</Label>
    <StyledInput type={props.type || "text"} id={props.name} {...props} />
    <Note>{props.note}</Note>
  </Wrapper>
);
