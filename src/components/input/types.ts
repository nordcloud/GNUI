import { InputHTMLAttributes, Ref } from "react";

export type Status = "success" | "error";

export type InputProps = {
  small?: boolean;
  popup?: boolean;
  onClear?: () => void;
  showClearButton?: boolean;
  loading?: boolean;
  ref?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export type LabelProps = {
  required?: boolean;
  name?: string;
};

export type InputGroupProps = {
  status?: Status;
  noBorder?: boolean;
  icon?: string;
};
