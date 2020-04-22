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
  name = "Label",
}) => (
  <Flex margin="0.5rem 0">
    <label htmlFor={name}>{name}</label>
  </Flex>
);

const InputGroup = styled(Flex)`
  align-items: center;
  border: 1px solid ${theme.colors.lights[3]};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  border-radius: ${theme.radiusDefault};
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  transition: ${theme.transition};
  &:hover {
    border: 1px solid ${theme.colors.lights[4]};
  }
  &:focus {
    outline: 0;
    border: 1px solid ${theme.colors.darks[0]};
  }
  &:disabled {
    color: ${theme.colors.lights[4]};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.lights[2]};
    cursor: not-allowed;
  }

  ${({ valid }) =>
    valid === false &&
    css`
      border: ${theme.borders.danger};
      &:hover {
        border: ${theme.borders.danger};
      }
    `}
`;

const StyledInput = styled.input<InputProps>`
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
      margin-left: ${theme.spacing.spacing02};
    `}
`;

export const Description: FunctionComponent = ({ children }) => {
  const StyledDescription = styled(Container)`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.darks[3]};
    margin: ${theme.spacing.spacing01} 0;
    width: 100%;
  `;
  return <StyledDescription>{children}</StyledDescription>;
};

export const Input: FunctionComponent<InputProps> = ({
  type = "text",
  name,
  ...props
}) => (
  <InputGroup>
    {type === "search" && (
      <Icon image="SEARCH" width="1.2rem" height="1.2rem" />
    )}
    <StyledInput name={name} type={type} id={name} {...props} />
  </InputGroup>
);
