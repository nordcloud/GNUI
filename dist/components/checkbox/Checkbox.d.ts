import * as React from "react";
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: string;
    withoutLabel?: boolean;
    isIndeterminate?: boolean;
    ref?: React.Ref<HTMLInputElement>;
};
export declare const Checkbox: (props: React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: string | undefined;
    withoutLabel?: boolean | undefined;
    isIndeterminate?: boolean | undefined;
    ref?: React.Ref<HTMLInputElement> | undefined;
} & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export type CheckboxGroupProps = Pick<CheckboxProps, "children" | "name">;
export declare function CheckboxGroup({ name, children }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
