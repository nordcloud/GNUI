import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { addDays, previousMonday } from "date-fns";
import { Spacer } from "../spacer";
import { TimeRangePicker } from "./TimeRangePicker";

const meta: Meta<typeof TimeRangePicker> = {
  title: "Forms/TimeRangePicker",
  component: TimeRangePicker,
};

export default meta;

type TimeRangeValue = {
  start: Date | number;
  end: Date | number;
};

function TimerangepickerOfDaysComponent() {
  const initValue = {
    start: new Date(),
    end: new Date(),
  };

  const [value, setValue] = useState<TimeRangeValue>(initValue);

  return (
    <>
      <TimeRangePicker
        type="Days"
        initTimeRange={initValue}
        onChange={(newValue) => setValue(newValue)}
      />
      <Spacer height="20rem" />
      <div id="result-days">Current Value:{JSON.stringify(value)}</div>
    </>
  );
}

export const TimerangepickerOfDays: StoryObj<typeof TimeRangePicker> = {
  render: () => <TimerangepickerOfDaysComponent />,
  name: "timerangepicker of days",
};

function TimerangepickerOfHoursComponent() {
  const [value, setValue] = useState<TimeRangeValue>();

  return (
    <>
      <TimeRangePicker onChange={setValue} />
      <Spacer height="20rem" />
      <div id="result-hours">Current Value:{JSON.stringify(value)}</div>
    </>
  );
}

export const TimerangepickerOfHours: StoryObj<typeof TimeRangePicker> = {
  render: () => <TimerangepickerOfHoursComponent />,
  name: "timerangepicker of hours ",
};

function TimerangepickerOfHoursWithKeepSelectedWeekdayComponent() {
  const [value, setValue] = useState<TimeRangeValue>();

  return (
    <>
      <TimeRangePicker keepSelectedWeekday onChange={setValue} />
      <Spacer height="20rem" />
      <div id="result-hours">Current Value:{JSON.stringify(value)}</div>
    </>
  );
}

export const TimerangepickerOfHoursWithKeepSelectedWeekday: StoryObj<
  typeof TimeRangePicker
> = {
  render: () => <TimerangepickerOfHoursWithKeepSelectedWeekdayComponent />,
  name: "timerangepicker of hours with preserved day",
};

function TimerangepickerOfHoursWithHistogramComponent() {
  const [value, setValue] = useState<TimeRangeValue>();
  const monday = previousMonday(new Date());

  return (
    <>
      <TimeRangePicker
        weekCounts={[
          {
            date: monday,
            counts: [1, 2, 3, 4],
          },
          {
            date: addDays(monday, 1),
            counts: [0, 2, 3, 4],
          },
          {
            date: addDays(monday, 2),
            counts: [1, 0, 3, 4],
          },
          {
            date: addDays(monday, 3),
            counts: [1, 2, 0, 4],
          },
          {
            date: addDays(monday, 4),
            counts: [1, 2, 3, 0],
          },
          {
            date: addDays(monday, 5),
            counts: [0, 0, 0, 0],
          },
          {
            date: addDays(monday, 6),
            counts: [0, 0, 0, 0],
          },
        ]}
        onChange={setValue}
      />
      <Spacer height="20rem" />
      <div id="result-hours-with-histogram">
        Current Value:{JSON.stringify(value)}
      </div>
    </>
  );
}

export const TimerangepickerOfHoursWithHistogram: StoryObj<
  typeof TimeRangePicker
> = {
  render: () => <TimerangepickerOfHoursWithHistogramComponent />,
  name: "timerangepicker of hours with histogram",
};
