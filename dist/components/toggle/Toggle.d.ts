import * as React from "react";
import { SingleColors } from "../../theme/config";
declare const StyledToggle: import("styled-components").StyledComponent<"button", any, Pick<CustomProps, "size" | "status">, never>;
type CustomProps = {
    value: boolean;
    labelText?: string;
    status?: SingleColors;
    size?: string;
    onChange: (value: boolean) => void;
};
export type ToggleProps = CustomProps & React.ComponentProps<typeof StyledToggle>;
export declare function Toggle({ value, labelText, onChange, ...props }: ToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
