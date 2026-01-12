import * as React from "react";
export type SwitchProps = React.ComponentPropsWithoutRef<"input"> & {
    labelText?: string;
    severity?: "danger" | "notification" | "primary" | "success" | "warning";
    position?: "left" | "right";
};
export declare function Switch({ severity, position, labelText, id, ...props }: SwitchProps): import("react/jsx-runtime").JSX.Element;
