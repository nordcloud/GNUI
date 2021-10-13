import * as React from "react";
import { SpaceProps } from "styled-system";
import { Spinner } from "../spinner";
import { SVGIcon } from "../svgicon";
import { Clear, InputGroup, StyledInput } from "./styles";
import { StyledInputGroupProps, StyledInputProps } from "./types";

type Props = StyledInputGroupProps & StyledInputProps & SpaceProps;

export const Input = React.forwardRef<HTMLInputElement, Props>(
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
        {type === "search" && !loading && <SVGIcon name="search" size="smd" />}
        {type === "search" && loading && <Spinner />}
        <StyledInput
          type={type}
          onClick={onClick}
          popup={popup}
          small={small}
          ref={ref}
          {...props}
        />
        {showClearButton && (
          <Clear
            onClick={onClear}
            title={`Clear ${props.name} value`}
            role="button"
          >
            <SVGIcon size="sm" name="close" />
          </Clear>
        )}
        {status && <SVGIcon name={status} size="smd" />}
        {icon && (
          <SVGIcon size="sm" name={icon} css={{ pointerEvents: "none" }} />
        )}
      </InputGroup>
    );
  }
);
