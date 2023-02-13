import * as React from "react";
import { SpaceProps } from "styled-system";
import { THEME_OPTIONS } from "../../theme/switcher";
import { Spinner } from "../spinner";
import { SVGIcon } from "../svgicon";
import { Clear, InputGroup, StyledInput } from "./styles";
import { StyledInputGroupProps, StyledInputProps } from "./types";

type Props = SpaceProps & StyledInputGroupProps & StyledInputProps;

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
    const savedThemeValue = window.localStorage.getItem("NC_GNUI_THEME") ?? "";

    return (
      <InputGroup status={status} noBorder={noBorder} popup={popup}>
        {type === "search" && !loading && <SVGIcon name="search" size="smd" />}
        {type === "search" && loading && <Spinner />}
        <StyledInput
          ref={ref}
          type={type}
          popup={popup}
          small={small}
          dark={savedThemeValue === THEME_OPTIONS.DARK}
          onClick={onClick}
          {...props}
        />
        {showClearButton && (
          <Clear
            title={`Clear ${props.name ?? ""} value`}
            role="button"
            onClick={onClear}
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
