import * as React from "react";
export declare const IndeterminateCheckbox: (props: React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: string | undefined;
    withoutLabel?: boolean | undefined;
    isIndeterminate?: boolean | undefined;
    ref?: React.Ref<HTMLInputElement> | undefined;
} & React.RefAttributes<HTMLInputElement> & {
    indeterminate?: boolean | undefined;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
