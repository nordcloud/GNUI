type IBarValue = {
    color: string;
    value: number;
};
type IBarValues = {
    values: IBarValue[];
};
type IStyledBarProps = {
    height?: string;
};
type BarProps = IBarValues & IStyledBarProps;
export declare function BarChart({ values, ...visualProps }: BarProps): import("react/jsx-runtime").JSX.Element;
export {};
