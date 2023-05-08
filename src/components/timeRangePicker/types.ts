export type DateOption = {
  id: string; // Date.toDateString()
  weekday: string;
  day: number;
  month: number;
  year: number;
  counts?: number[];
};

export type TimeRangeOption = {
  id: string; // might be "custom"
  start: string; // format: "hour:minute"
  end: string; // format: "hour:minute"
  count: number;
};

export const enum RANGE_TYPE {
  DAY = "Day",
  WEEK = "Week",
  MONTH = "Month",
  YEAR = "Year",
}
