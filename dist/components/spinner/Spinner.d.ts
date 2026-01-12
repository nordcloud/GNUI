import * as React from "react";
export type SpinnerProps = {
    size?: "lg" | "md" | "sm" | "xl" | "xxl";
    color?: "danger" | "notification" | "success" | "warning" | "white";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    ninja?: boolean;
};
export declare function Spinner({ color, size, ninja }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
