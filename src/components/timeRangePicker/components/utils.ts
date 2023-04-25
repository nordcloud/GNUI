import {
  Interval,
  isSameDay,
  isMonday,
  previousMonday,
  addDays,
  format,
  addWeeks,
  addMonths,
  addYears,
} from "date-fns";
import { RANGE_TYPE, DateOption, TimeRangeOption } from "../types";
import {
  WEEKDAYS,
  DEFAULT_TIME_RANGE_OPTIONS,
  DEFAULT_DAILY_COUNTS,
} from "./constants";
import { DailyCount } from "./types";

export const getMonday = (date: Date | number): Date => {
  const currentDate = new Date(date);
  return isMonday(currentDate) ? currentDate : previousMonday(currentDate);
};

export const getTimeRangeDate = (initRange: Interval): Date => {
  return isSameDay(initRange.start, initRange.end)
    ? new Date(initRange.start)
    : new Date();
};

export const getDateString = (date: Date): string => {
  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
  });
};

export const getDateWithTime = (date: Date, time: string): Date => {
  const copiedDate = new Date(date);
  const timeNumbers = time.split(":").map((value) => parseInt(value, 10));

  return new Date(copiedDate.setHours(timeNumbers[0], timeNumbers[1], 0));
};

export const getDateWithDays = (
  date: Date,
  rangeType: RANGE_TYPE,
  dateFormat: string
): string | undefined => {
  switch (rangeType) {
    case RANGE_TYPE.DAY:
      return format(new Date(date), dateFormat);
    case RANGE_TYPE.WEEK:
      return `${format(new Date(date), dateFormat)} - ${format(
        addWeeks(date, 1),
        dateFormat
      )}`;
    case RANGE_TYPE.MONTH:
      return `${format(new Date(date), dateFormat)} - ${format(
        addMonths(date, 1),
        dateFormat
      )}`;
    case RANGE_TYPE.YEAR:
      return `${format(new Date(date), dateFormat)} - ${format(
        addYears(date, 1),
        dateFormat
      )}`;
    default:
      return undefined;
  }
};

export const getDate = (
  selectedType: RANGE_TYPE,
  date: Date,
  number: number
): Date | undefined => {
  switch (selectedType) {
    case RANGE_TYPE.DAY:
      return addDays(date, number);
    case RANGE_TYPE.WEEK:
      return addWeeks(date, number);
    case RANGE_TYPE.MONTH:
      return addMonths(date, number);
    case RANGE_TYPE.YEAR:
      return addYears(date, number);
    default:
      return undefined;
  }
};

export const getInitSelectedTimeRange = (
  initRange: Interval
): TimeRangeOption => {
  const rangeId = Math.floor(new Date(initRange.start).getHours() / 6); // Each default time range has 6 hours time span
  return DEFAULT_TIME_RANGE_OPTIONS[rangeId];
};

export const getDateOptions = (
  monday: Date,
  weekCounts?: DailyCount[]
): DateOption[] => {
  const maxCount = Math.max(
    ...(weekCounts ?? []).flatMap(({ counts }) => counts)
  );

  return WEEKDAYS.map((weekday, index) => {
    const currentDate = addDays(monday, index);

    return {
      id: currentDate.toDateString(),
      weekday,
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
      counts: weekCounts
        ? getDailyCounts(currentDate, weekCounts).map(
            (count) => count / maxCount
          )
        : undefined,
    };
  });
};

const getDailyCounts = (date: Date, weekCounts: DailyCount[]) =>
  weekCounts.find((item) => isSameDay(item.date, date))?.counts ??
  DEFAULT_DAILY_COUNTS;
