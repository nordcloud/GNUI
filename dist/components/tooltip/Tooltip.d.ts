import * as React from "react";
type Props = {
    caption: React.ReactNode;
    position?: "left" | "right";
    bottom?: boolean;
    status?: "danger" | "notification" | "success" | "warning";
    children?: React.ReactNode;
    showTimeout?: number;
    hideTimeout?: number;
    minWidth?: string;
};
export declare function Tooltip({ status, position, caption, bottom, children, hideTimeout, showTimeout, minWidth, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
