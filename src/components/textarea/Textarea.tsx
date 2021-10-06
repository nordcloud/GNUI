import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { setStatusColor } from "../input/styles";
import { Status } from "../input/types";

export type TextareaGroupProps = {
  status?: Status;
};

export type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  small?: boolean;
  ref?: React.Ref<HTMLTextAreaElement>;
};

const TextareaGroup = styled.div<TextareaGroupProps>`
  position: relative;
  align-items: center;
  border: 1px solid ${theme.color.border.input};
  padding: ${theme.spacing.spacing02};
  border-radius: ${theme.radiusDefault};
  color: ${theme.color.text.text01};
  background: ${theme.color.field.default};
  transition: ${theme.transition};
  overflow: hidden;

  &:hover {
    border: 1px solid ${theme.color.border.focus};
  }

  &:focus {
    outline: 0;
    border: 1px solid ${theme.color.border.focus};
  }

  &:disabled {
    color: ${theme.color.text.text03};
    background: ${theme.color.field.disabled};
    border: 1px solid ${theme.color.border.input};
    cursor: not-allowed;
  }
  ${({ status }) =>
    status &&
    css`
      ${setStatusColor(status)}
    `};
`;

const StyledTextarea = styled.textarea<TextareaProps>`
  border: 0;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  font-family: ${theme.typography.fonts.body};
  font-size: ${(props: TextareaProps) =>
    props.small ? theme.fontSizes.sm : theme.fontSizes.md};
  line-height: ${(props: TextareaProps) =>
    props.small ? "1rem" : theme.lineHeight};
  padding: 0;
  margin: 0;
  transition: ${theme.transition};
  color: ${theme.color.text.text01};
  resize: none;

  &::placeholder {
    color: ${theme.color.text.text03};
  }

  &:hover,
  &:focus {
    outline: 0;
    border: 0;
  }

  &:disabled {
    color: ${theme.color.text.text03};
    background: transparent;
    border: 0;
    cursor: not-allowed;
  }
`;

type Props = TextareaGroupProps & TextareaProps;

export const Textarea: React.FC<Props> = React.forwardRef(
  ({ status, ...props }, ref) => {
    return (
      <TextareaGroup status={status}>
        <StyledTextarea ref={ref} {...props} />
      </TextareaGroup>
    );
  }
);
