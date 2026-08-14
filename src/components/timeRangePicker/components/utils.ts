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
  differenceInCalendarDays,
  startOfDay,
  set,
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

export const getTimeRangeDate = (
  initRange: Interval,
  timePickerType?: "Days" | "Hours"
): Date => {
  const startDate = new Date(initRange.start);

  if (timePickerType === "Hours" || isSameDay(initRange.start, initRange.end)) {
    return new Date(startDate.setSeconds(0, 0));
  }

  return new Date();
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

export const getDateHourInterval = (
  date: Date,
  timeRange: Pick<TimeRangeOption, "end" | "start">
): Interval => {
  const timeStart = getDateWithTime(date, timeRange.start);
  const timeEnd = getDateWithTime(date, timeRange.end);

  return { start: timeStart, end: timeEnd };
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
): Date => {
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
      return date;
  }
};

export const convertIntervalToTimeStrings = (
  interval: Interval
): Pick<TimeRangeOption, "end" | "start"> => {
  let endDate = new Date(interval.end);

  // An exclusive end at the final millisecond of a minute represents the next minute.
  if (endDate.getSeconds() === 59 && endDate.getMilliseconds() === 999) {
    endDate = new Date(endDate.getTime() + 1);
  }

  return {
    start: format(new Date(interval.start), "HH:mm"),
    end: format(endDate, "HH:mm"),
  };
};

export const getInitSelectedTimeRange = (
  initRange: Interval
): TimeRangeOption => {
  const { start, end } = convertIntervalToTimeStrings(initRange);
  const matchingPreset = DEFAULT_TIME_RANGE_OPTIONS.find(
    (option) =>
      option.start === start &&
      (option.end === end || (option.end === "24:00" && end === "00:00"))
  );

  if (matchingPreset) {
    return matchingPreset;
  }

  return {
    id: "custom",
    start,
    end,
    count: 0,
  };
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

export const isSameTimeRange = (
  interval: Interval,
  timeRangeOption: TimeRangeOption
) => {
  const normalizedTimeRange = getInitSelectedTimeRange(interval);
  return (
    timeRangeOption.start === normalizedTimeRange.start &&
    timeRangeOption.end === normalizedTimeRange.end
  );
};

export const getNewSelectedDate = (
  selectedDate: Date,
  currentMonday: Date,
  newMonday: Date
) => {
  const dayOffset = differenceInCalendarDays(
    startOfDay(selectedDate),
    startOfDay(currentMonday)
  );

  const baseDate = addDays(startOfDay(newMonday), dayOffset);

  return set(baseDate, {
    hours: selectedDate.getHours(),
    minutes: selectedDate.getMinutes(),
    seconds: selectedDate.getSeconds(),
    milliseconds: selectedDate.getMilliseconds(),
  });
};
