import { TimeRangeOption, RANGE_TYPE } from "../types";

export const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const DEFAULT_RANGE_TYPES = [
  RANGE_TYPE.DAY,
  RANGE_TYPE.WEEK,
  RANGE_TYPE.MONTH,
  RANGE_TYPE.YEAR,
] as const;

export const DEFAULT_TIME_RANGE_OPTIONS: TimeRangeOption[] = [
  {
    id: "0",
    start: "00:00",
    end: "06:00",
    count: 0,
  },
  {
    id: "1",
    start: "06:00",
    end: "12:00",
    count: 0,
  },
  {
    id: "2",
    start: "12:00",
    end: "18:00",
    count: 0,
  },
  {
    id: "3",
    start: "18:00",
    end: "23:59",
    count: 0,
  },
];

export const DEFAULT_DAILY_COUNTS: number[] = [
  ...new Array(DEFAULT_TIME_RANGE_OPTIONS.length).keys(),
].map(() => 0);
