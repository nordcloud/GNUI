import { DatesPickerProps, DailyCount } from "../types";
type Props = DatesPickerProps & {
    weekCounts?: DailyCount[];
    countsLoading?: boolean;
    onWeekChange?: (monday: Date) => void;
};
export declare function DateHourPicker({ initTimeRange, weekCounts, countsLoading, disabledDays, onChange, onWeekChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
