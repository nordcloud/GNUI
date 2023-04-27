import { Matcher } from "react-day-picker";

export type DailyCount = {
  date: Date;
  counts: [number, number, number, number];
};

export type DatesPickerProps = {
  initTimeRange: Interval;
  disabledDays?: Matcher[];
  onChange: (newTimeRange: Interval) => void;
};
