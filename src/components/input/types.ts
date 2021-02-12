import * as React from "react";

export type Status = "success" | "error";

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
  icon?: string;
};
