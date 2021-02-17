import * as React from "react";
import { paths } from "../../utils/svgicons";

export type Status = "success" | "danger";

export type StyledInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  small?: boolean;
  popup?: boolean;
  onClear?: () => void;
  showClearButton?: boolean;
  loading?: boolean;
  ref?: React.Ref<HTMLInputElement>;
};

export type StyledInputGroupProps = {
  status?: Status;
  noBorder?: boolean;
  icon?: keyof typeof paths;
};
