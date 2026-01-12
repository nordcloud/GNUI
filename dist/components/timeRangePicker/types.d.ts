export type DateOption = {
    id: string;
    weekday: string;
    day: number;
    month: number;
    year: number;
    counts?: number[];
};
export type TimeRangeOption = {
    id: string;
    start: string;
    end: string;
    count: number;
};
export declare const enum RANGE_TYPE {
    DAY = "Day",
    WEEK = "Week",
    MONTH = "Month",
    YEAR = "Year"
}
