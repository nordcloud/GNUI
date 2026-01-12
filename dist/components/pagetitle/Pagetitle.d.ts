import { BreadcrumbsList } from "../breadcrumbs";
type PageTitleProps = {
    title: string;
};
type PageTitleBreadcrumbsProps = {
    title: string;
    list: BreadcrumbsList[];
};
export declare function PageTitle({ title }: PageTitleProps): import("react/jsx-runtime").JSX.Element;
export declare function PageTitleBreadcrumbs({ title, list, }: PageTitleBreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
export {};
