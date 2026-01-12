import { TimeRangeOption } from "../../../types";
import { DailyCount } from "../../types";
type Props = {
    timeRangeOptions: TimeRangeOption[];
    selectedTimeRange: TimeRangeOption;
    weekCounts: DailyCount[] | undefined;
    onSelect: (timeRange: TimeRangeOption, shouldSubmit?: boolean) => void;
};
export declare function HourSelector({ timeRangeOptions, selectedTimeRange, weekCounts, onSelect, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
