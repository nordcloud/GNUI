import { describe, expect, it } from "vitest";
import { DEFAULT_TIME_RANGE_OPTIONS } from "./constants";
import {
  getInitSelectedTimeRange,
  getDateHourInterval,
  getDefaultInitTimeRange,
  getTimeRangeDate,
  convertIntervalToTimeStrings,
  isSameTimeRange,
} from "./utils";

describe("getTimeRangeDate", () => {
  it("uses the start date for cross-midnight hour ranges", () => {
    const start = new Date(2024, 0, 1, 12, 0, 30, 500);

    expect(
      getTimeRangeDate(
        {
          start,
          end: new Date(2024, 0, 2, 0, 0, 0),
        },
        "Hours"
      )
    ).toStrictEqual(new Date(2024, 0, 1, 12, 0, 0, 0));
  });
});

describe("getDateHourInterval", () => {
  it("keeps start and end on the selected date", () => {
    const date = new Date(2024, 0, 1);
    const interval = getDateHourInterval(date, {
      start: "12:00",
      end: "18:00",
    });

    expect(interval.start).toStrictEqual(new Date(2024, 0, 1, 12, 0, 0));
    expect(interval.end).toStrictEqual(new Date(2024, 0, 1, 18, 0, 0));
  });
});

describe("convertIntervalToTimeStrings", () => {
  it("maps exclusive end timestamps to the inclusive minute", () => {
    expect(
      convertIntervalToTimeStrings({
        start: new Date(2024, 0, 1, 10, 0, 0),
        end: new Date(2024, 0, 1, 22, 59, 59, 999),
      })
    ).toStrictEqual({ start: "10:00", end: "23:00" });
  });

  it("keeps next-day midnight as editable 00:00", () => {
    expect(
      convertIntervalToTimeStrings({
        start: new Date(2024, 0, 1, 18, 0, 0),
        end: new Date(2024, 0, 2, 0, 0, 0),
      })
    ).toStrictEqual({ start: "18:00", end: "00:00" });
  });
});

describe("getDefaultInitTimeRange", () => {
  it("returns the hour-bucket preset interval for the current time", () => {
    const initRange = getDefaultInitTimeRange();
    const hours = new Date().getHours();
    const expectedPreset = DEFAULT_TIME_RANGE_OPTIONS[Math.floor(hours / 6)];

    expect(getInitSelectedTimeRange(initRange)).toStrictEqual(expectedPreset);
  });
});

describe("getInitSelectedTimeRange", () => {
  it("returns the matching preset when init matches a default range", () => {
    const initRange = {
      start: new Date(2024, 0, 1, 12, 0, 0),
      end: new Date(2024, 0, 1, 18, 0, 0),
    };

    expect(getInitSelectedTimeRange(initRange)).toStrictEqual(
      DEFAULT_TIME_RANGE_OPTIONS[2]
    );
  });

  it("returns a custom time range when init does not match a preset", () => {
    const initRange = {
      start: new Date(2024, 0, 1, 17, 0, 0),
      end: new Date(2024, 0, 1, 18, 0, 0),
    };

    expect(getInitSelectedTimeRange(initRange)).toStrictEqual({
      id: "custom",
      start: "17:00",
      end: "18:00",
      count: 0,
    });
  });

  it("recognizes the 18:00-24:00 preset when end is next-day midnight", () => {
    expect(
      getInitSelectedTimeRange({
        start: new Date(2024, 0, 1, 18, 0, 0),
        end: new Date(2024, 0, 2, 0, 0, 0),
      })
    ).toStrictEqual(DEFAULT_TIME_RANGE_OPTIONS[3]);
  });

  it("recognizes the 18:00-24:00 preset when end is same-day exclusive", () => {
    expect(
      getInitSelectedTimeRange({
        start: new Date(2024, 0, 1, 18, 0, 0),
        end: new Date(2024, 0, 1, 23, 59, 59, 999),
      })
    ).toStrictEqual(DEFAULT_TIME_RANGE_OPTIONS[3]);
  });

  it("keeps custom midnight when start does not match a preset", () => {
    expect(
      getInitSelectedTimeRange({
        start: new Date(2024, 0, 1, 12, 0, 0),
        end: new Date(2024, 0, 2, 0, 0, 0),
      })
    ).toStrictEqual({
      id: "custom",
      start: "12:00",
      end: "00:00",
      count: 0,
    });
  });
});

describe("isSameTimeRange", () => {
  it("compares both start and end against the selected option", () => {
    const initRange = {
      start: new Date(2024, 0, 1, 17, 0, 0),
      end: new Date(2024, 0, 1, 18, 0, 0),
    };

    expect(
      isSameTimeRange(initRange, {
        id: "custom",
        start: "17:00",
        end: "18:00",
        count: 0,
      })
    ).toBe(true);

    expect(isSameTimeRange(initRange, DEFAULT_TIME_RANGE_OPTIONS[2])).toBe(
      false
    );
  });

  it("recognizes the 18:00-24:00 preset", () => {
    expect(
      isSameTimeRange(
        {
          start: new Date(2024, 0, 1, 18, 0, 0),
          end: new Date(2024, 0, 2, 0, 0, 0),
        },
        DEFAULT_TIME_RANGE_OPTIONS[3]
      )
    ).toBe(true);
  });
});
