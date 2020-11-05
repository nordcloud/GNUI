import React, { FunctionComponent, InputHTMLAttributes, Ref } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { GnuiContainer, Flex } from "../container";
import { Icon } from "../icon";
import { space, SpaceProps } from "styled-system";
import { Spinner } from "../spinner";
import { SVGIcon } from "../svgicon";

export type InputProps = {
  small?: boolean;
  popup?: boolean;
  onClear?: () => void;
  showClearButton?: boolean;
  loading?: boolean;
  ref?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

type LabelProps = {
  required?: boolean;
  name?: string;
};

type InputGroupProps = {
  status?: Status;
  noBorder?: boolean;
  icon?: string;
};

type Status = "success" | "error";

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

const setStatusColor = (status: Status) => {
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

const InputGroup = styled(Flex)<InputGroupProps & SpaceProps>`
  position: relative;
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
  border-width: ${(props: InputGroupProps) => props.noBorder && "0px"}
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

export const StyledInput = styled.input<InputProps>`
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

const StyledDescription = styled(GnuiContainer)`
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.darks[3]};
  margin: ${theme.spacing.spacing02} 0;
  width: 100%;
`;
type ClearProps = {
  onClick?: () => void;
};
const IconsWrap = styled.div`
  position: absolute;
  top: 0;
  right: ${theme.spacing.spacing06};
  bottom: 0;
  display: flex;
  align-items: center;
`;

const Clear = styled.button<ClearProps>`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.spacing02};
  background: none;
  border: none;
  margin-left: auto;
  outline: none;
  cursor: pointer;
`;

const NotClickable = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: ${theme.spacing.spacing02};
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const Description: FunctionComponent = ({ children }) => (
  <StyledDescription>{children}</StyledDescription>
);

export const Input: FunctionComponent<
  InputGroupProps & InputProps & SpaceProps
> = React.forwardRef(
  (
    {
      noBorder,
      type,
      popup,
      status,
      loading,
      onClick,
      small,
      showClearButton,
      onClear = () => undefined,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <InputGroup status={status} noBorder={noBorder} popup={popup}>
        {type === "search" && !loading && (
          <Icon image="SEARCH" width="1.2rem" height="1.2rem" />
        )}
        {type === "search" && loading && <Spinner />}
        <StyledInput
          type={type}
          onClick={onClick}
          popup={popup}
          small={small}
          ref={ref}
          {...props}
        />
        <IconsWrap>
          {showClearButton && (
            <Clear
              onClick={onClear}
              title={`Clear ${props.name} value`}
              role="button"
            >
              <SVGIcon size="sm" name="close" />
            </Clear>
          )}
          {status && (
            <Icon
              image={`INPUT_${status.toUpperCase()}`}
              width="1.2rem"
              height="1.2rem"
            />
          )}
        </IconsWrap>
        {icon && (
          <NotClickable>
            <SVGIcon size="sm" name={icon} />
          </NotClickable>
        )}
      </InputGroup>
    );
  }
);
