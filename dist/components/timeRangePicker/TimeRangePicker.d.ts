import { ComponentProps } from "react";
import { DateHourPicker } from "./components";
type Props = Omit<ComponentProps<typeof DateHourPicker>, "initTimeRange"> & {
    initTimeRange?: Interval;
    type?: "Days" | "Hours";
};
export declare function TimeRangePicker({ initTimeRange, type, weekCounts, countsLoading, disabledDays, onChange, onWeekChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
