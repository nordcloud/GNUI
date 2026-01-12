import * as React from "react";
import { SpaceProps } from "styled-system";
type Color = "danger" | "notification" | "success" | "warning";
type Props = SpaceProps & {
    size: number;
    progress: number;
    strokeWidth: number;
    color?: Color;
    children?: React.ReactNode;
};
export declare function PieChart({ size, progress, strokeWidth, color, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
