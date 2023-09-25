import * as React from "react";
import { SpaceProps } from "styled-system";
import { SVGIcon } from "../svgicon";
import { Clear, InputGroup, StyledInput } from "./styles";
import {
  StyledInputGroupProps,
  StyledInputProps,
  InputPasswordProps,
} from "./types";

type Props = InputPasswordProps &
  SpaceProps &
  StyledInputGroupProps &
  StyledInputProps;

export const InputPassword = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      noBorder,
      popup,
      status,
      onClick,
      small,
      showPasswordOnInit = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(showPasswordOnInit);

    return (
      <InputGroup status={status} noBorder={noBorder} popup={popup}>
        <StyledInput
          ref={ref}
          type={showPassword ? "text" : "password"}
          popup={popup}
          small={small}
          onClick={onClick}
          {...props}
        />
        <Clear
          title={showPassword ? "Hide password" : "Show password"}
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <SVGIcon size="md" name={showPassword ? "eye" : "eyeClose"} />
        </Clear>
      </InputGroup>
    );
  }
);
