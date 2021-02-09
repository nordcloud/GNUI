import * as React from "react";
import { SpaceProps } from "styled-system";
import { Spinner } from "../spinner";
import { SVGIcon } from "../svgicon";
import { StyledInputGroupProps, StyledInputProps } from "./types";
import {
  Clear,
  IconsWrap,
  InputGroup,
  NotClickable,
  StyledInput,
} from "./styles";

type Props = StyledInputGroupProps & StyledInputProps & SpaceProps;

export const Input: React.FC<Props> = React.forwardRef(
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
        {type === "search" && !loading && <SVGIcon name="search" />}
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
          {status && <SVGIcon name={status} />}
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
