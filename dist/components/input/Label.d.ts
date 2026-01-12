import * as React from "react";
type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean;
    name?: string;
};
export declare function Label({ name, required, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
