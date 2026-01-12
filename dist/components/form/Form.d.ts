import * as React from "react";
import { ButtonProps } from "../button";
import { GnuiContainerProps } from "../container";
import { StyledInputProps } from "../input/types";
type FormButtonsProps = {
    children: React.ReactNode;
};
export declare function FormButtons({ children, ...props }: FormButtonsProps): import("react/jsx-runtime").JSX.Element;
export declare function CancelButton({ name, ...props }: ButtonProps & {
    name: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function SubmitButton({ name, ...props }: StyledInputProps): import("react/jsx-runtime").JSX.Element;
export declare function Form({ children, ...props }: GnuiContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
