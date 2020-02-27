import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container, Flex } from "../container";
import { Icon } from "../icon";

export interface InputProps {
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  valid?: boolean;
  children?: string | number | any;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Label: FunctionComponent<{ name: string }> = ({
  name = "Label"
}) => (
  <Flex margin="0.5rem 0">
    <label htmlFor={name}>{name}</label>
  </Flex>
);

const InputGroup = styled(Flex)<InputProps>`
  align-items: center;
  border: 0.0625rem solid ${theme.colors.lights[3]};
  padding: 0.5rem 0.75rem;
  border-radius: ${theme.borderRadius};
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  transition: ${theme.transition};
  &:hover {
    border: 0.0625rem solid ${theme.colors.lights[4]};
  }
  &:focus {
    outline: 0;
    border: 0.0625rem solid ${theme.colors.black};
  }
  &:disabled {
    color: ${theme.colors.lights[4]};
    background: ${theme.colors.white};
    border: 0.0625rem solid ${theme.colors.lights[3]};
    cursor: not-allowed;
  }

  ${({ valid }) =>
    valid === false &&
    css`
      border: 0.0625rem solid ${theme.colors.danger};
      &:hover {
        border: 0.0625rem solid ${theme.colors.danger};
      }
    `}
`;

const StyledInput = styled.input`
  border: 0;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  font-size: ${theme.fontSizes.regular};
  transition: ${theme.transition};
  &:placeholder {
    color: ${theme.colors.darks[4]};
  }
  &:hover,
  &:focus {
    outline: 0;
    border: 0;
  }
  &:disabled {
    color: ${theme.colors.lights[4]};
    background-color: ${theme.colors.white};
    border: 0;
    cursor: not-allowed;
  }

  ${({ type }) =>
    type === "search" &&
    css`
      margin-left: 0.5rem;
    `}
`;

export const Description: FunctionComponent = ({ children }) => {
  const StyledDescription = styled(Container)`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.darks[3]};
    margin: 0.25rem 0;
    width: 100%;
  `;
  return <StyledDescription>{children}</StyledDescription>;
};

export const Input: FunctionComponent<InputProps> = ({
  type = "text",
  name,
  ...props
}) => (
  <InputGroup {...props}>
    {type === "search" && (
      <Icon image="SEARCH" width="1.2rem" height="1.2rem" />
    )}
    <StyledInput type={type} id={name} {...props} />
  </InputGroup>
);
