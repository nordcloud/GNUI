import * as React from "react";
export type CheckmarkCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: string;
    withoutLabel?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    double?: boolean;
};
export declare const CheckmarkCheckbox: (props: React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: string | undefined;
    withoutLabel?: boolean | undefined;
    ref?: React.Ref<HTMLInputElement> | undefined;
    double?: boolean | undefined;
} & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
