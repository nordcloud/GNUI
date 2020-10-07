interface IOption {
  value: string;
  label?: string;
}

export type Option = string | IOption;
export type OptionKey = "label" | "value";
