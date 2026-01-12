export type Placement = "bottom" | "left" | "right" | "top";
export type Position = "center" | "end" | "start";
export type Display = "inline-block" | "inline-grid";
export type Margin = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};
type ViewportDimensions = {
    width: number;
    height: number;
};
type StyleProps = {
    wrapperDimensions: DOMRect | null;
    tooltipDimensions: DOMRect | null;
    viewportDimensions: ViewportDimensions;
    placement: Placement;
    position: Position;
    margin?: Margin;
    adjustPositionToViewportSize?: boolean;
};
export declare function getStyle({ wrapperDimensions, tooltipDimensions, viewportDimensions, placement, position, margin, adjustPositionToViewportSize, }: StyleProps): {
    top: number;
    left: number;
} | {
    top?: undefined;
    left?: undefined;
};
export declare function getViewportDimensions(): {
    width: number;
    height: number;
};
export declare const DEFAULT_MARGIN: {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export declare const PaddingWrapper: import("styled-components").StyledComponent<"div", any, Margin & {
    placement: Placement;
}, never>;
export declare const OUTSIDE_VIEWPORT_STYLE: {
    top: number;
    left: number;
};
export {};
