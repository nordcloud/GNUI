import * as React from "react";
import { Box } from "../box";
export declare const TabsContent: import("styled-components").StyledComponent<typeof Box, any, {}, never>;
export declare const TabContainer: import("styled-components").StyledComponent<"div", any, {
    disabled?: boolean | undefined;
    wizard?: boolean | undefined;
    width?: string | undefined;
}, never>;
type ButtonPreviousProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
};
export declare function ButtonPrevious({ onClick, children }: ButtonPreviousProps): import("react/jsx-runtime").JSX.Element;
type ButtonNextProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
};
export declare function ButtonNext({ onClick, children }: ButtonNextProps): import("react/jsx-runtime").JSX.Element;
type TabProps = Partial<{
    className: string;
    wizard: boolean;
    step: number;
    heading: string;
    caption: string;
    activeTab: number;
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    styleActive: boolean;
    index: number;
    disabled: boolean;
    width: string;
    buttons: React.ReactNode;
    buttonsJustify: string;
    label: React.ReactNode;
}>;
export declare function Tab({ wizard, step, heading, caption, activeTab, index, width, disabled, onClick, label, }: TabProps): import("react/jsx-runtime").JSX.Element;
type TabsChild = React.ReactElement<TabProps> | boolean | null | undefined;
type TabsProps = {
    wizard?: boolean;
    name?: string;
    caption?: string;
    width?: string;
    children: (TabsChild | TabsChild[])[] | TabsChild;
    handleTab: (key: number) => void;
    step: number;
};
export declare function Tabs({ name, wizard, children, handleTab, step }: TabsProps): import("react/jsx-runtime").JSX.Element;
export declare function StyledTab({ onClick, children }: ButtonNextProps): import("react/jsx-runtime").JSX.Element;
export {};
