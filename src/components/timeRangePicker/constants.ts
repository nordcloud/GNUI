import { RangeOptions, TimeRangeOption, RANGE_TYPE } from "./types";

export const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const DEFAULT_RANGE_OPTIONS: RangeOptions[] = [
  {
    id: "0",
    label: RANGE_TYPE.DAY,
  },
  {
    id: "1",
    label: RANGE_TYPE.WEEK,
  },
  {
    id: "2",
    label: RANGE_TYPE.MONTH,
  },
  {
    id: "3",
    label: RANGE_TYPE.YEAR,
  },
];

export const DEFAULT_TIME_RANGE_OPTIONS: TimeRangeOption[] = [
  {
    id: "0",
    start: "00:00",
    end: "06:00",
  },
  {
    id: "1",
    start: "06:00",
    end: "12:00",
  },
  {
    id: "2",
    start: "12:00",
    end: "18:00",
  },
  {
    id: "3",
    start: "18:00",
    end: "23:59",
  },
];

export const DEFAULT_TIME_RANGE: Interval = {
  start: new Date(),
  end: new Date(),
};

export const DEFAULT_DAILY_COUNTS: number[] = [0, 0, 0, 0];
