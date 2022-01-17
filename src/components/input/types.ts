import * as React from "react";
import { SVGIconProps } from "../svgicon";

export type Status = "success" | "danger";

export type StyledInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  small?: boolean;
  popup?: boolean;
  onClear?: () => void;
  showClearButton?: boolean;
  loading?: boolean;
};

export type StyledInputGroupProps = {
  status?: Status;
  noBorder?: boolean;
  icon?: SVGIconProps["name"];
};

export type InputPasswordProps = {
  showPasswordOnInit: boolean;
};
