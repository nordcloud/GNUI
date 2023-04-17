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
import { RANGE_TYPE } from "./types";

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
  if (rangeType === RANGE_TYPE.WEEK) {
    return `${format(new Date(date), dateFormat)} - ${format(
      addWeeks(date, 1),
      dateFormat
    )}`;
  }

  if (rangeType === RANGE_TYPE.MONTH) {
    return `${format(new Date(date), dateFormat)} - ${format(
      addMonths(date, 1),
      dateFormat
    )}`;
  }

  if (rangeType === RANGE_TYPE.YEAR) {
    return `${format(new Date(date), dateFormat)} - ${format(
      addYears(date, 1),
      dateFormat
    )}`;
  }

  if (rangeType === RANGE_TYPE.DAY) {
    return format(new Date(date), dateFormat);
  }
};

export const getDate = (
  selectedType: string,
  date: Date,
  number: number
): Date | undefined => {
  if (selectedType === RANGE_TYPE.DAY) {
    return addDays(date, number);
  }

  if (selectedType === RANGE_TYPE.WEEK) {
    return addWeeks(date, number);
  }

  if (selectedType === RANGE_TYPE.MONTH) {
    return addMonths(date, number);
  }

  if (selectedType === RANGE_TYPE.YEAR) {
    return addYears(date, number);
  }
};
