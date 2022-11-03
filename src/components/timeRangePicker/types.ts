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
  type?: TIME_TYPE;
  onChange: (newTimeRange: Interval) => void;
};

export const enum TIME_TYPE {
  DAYS = "Days",
  HOURS = "Hours",
}

export const enum RANGE_TYPE {
  DAY = "Day",
  WEEK = "Week",
  MONTH = "Month",
  YEAR = "Year",
}
