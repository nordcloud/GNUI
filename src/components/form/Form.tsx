import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Container, Flex } from "../container";
import { InputProps } from "../input";
import { Button } from "../button";

const StyledSubmit = styled.input`
  background: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.white};
  border: 0.0625rem solid ${theme.colors.primary};
  font-weight: ${theme.fontWeights.regular};
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontSizes.regular};
  line-height: ${theme.lineHeight};
  margin: 0rem 0.5rem;
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
    border: 0.0625rem solid ${theme.colors.lights[3]};
    color: ${theme.colors.darks[4]};
    &:hover {
      color: ${theme.colors.darks[4]};
      cursor: not-allowed;
    }
  }
`;

export const FormButtons: FunctionComponent = ({ children }) => (
  <Flex margin="1rem 0" justifyContent="flex-end">
    {children}
  </Flex>
);

export const CancelButton: FunctionComponent<InputProps> = ({
  name,
  ...props
}) => (
  <Button color="danger" {...props}>
    {name || "Cancel"}
  </Button>
);

export const SubmitButton: FunctionComponent<InputProps> = ({
  name,
  ...props
}) => <StyledSubmit name={name || "Submit"} type="submit" {...props} />;

export const Form: FunctionComponent<InputProps> = ({ children }) => (
  <Container>{children}</Container>
);
