type LabeledOption = {
  value: string;
  label?: string;
};

export type Option = string | LabeledOption;
export type OptionKey = "label" | "value";
