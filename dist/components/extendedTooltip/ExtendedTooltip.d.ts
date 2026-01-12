import * as React from "react";
import { Display, Margin, Placement, Position } from "../../utils/position";
type Timeout = {
    showTimeout?: number;
    hideTimeout?: number;
};
type Status = "accent" | "danger" | "notification" | "success" | "warning";
export type ExtendedTooltipProps = React.HTMLAttributes<HTMLDivElement> & Timeout & {
    caption: React.ReactNode;
    children: React.ReactNode;
    placement?: Placement;
    position?: Position;
    margin?: Margin;
    status?: Status;
    zIndex?: number;
    display?: Display;
    adjustPositionToViewportSize?: boolean;
};
export declare function ExtendedTooltip({ caption, children, placement, position, status, showTimeout, hideTimeout, margin, zIndex, display, adjustPositionToViewportSize, ...rest }: ExtendedTooltipProps): import("react/jsx-runtime").JSX.Element;
export type TooltipWrapperProps = {
    display?: Display;
};
export {};
