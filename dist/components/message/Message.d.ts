import * as React from "react";
import { SVGIconProps } from "../svgicon";
export type MessageProps = React.HTMLProps<HTMLDivElement> & {
    image?: SVGIconProps["name"];
    status?: "danger" | "discovery" | "notification" | "success" | "warning";
    borderColor?: string;
    background?: string;
    color?: string;
    as?: React.ElementType | keyof JSX.IntrinsicElements;
    expandable?: boolean;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    expandedContent?: React.ReactNode;
    expandIcon?: SVGIconProps["name"];
    collapseIcon?: SVGIconProps["name"];
    onToggle?: (expanded: boolean) => void;
};
export declare const MessageWrapper: import("styled-components").StyledComponent<"div", any, Pick<MessageProps, "status" | "background" | "borderColor" | "color"> & {
    $isExpandableHeader?: boolean | undefined;
    $isExpandedWithContent?: boolean | undefined;
}, never>;
export declare const IconBox: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Align: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare function Message({ children, image, status, borderColor, background, color, as, expandable, defaultExpanded, expanded, onExpandedChange, expandedContent, expandIcon, collapseIcon, onToggle, ...restProps }: MessageProps): import("react/jsx-runtime").JSX.Element;
