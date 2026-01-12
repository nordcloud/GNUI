import { SpaceProps } from "styled-system";
import { StyledInputGroupProps, Status } from "./types";
export declare const setStatusColor: (status: Status) => import("styled-components").FlattenSimpleInterpolation | undefined;
export declare const InputGroup: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    alignItems?: "center" | "baseline" | "end" | "first baseline" | "flex-end" | "flex-start" | "last baseline" | "self-end" | "self-start" | "start" | "stretch" | undefined;
    alignContent?: "center" | "baseline" | "end" | "first baseline" | "flex-end" | "flex-start" | "last baseline" | "self-end" | "self-start" | "start" | "stretch" | undefined;
    justifyContent?: "center" | "end" | "flex-end" | "flex-start" | "start" | "left" | "right" | "space-around" | "space-between" | "space-evenly" | undefined;
    grow?: number | undefined;
    wrap?: "nowrap" | "wrap-reverse" | "wrap" | undefined;
    direction?: "column-reverse" | "column" | "row-reverse" | "row" | undefined;
    gap?: 0 | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | "0" | undefined;
    columnGap?: 0 | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | "0" | undefined;
    rowGap?: 0 | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | "0" | undefined;
    popup?: boolean | undefined;
} & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & StyledInputGroupProps, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, import("react").InputHTMLAttributes<HTMLInputElement> & {
    small?: boolean | undefined;
    popup?: boolean | undefined;
    onClear?: (() => void) | undefined;
    showClearButton?: boolean | undefined;
    loading?: boolean | undefined;
}, never>;
type ClearProps = {
    onClick?: () => void;
};
export declare const Clear: import("styled-components").StyledComponent<"button", any, ClearProps, never>;
export {};
