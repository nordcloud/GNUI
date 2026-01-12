import * as React from "react";
import { SpaceProps } from "styled-system";
import { SingleColors } from "../../theme/config";
import { SVGIconProps } from "../svgicon";
import { PolymorphicComponentPropWithRef } from "./typeUtils";
type ButtonPropsInner<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
    severity?: "high" | "low" | "medium";
    status?: "accent" | "danger" | "discovery" | "notification" | "success" | "warning";
    size?: "md" | "sm";
    icon?: SVGIconProps["name"];
    iconRight?: boolean;
    initialState?: string;
    /**
     * @deprecated The property should not be used
     */
    color?: SingleColors | (string & {});
    form?: string;
    select?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    linkTo?: string;
    display?: "flex" | "inline-flex";
    outline?: boolean;
    secondary?: boolean;
}> & SpaceProps;
export type ButtonProps = ButtonPropsInner<"a"> | ButtonPropsInner<"button">;
type ButtonComponent = <C extends React.ElementType = "button">(props: ButtonPropsInner<C>) => React.ReactElement | null;
export declare const Button: ButtonComponent;
export {};
