import * as React from "react";
import { SpaceProps } from "styled-system";
import theme from "../../theme";
type BoxProps = {
    dark?: boolean;
    minHeight?: string;
    minWidth?: string;
    border?: keyof typeof theme.borders;
    color?: string;
    backgroundColor?: string;
    radius?: keyof typeof theme.radius;
    spacing?: keyof typeof theme.spacing;
    innerSpacing?: keyof typeof theme.spacing;
    shadow?: keyof typeof theme.shadow;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
    boxStyle?: "grey" | "lightGrey";
};
declare const StyledBox: import("styled-components").StyledComponent<(props: {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | React.ComponentType<any> | undefined;
    forwardedAs?: string | React.ComponentType<any> | undefined;
} & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null, any, BoxProps & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, never>;
export declare function Box({ children, ...props }: React.ComponentProps<typeof StyledBox>): import("react/jsx-runtime").JSX.Element;
export {};
