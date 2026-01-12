import * as React from "react";
import { SpaceProps } from "styled-system";
import { StyledInputGroupProps } from "./types";
export declare const Input: (props: SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & StyledInputGroupProps & React.InputHTMLAttributes<HTMLInputElement> & {
    small?: boolean | undefined;
    popup?: boolean | undefined;
    onClear?: (() => void) | undefined;
    showClearButton?: boolean | undefined;
    loading?: boolean | undefined;
} & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
