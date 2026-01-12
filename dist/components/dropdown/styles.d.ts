type DropdownWrapperProps = {
    value: string;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onClear?: () => void;
};
export declare const DropdownWrapper: import("styled-components").StyledComponent<(props: {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | import("react").ComponentType<any> | undefined;
    forwardedAs?: string | import("react").ComponentType<any> | undefined;
} & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, DropdownWrapperProps, never>;
export type SizeProps = {
    size?: "sm" | "xs";
};
export declare const DropdownButton: import("styled-components").StyledComponent<"button", any, SizeProps, never>;
type DropdownIconProps = {
    animate?: boolean;
};
export declare const DropdownIcon: import("styled-components").StyledComponent<"div", any, DropdownIconProps, never>;
type DropdownMenuProps = {
    onClick?: () => void;
};
export declare const DropdownMenu: import("styled-components").StyledComponent<(props: {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | import("react").ComponentType<any> | undefined;
    forwardedAs?: string | import("react").ComponentType<any> | undefined;
} & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, DropdownMenuProps, never>;
export declare const Inner: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Clear: import("styled-components").StyledComponent<"span", any, SizeProps & {
    onClick: () => void;
}, never>;
export declare const DropdownItem: import("styled-components").StyledComponent<"button", any, SizeProps, never>;
export {};
