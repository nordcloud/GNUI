export type DateOption = {
  id: string; // Date.toDateString()
  weekday: string;
  day: number;
  month: number;
  year: number;
};

export type TimeRangeOption = {
  id: string;
  start: string; // format: "hour:minute"
  end: string; // format: "hour:minute"
};

export type TimeRangePickerProps = {
  initTimeRange?: Interval;
  onChange: (newTimeRange: Interval) => void;
};
