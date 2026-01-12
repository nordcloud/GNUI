import * as React from "react";
import { SpaceProps } from "styled-system";
type AccordionProps = {
    children: React.ReactNode;
};
type AccordionHeaderProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
    small?: boolean;
};
type AccordionItemProps = {
    children: React.ReactNode;
};
type HeaderIconProps = {
    animate?: boolean;
    cursor?: string;
};
export declare const HeaderIcon: import("styled-components").StyledComponent<"div", any, HeaderIconProps, never>;
export declare function AccordionItem({ children, ...props }: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
export declare function AccordionHeader({ title, description, children, small, }: AccordionHeaderProps): import("react/jsx-runtime").JSX.Element;
export declare function Accordion({ children, ...props }: AccordionProps & SpaceProps): import("react/jsx-runtime").JSX.Element;
export {};
