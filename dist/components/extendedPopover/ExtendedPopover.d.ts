import * as React from "react";
import { Placement, Position, Margin } from "../../utils/position";
type Props = {
    content: React.ReactNode;
    trigger?: React.ReactNode;
    placement?: Placement;
    position?: Position;
    margin?: Margin;
    clickOutsideToClose?: boolean;
    triggerOn?: ExtendedPopoverAction;
    closeOn?: ExtendedPopoverAction;
    adjustPositionToViewportSize?: boolean;
    zIndex?: number;
    /** Optional scroll container to listen on; defaults to window. Useful for modals with internal scroll. */
    scrollTarget?: (EventTarget & {
        addEventListener: EventTarget["addEventListener"];
        removeEventListener: EventTarget["removeEventListener"];
    }) | null;
    /** Whether to close/reposition on scroll events. Defaults to true to preserve previous behavior. */
    closeOnScroll?: boolean;
};
export declare function ExtendedPopover({ trigger, content, placement, position, clickOutsideToClose, margin, triggerOn, closeOn, adjustPositionToViewportSize, zIndex, scrollTarget, closeOnScroll, }: Props): import("react/jsx-runtime").JSX.Element | null;
export type ExtendedPopoverAction = "click" | "hover";
export {};
