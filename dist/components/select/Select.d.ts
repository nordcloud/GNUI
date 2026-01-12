import * as React from "react";
import { type SelectInstance, type GroupBase, type StylesConfig } from "react-select";
export type SelectOption = {
    value: string;
    label: string;
    isFixed?: boolean;
    isDisabled?: boolean;
};
export type SelectColoredOption = SelectOption & {
    color: string;
    isError?: boolean;
};
export declare const customMultiColorStyles: StylesConfig<SelectColoredOption, true>;
declare module "react" {
    function forwardRef<T, P = Record<string, unknown>>(render: (props: P, ref: React.Ref<T>) => React.ReactElement | null): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
export declare const Select: <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: Omit<import("react-select/dist/declarations/src/Select").PublicBaseSelectProps<Option, IsMulti, Group>, "onChange" | "value" | "inputValue" | "menuIsOpen" | "onInputChange" | "onMenuOpen" | "onMenuClose"> & Partial<import("react-select/dist/declarations/src/Select").PublicBaseSelectProps<Option, IsMulti, Group>> & import("react-select/dist/declarations/src/useStateManager").StateManagerAdditionalProps<Option> & {
    isError?: boolean | undefined;
} & React.RefAttributes<SelectInstance<Option, IsMulti, Group>>) => React.ReactElement | null;
export type { SelectInstance } from "react-select";
