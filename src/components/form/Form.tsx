import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Button, ButtonProps } from "../button";
import { GnuiContainer, Flex, GnuiContainerProps } from "../container";
import { StyledInputProps } from "../input/types";

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

type FormButtonsProps = {
  children: React.ReactNode;
};

export function FormButtons({ children, ...props }: FormButtonsProps) {
  return (
    <Flex margin="1rem 0" justifyContent="flex-end" {...props}>
      {children}
    </Flex>
  );
}

export function CancelButton({
  name,
  ...props
}: ButtonProps & { name: string }) {
  return (
    <Button color="danger" {...props}>
      {name || "Cancel"}
    </Button>
  );
}

export function SubmitButton({ name, ...props }: StyledInputProps) {
  return (
    <StyledSubmit
      name={name || "Submit"}
      {...props}
      {...(!props.type && { type: "submit" })}
    />
  );
}

export function Form({ children, ...props }: GnuiContainerProps) {
  return <GnuiContainer {...props}>{children}</GnuiContainer>;
}
