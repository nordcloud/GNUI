import * as React from "react";
export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: React.ReactNode;
    ref?: React.Ref<HTMLInputElement>;
};
export declare const Radio: (props: React.InputHTMLAttributes<HTMLInputElement> & {
    labelText?: React.ReactNode;
    ref?: React.Ref<HTMLInputElement> | undefined;
} & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export type RadioGroupProps = {
    children: React.ReactElement<React.ComponentProps<typeof Radio>>[];
    name: string;
};
export declare function RadioGroup({ children, name }: RadioGroupProps): import("react/jsx-runtime").JSX.Element | null;
