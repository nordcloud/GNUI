import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";
import { Flex } from "../container";
import { StyledInputGroupProps, StyledInputProps, Status } from "./types";

export const setStatusColor = (status: Status) => {
  if (status === "danger") {
    return css`
      border: 1px solid ${theme.color.border.error};
    `;
  } else if (status === "success") {
    return css`
      border: 1px solid ${theme.color.border.input};
    `;
  }
};

export const InputGroup = styled(Flex)<StyledInputGroupProps & SpaceProps>`
  position: relative;
  align-items: center;
  border: 1px solid ${theme.color.border.input};
  padding: ${theme.spacing.spacing02};
  border-radius: ${theme.radiusDefault};
  color: ${theme.color.text.text01};
  background: ${theme.color.field.default};
  transition: ${theme.transition};
  overflow: hidden;
  border-width: ${(props: StyledInputGroupProps) => props.noBorder && "0"};

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
  ${({ popup }) =>
    popup &&
    css`
      cursor: pointer;
    `};
  ${space};
`;

export const StyledInput = styled.input<StyledInputProps>`
  border: 0;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  font-family: ${theme.typography.fonts.body};
  font-size: ${(props: StyledInputProps) =>
    props.small ? theme.fontSizes.sm : theme.fontSizes.md};
  line-height: ${(props: StyledInputProps) =>
    props.small ? "1rem" : theme.lineHeight};
  padding: 0;
  margin: 0;
  transition: ${theme.transition};
  color: ${theme.color.text.text01};

  &::placeholder {
    color: ${theme.color.text.text03};
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 1rem ${theme.color.background.ui03} inset;
    -webkit-text-fill-color: ${theme.color.text.text01};
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

  ${({ type }) =>
    type === "search" &&
    css`
      margin-left: ${theme.spacing.spacing02};
    `}

  ${({ popup }) =>
    popup &&
    css`
      cursor: pointer;
    `}
`;

type ClearProps = {
  onClick?: () => void;
};

export const Clear = styled.button<ClearProps>`
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.spacing02};
  background: none;
  border: none;
  margin-left: auto;
  outline: none;
  cursor: pointer;
`;
