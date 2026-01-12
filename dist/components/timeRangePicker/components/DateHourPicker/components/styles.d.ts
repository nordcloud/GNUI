import { Tag } from "../../../../tag";
type CountBarProps = {
    height: number;
};
export declare const CustomTimeRangeSelector: import("styled-components").StyledComponent<"div", any, import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    alignItems?: "center" | "baseline" | "end" | "first baseline" | "flex-end" | "flex-start" | "last baseline" | "self-end" | "self-start" | "start" | "stretch" | undefined;
    alignContent?: "center" | "baseline" | "end" | "first baseline" | "flex-end" | "flex-start" | "last baseline" | "self-end" | "self-start" | "start" | "stretch" | undefined;
    justifyContent?: "center" | "end" | "flex-end" | "flex-start" | "start" | "left" | "right" | "space-around" | "space-between" | "space-evenly" | undefined;
    grow?: number | undefined;
    wrap?: "nowrap" | "wrap-reverse" | "wrap" | undefined;
    direction?: "column-reverse" | "column" | "row-reverse" | "row" | undefined;
    gap?: 0 | "0" | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | undefined;
    columnGap?: 0 | "0" | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | undefined;
    rowGap?: 0 | "0" | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | undefined;
    popup?: boolean | undefined;
} & {
    isVisible: boolean;
}, never>;
export declare const CountTag: import("styled-components").StyledComponent<typeof Tag, any, {}, never>;
export declare const CountBarWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CountBar: import("styled-components").StyledComponent<"div", any, CountBarProps, never>;
export {};
