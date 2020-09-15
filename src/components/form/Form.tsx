import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Container, Flex, ContainerProps } from "../container";
import { InputProps } from "../input";
import { Button, ButtonProps } from "../button";

const StyledSubmit = styled.input`
  background: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.white};
  border: ${theme.borderDefault};
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.md};
  line-height: ${theme.lineHeight};
  margin: 0 ${theme.spacing.spacing02};
  transition: ${theme.transition};
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    color: ${theme.colors.lights[4]};
  }
  &:active {
    color: ${theme.colors.darks[4]};
  }
  &:disabled {
    background: ${theme.colors.lights[3]};
    border: ${theme.borders.disabled};
    color: ${theme.colors.darks[4]};
    &:hover {
      color: ${theme.colors.darks[4]};
      cursor: not-allowed;
    }
  }
`;

export const FormButtons: FunctionComponent = ({ children, ...props }) => (
  <Flex margin="1rem 0" justifyContent="flex-end" {...props}>
    {children}
  </Flex>
);

export const CancelButton: FunctionComponent<
  ButtonProps & { name: string }
> = ({ name, ...props }) => (
  <Button color="danger" {...props}>
    {name || "Cancel"}
  </Button>
);

export const SubmitButton: FunctionComponent<InputProps> = ({
  name,
  ...props
}) => (
  <StyledSubmit
    name={name || "Submit"}
    {...props}
    {...(!props.type && { type: "submit" })}
  />
);

export const Form: FunctionComponent<ContainerProps> = ({
  children,
  ...props
}) => <Container {...props}>{children}</Container>;
