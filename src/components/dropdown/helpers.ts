import { Option, OptionKey } from "./types";

export function getOptionValue(
  option: Option | undefined,
  key: OptionKey = "value"
) {
  if (option === undefined) {
    return undefined;
  }

  return typeof option === "string" ? option : option[key];
}
