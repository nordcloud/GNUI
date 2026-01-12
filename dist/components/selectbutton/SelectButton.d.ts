import * as React from "react";
import { SingleColors } from "../../theme/config";
export type SelectButtonProps = Omit<React.ComponentProps<"button">, "onClick"> & {
    name: string;
    value: string;
    labelText: React.ReactNode;
    isActive?: boolean;
    onClick: (value: SelectButtonProps["value"]) => void;
    disabled?: boolean;
};
export type SelectButtonListProps = React.ComponentPropsWithRef<"ul"> & {
    children: React.ReactNode;
    status?: SingleColors;
    size?: string;
};
export declare function SelectButton({ name, value, labelText, isActive, onClick, disabled, ...props }: SelectButtonProps): import("react/jsx-runtime").JSX.Element;
export declare function MultipleSelect({ status, children, size, ...containerProps }: SelectButtonListProps): import("react/jsx-runtime").JSX.Element;
