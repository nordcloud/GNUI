import { Matcher } from "react-day-picker";

export type DailyCount = {
  date: Date;
  counts: number[];
};

export type DatesPickerProps = {
  initTimeRange: Interval;
  disabledDays?: Matcher[];
  onChange: (newTimeRange: Interval) => void;
};

export type DateHourPickerProps = DatesPickerProps & {
  weekCounts?: DailyCount[];
  countsLoading?: boolean;
  onWeekChange?: (monday: Date) => void;
};
