import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { GnuiContainer, Flex, GnuiContainerProps } from "../container";
import { InputProps } from "../input/types";
import { Button, ButtonProps } from "../button";

const StyledSubmit = styled.input`
  background: ${theme.color.interactive.primary};
  font-family: ${theme.fonts.body};
  color: ${theme.color.text.text04};
  border: 1px solid ${theme.color.interactive.primary};
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
    color: ${theme.color.text.text03};
  }

  &:active {
    color: ${theme.color.text.text02};
  }

  &:disabled {
    background: ${theme.color.interactive.disabled};
    color: ${theme.color.text.text03};

    &:hover {
      color: ${theme.color.text.text03};
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

export const Form: FunctionComponent<GnuiContainerProps> = ({
  children,
  ...props
}) => <GnuiContainer {...props}>{children}</GnuiContainer>;
