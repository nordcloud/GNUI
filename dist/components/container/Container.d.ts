import * as React from "react";
import { SpaceProps } from "styled-system";
declare const StyledContainer: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    width?: string | undefined;
}, never>;
export type ContainerProps = React.ComponentPropsWithRef<typeof StyledContainer>;
export declare const Container: (props: {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | React.ComponentType<any> | undefined;
    forwardedAs?: string | React.ComponentType<any> | undefined;
} & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
/**
 * @deprecated Please use FlexContainer
 */
export declare const Flex: import("styled-components").StyledComponent<(props: {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | React.ComponentType<any> | undefined;
    forwardedAs?: string | React.ComponentType<any> | undefined;
} & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null, any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    alignItems?: string | undefined;
    justifyContent?: string | undefined;
    flexDirection?: string | undefined;
    margin?: string | undefined;
}, never>;
export declare const FlexContainer: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    alignItems?: "center" | "flex-start" | "baseline" | "end" | "first baseline" | "flex-end" | "last baseline" | "self-end" | "self-start" | "start" | "stretch" | undefined;
    alignContent?: "center" | "flex-start" | "baseline" | "end" | "first baseline" | "flex-end" | "last baseline" | "self-end" | "self-start" | "start" | "stretch" | undefined;
    justifyContent?: "center" | "flex-start" | "end" | "flex-end" | "start" | "left" | "right" | "space-around" | "space-between" | "space-evenly" | undefined;
    grow?: number | undefined;
    wrap?: "nowrap" | "wrap-reverse" | "wrap" | undefined;
    direction?: "row" | "column-reverse" | "column" | "row-reverse" | undefined;
    gap?: 0 | "0" | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | undefined;
    columnGap?: 0 | "0" | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | undefined;
    rowGap?: 0 | "0" | `${number}em` | `${number}pt` | `${number}px` | `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | undefined;
    popup?: boolean | undefined;
}, never>;
export {};
