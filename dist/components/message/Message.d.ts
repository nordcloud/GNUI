import * as React from "react";
import { SVGIconProps } from "../svgicon";
export type MessageProps = React.HTMLProps<HTMLDivElement> & {
    image?: SVGIconProps["name"];
    status?: "danger" | "discovery" | "notification" | "success" | "warning";
    borderColor?: string;
    background?: string;
    color?: string;
    as?: React.ElementType | keyof JSX.IntrinsicElements;
};
type MessageWrapperProps = Omit<MessageProps, "children" | "image">;
export declare const MessageWrapper: import("styled-components").StyledComponent<"div", any, MessageWrapperProps, never>;
export declare const IconBox: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Align: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare function Message({ children, image, ...props }: MessageProps): import("react/jsx-runtime").JSX.Element;
export {};
