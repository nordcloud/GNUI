import * as React from "react";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";
import { PathName } from "./paths";
type AnyString = Record<never, never> & string;
type SvgColor = AnyString | SingleColors;
export type SVGIconProps = React.HTMLAttributes<HTMLOrSVGElement> & {
    name: PathName;
    color?: SvgColor;
    size?: keyof typeof theme.iconSize;
};
export declare function SVGIcon({ name, ...props }: SVGIconProps): import("react/jsx-runtime").JSX.Element;
export {};
