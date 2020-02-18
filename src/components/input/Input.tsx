import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
  className: string;
  name: string;
  type?: string;
  note?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange(e: any): void;
}

const Wrapper = styled.div`
  width: auto;
  max-width: 100%;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary};
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border: 0.0625rem solid ${theme.colors.light400};
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.light100};
  transition: ${theme.transition};
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

const StyledInput = styled.input`
  border: 0;
  font-size: 1rem;
  width: 100%;
  background-color: ${theme.colors.light100};
  margin-left: ${props => props.type === "search" && "0.5rem"};
  transition: ${theme.transition};
  &::placeholder {
    color: ${theme.colors.dark100};
  }
  &:hover,
  &:focus {
    outline: 0;
    border: 0;
  }
  &:disabled {
    color: ${theme.colors.light500};
    background-color: ${theme.colors.light};
    border: 0;
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
    <InputGroup>
      {props.type === "search" && <FontAwesomeIcon icon={faSearch} />}
      <StyledInput type={props.type || "text"} id={props.name} {...props} />
    </InputGroup>
    <Note>{props.note}</Note>
  </Wrapper>
);
