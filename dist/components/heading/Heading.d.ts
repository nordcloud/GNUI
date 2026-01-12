import * as React from "react";
import { SpaceProps } from "styled-system";
import theme from "../../theme";
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingProps = {
    children: React.ReactNode;
    level: HeadingLevel;
    color?: string;
    marginBottom?: keyof typeof theme.spacing;
    as?: React.ElementType | keyof JSX.IntrinsicElements;
};
export declare function Heading({ children, level, ...props }: HeadingProps & SpaceProps): import("react/jsx-runtime").JSX.Element;
export {};
