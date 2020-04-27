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
  status?: "success" | "error";
  children?: string | number | any;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const StyledLabel = styled.label`
  line-height: ${theme.lineHeight};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.spacing02};
`;

export const Label: FunctionComponent<{ name?: string }> = ({
  name = "Label",
}) => (
  <Flex>
    <StyledLabel htmlFor={name}>{name}</StyledLabel>
  </Flex>
);

const setStatusColor = (status: "success" | "error") => {
  if (status === "error") {
    return css`
      border: ${theme.borders.danger};
    `;
  } else if (status === "success") {
    return css`
      border: ${theme.borders.success};
    `;
  }
};

const InputGroup = styled(Flex)<InputProps>`
  align-items: center;
  border: ${theme.borders.disabled};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  border-radius: ${theme.radiusDefault};
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};
  overflow: hidden;
  &:hover {
    border: ${theme.borders.darkenGray};
  }
  &:focus {
    outline: 0;
    border: 1px solid ${theme.colors.darks[4]};
  }
  &:disabled {
    color: ${theme.colors.lights[4]};
    background: ${theme.colors.white};
    border: ${theme.borders.grey};
    cursor: not-allowed;
  }

  ${({ status }) =>
    status &&
    css`
      ${setStatusColor(status)}
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
    background: ${theme.colors.white};
    border: 0;
    cursor: not-allowed;
  }

  ${({ type }) =>
    type === "search" &&
    css`
      margin-left: ${theme.spacing.spacing02};
    `}
`;

const StyledDescription = styled(Container)`
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.darks[3]};
  margin: ${theme.spacing.spacing02} 0;
  width: 100%;
`;

export const Description: FunctionComponent = ({ children }) => (
  <StyledDescription>{children}</StyledDescription>
);

export const Input: FunctionComponent<InputProps> = ({
  type = "text",
  name,
  status,
  ...props
}) => (
  <InputGroup status={status} {...props}>
    {type === "search" && (
      <Icon image="SEARCH" width="1.2rem" height="1.2rem" />
    )}
    <StyledInput name={name} type={type} id={name} {...props} />
    {status && (
      <Icon
        image={`INPUT_${status.toUpperCase()}`}
        width="1.2rem"
        height="1.2rem"
      />
    )}
  </InputGroup>
);
