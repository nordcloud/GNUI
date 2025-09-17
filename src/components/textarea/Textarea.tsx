import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { setStatusColor } from "../input/styles";
import { Status } from "../input/types";

export type TextareaGroupProps = {
  status?: Status;
  maxCharCount?: number;
};

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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

const Counter = styled.p<TextareaGroupProps>`
  color: ${theme.color.text.text03};
  font-size: ${theme.fontSizes.sm};
  text-align: right;
  ${({ status }) =>
    status === "danger" &&
    css`
      color: ${theme.color.text.error};
    `};
`;

const TextareaFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing.spacing01};
`;

type Props = TextareaGroupProps & TextareaProps;

function getDefaultCharCount(props: Props) {
  if (typeof props.value === "string") {
    return props.value.length;
  }

  if (typeof props.defaultValue === "string") {
    return props.defaultValue.length;
  }

  return 0;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ status, maxCharCount, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(
      getDefaultCharCount(props)
    );

    React.useEffect(() => {
      if (typeof props.value === "string") {
        setCharCount(props.value.length);
      }
    }, [props.value]);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setCharCount(event.target.value.length);
      props.onChange?.(event);
    }

    if (typeof maxCharCount === "number" && maxCharCount > 0) {
      return (
        <TextareaFlexContainer>
          <TextareaGroup status={status}>
            <StyledTextarea
              ref={ref}
              maxLength={maxCharCount}
              {...props}
              onChange={handleChange}
            />
          </TextareaGroup>
          <Counter status={status}>
            {maxCharCount - charCount}&nbsp;&#47;&nbsp;{maxCharCount}
          </Counter>
        </TextareaFlexContainer>
      );
    }

    return (
      <TextareaGroup status={status}>
        <StyledTextarea ref={ref} {...props} />
      </TextareaGroup>
    );
  }
);
