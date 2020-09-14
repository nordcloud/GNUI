import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container, Flex } from "../container";
import { Icon } from "../icon";
import { space, SpaceProps } from "styled-system";
import { Spinner } from "../spinner";

export interface InputProps {
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  title?: string;
  value?: string;
  defaultValue?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  status?: "success" | "error";
  small?: boolean;
  ref?: any;
  popup?: boolean;
  children?: string | number | any;
  loading?: boolean;
  autoFocus?: boolean;
  noBorder?: boolean;
  onClick?: (e: any) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: any) => void;
}

interface LabelProps {
  required?: boolean;
  name?: string;
}

const StyledLabel = styled.label<LabelProps>`
  line-height: ${theme.lineHeight};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.spacing02};
  ${({ required }) =>
    required &&
    css`
      &:after {
        content: "*";
        color: ${theme.colors.danger};
      }
    `}
`;

export const Label: FunctionComponent<LabelProps> = ({
  name = "Label",
  required,
}) => (
  <Flex>
    <StyledLabel htmlFor={name} required={required}>
      {name}
    </StyledLabel>
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

const InputGroup = styled(Flex)<InputProps & SpaceProps>`
  align-items: center;
  border: ${theme.borders.disabled};
  padding: ${theme.spacing.spacing02};
  border-radius: ${theme.radiusDefault};
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  transition: ${theme.transition};
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
  border-width: ${(props: InputProps) => props.noBorder && "0px"}
    ${({ status }) =>
      status &&
      css`
        ${setStatusColor(status)}
      `}
    ${({ popup }) =>
      popup &&
      css`
        cursor: pointer;
      `}
    ${space};
`;

const StyledInput = styled.input<InputProps>`
  border: 0;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  font-family: ${theme.typography.fonts.body};
  font-size: ${(props: InputProps) =>
    props.small ? theme.fontSizes.sm : theme.fontSizes.md};
  line-height: ${(props: InputProps) =>
    props.small ? "1rem" : theme.lineHeight};
  padding: 0;
  margin: 0;
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

  ${({ popup }) =>
    popup &&
    css`
      cursor: pointer;
    `}
`;

const StyledDescription = styled(Container)`
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.darks[3]};
  margin: ${theme.spacing.spacing02} 0;
  width: 100%;
`;

const StyledUpload = styled.div`
  input[type="file"] {
    display: none;
  }
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};
  label {
    border: ${theme.borders.disabled};
    border-radius: ${theme.radiusDefault};
    border-none: none;
    padding-left: ${theme.spacing.spacing03};
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin: -1px 0 -1px auto;
      border-top-right-radius: ${theme.radiusDefault};
      border-bottom-right-radius: ${theme.radiusDefault};
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
    }
  }
`;

export const Description: FunctionComponent = ({ children }) => (
  <StyledDescription>{children}</StyledDescription>
);

export const Input: FunctionComponent<
  InputProps & SpaceProps
> = React.forwardRef(
  ({ type = "text", name, status, popup, loading, title, ...props }, ref) => (
    <InputGroup status={status} {...props} popup={popup}>
      {type === "search" && !loading && (
        <Icon image="SEARCH" width="1.2rem" height="1.2rem" />
      )}
      {type === "search" && loading && <Spinner />}
      <StyledInput
        name={name}
        title={title}
        type={type}
        id={name}
        ref={ref}
        {...props}
        popup={popup}
      />
      {status && (
        <Icon
          image={`INPUT_${status.toUpperCase()}`}
          width="1.2rem"
          height="1.2rem"
        />
      )}
      {popup && <Icon image={`MENU`} width="1.2rem" height="1.2rem" />}
    </InputGroup>
  )
);

interface UploadProps extends Omit<InputProps, "type"> {}

export const Upload: FunctionComponent<UploadProps> = ({
  placeholder,
  title,
  id = "",
  ...props
}) => (
  <StyledUpload>
    <label htmlFor={id}>
      {placeholder}
      <span>{title}</span>
    </label>
    <StyledInput type="file" id={id} {...props} />
  </StyledUpload>
);
