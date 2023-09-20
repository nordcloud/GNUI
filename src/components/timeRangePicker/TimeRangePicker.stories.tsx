import { previousMonday, addDays } from "date-fns";
import { Spacer } from "../spacer";
import { TimeRangePicker } from ".";

export default {
  title: "Forms/TimeRangePicker",
  component: TimeRangePicker,
};

export const TimerangepickerOfDays = {
  render: () => {
    const initValue = {
      start: new Date(),
      end: new Date(),
    };

    const [value, setValue] = React.useState(initValue);

    return (
      <>
        <TimeRangePicker
          type="Days"
          initTimeRange={initValue}
          onChange={setValue}
        />
        <Spacer height="20rem" />
        <div id="result-days">Current Value:{JSON.stringify(value)}</div>
      </>
    );
  },

  name: "timerangepicker of days",
};

export const TimerangepickerOfHours = {
  render: () => {
    const [value, setValue] = React.useState();

    return (
      <>
        <TimeRangePicker onChange={setValue} />
        <Spacer height="20rem" />
        <div id="result-hours">Current Value:{JSON.stringify(value)}</div>
      </>
    );
  },

  name: "timerangepicker of hours ",
};

export const TimerangepickerOfHoursWithHistogram = {
  render: () => {
    const [value, setValue] = React.useState();
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
  },

  name: "timerangepicker of hours with histogram",
};
