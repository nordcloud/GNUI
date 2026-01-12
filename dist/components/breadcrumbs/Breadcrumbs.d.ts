import * as React from "react";
import { FlattenSimpleInterpolation } from "styled-components";
export type BreadcrumbsList = {
    label: string;
    uri: string;
    isDisabled?: boolean;
};
export type BreadcrumbsListProps = {
    list: BreadcrumbsList[];
    /**
     * @deprecated Might cause problems with React 18, use `renderCustom` instead
     */
    Component?: React.FC<React.PropsWithChildren<{
        to: string;
        isDisabled?: boolean;
    }>>;
    renderCustom?: (props: React.PropsWithChildren<{
        css: FlattenSimpleInterpolation;
        breadcrumb: BreadcrumbsList;
    }>) => React.ReactNode;
};
export declare function Breadcrumbs({ list, renderCustom }: BreadcrumbsListProps): import("react/jsx-runtime").JSX.Element;
