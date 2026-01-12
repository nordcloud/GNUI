export type LoaderProps = {
    inContent?: boolean;
    isBackground?: boolean;
    position?: "bottom-center" | "bottom-left" | "bottom-right" | "top-left" | "top-right";
};
export declare function Loader({ inContent, isBackground, ...props }: LoaderProps): import("react/jsx-runtime").JSX.Element;
