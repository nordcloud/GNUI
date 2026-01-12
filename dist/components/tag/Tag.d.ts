import { SingleColors, ThemeColors } from "../../theme/config";
import { SVGIconProps } from "../svgicon";
type TagProps = {
    color?: SingleColors | ThemeColors | (string & {});
    colorText?: SingleColors;
    text?: string;
    icon?: SVGIconProps["name"];
    onClick?: () => void;
    onCloseClick?: () => void;
    showClose?: boolean;
    isTransparent?: boolean;
};
export declare const StyledTag: import("styled-components").StyledComponent<"div", any, TagProps, never>;
export declare function Tag({ color, colorText, text, icon, onClick, showClose, isTransparent, onCloseClick, ...props }: TagProps): import("react/jsx-runtime").JSX.Element;
export {};
