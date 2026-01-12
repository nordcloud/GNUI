import { SingleColors, ThemeColors } from "../../theme/config";
type Value = SingleColors | ThemeColors | (string & {});
export declare const checkColor: (color: Value) => string;
export {};
