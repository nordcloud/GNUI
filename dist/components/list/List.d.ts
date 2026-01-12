import { SpaceProps } from "styled-system";
type StyledListProps = {
    horizontal?: boolean;
    unordered?: boolean;
    hasDescription?: boolean;
    spacing?: string;
};
type INestedListItem = StyledListProps & {
    description?: number | string;
    title: number | string;
    rowChildren?: IListItem[];
};
type IListItem = (number | string)[] | INestedListItem;
type IListProps = StyledListProps & {
    items?: IListItem[];
};
export declare function List(props: IListProps & SpaceProps): import("react/jsx-runtime").JSX.Element;
export {};
