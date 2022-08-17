import * as React from "react";
import {
  Interval,
  isSameDay,
  isMonday,
  previousMonday,
  nextMonday,
  addDays,
} from "date-fns";
import { Calendar } from "react-date-range";
import { useClickOutside } from "../../hooks";
import { Button } from "../button";
import { Datepicker } from "../datepicker";
import { Label } from "../input";
import { SelectButton } from "../selectbutton";
import {
  Row,
  UnifiedMultipleSelect,
  IconButton,
  DatepickerContainer,
  CustomTimeRangeSelector,
} from "./styles";
import { DateOption, TimeRangeOption, TimeRangePickerProps } from "./types";

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DEFAULT_TIME_RANGE_OPTIONS: TimeRangeOption[] = [
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

const DEFAULT_TIME_RANGE: Interval = {
  start: new Date(),
  end: new Date(),
};

export function TimeRangePicker({
  initTimeRange = DEFAULT_TIME_RANGE,
  onChange,
}: TimeRangePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    getInitSelectedDate(initTimeRange)
  );
  const [selectedTimeRange, setSelectedTimeRange] = React.useState(
    DEFAULT_TIME_RANGE_OPTIONS[0]
  );
  const [dateOptions, setDateOptions] = React.useState<DateOption[]>(
    getInitDateOptions(selectedDate)
  );
  const [isCalendarActive, setIsCalendarActive] = React.useState(false);

  const showCustomTimeRange = selectedTimeRange.id === "custom";

  const calendarWrapper = React.useRef<HTMLDivElement>(null);

  useClickOutside(calendarWrapper, isCalendarActive, () => {
    setIsCalendarActive(false);
  });

  // Update dateOptions when Monday of the selectedDate is changed
  React.useEffect(() => {
    setDateOptions(() => getDateOptions(getMonday(selectedDate)));
  }, [getMonday(selectedDate).toLocaleDateString()]); // eslint-disable-line

  // Submit timeRange change when selectedDate changed,
  React.useEffect(() => {
    submit();
  }, [selectedDate.toLocaleDateString()]); // eslint-disable-line

  // Submit timeRange change when selectedTimeRange changed,
  // except for custom timeRange change, which will be handled separately
  React.useEffect(() => {
    if (selectedTimeRange.id !== "custom") {
      submit();
    }
  }, [selectedTimeRange]); // eslint-disable-line

  // Function to update dateOptions when arrows are clicked
  const updateDateOptions = (direction: string) => {
    if (direction === "backward") {
      setDateOptions((prev) => {
        return getDateOptions(previousMonday(new Date(prev[0].id)));
      });
    }

    if (direction === "forward") {
      setDateOptions((prev) => {
        return getDateOptions(nextMonday(new Date(prev[0].id)));
      });
    }
  };

  const handleDateSelection = (newSelectDate: Date) => {
    if (!isSameDay(newSelectDate, selectedDate)) {
      setSelectedDate(newSelectDate);
    }
  };

  const submit = () => {
    const timeStart = getDateWithTime(selectedDate, selectedTimeRange.start);
    const timeEnd = getDateWithTime(selectedDate, selectedTimeRange.end);
    onChange({ start: timeStart, end: timeEnd });
  };

  return (
    <>
      <Row className="date-picker">
        <IconButton
          onClick={() => updateDateOptions("backward")}
          severity="medium"
          icon="chevronLeft"
        />
        <div className="date-options">
          <UnifiedMultipleSelect size="small">
            {dateOptions.map((dateOption) => (
              <SelectButton
                key={dateOption.id}
                name={dateOption.id}
                value={dateOption.id}
                labelText={getLabelContent(dateOption)}
                onClick={() => setSelectedDate(() => new Date(dateOption.id))}
                isActive={dateOption.id === selectedDate.toDateString()}
              />
            ))}
          </UnifiedMultipleSelect>
        </div>
        <IconButton
          onClick={() => updateDateOptions("forward")}
          severity="medium"
          icon="chevronRight"
        />
        <DatepickerContainer ref={calendarWrapper}>
          <IconButton
            onClick={() => setIsCalendarActive((prev) => !prev)}
            severity="medium"
            icon="calendar"
          />
          <Datepicker>
            {isCalendarActive && (
              <Calendar
                className="calendar-panel"
                date={selectedDate}
                weekStartsOn={1}
                onChange={(date) => handleDateSelection(date)}
              />
            )}
          </Datepicker>
        </DatepickerContainer>
      </Row>
      <Row className="time-range-picker">
        <Label name="Hours:" />
        <UnifiedMultipleSelect size="small">
          {DEFAULT_TIME_RANGE_OPTIONS.map((timeRangeOption) => (
            <SelectButton
              key={timeRangeOption.id}
              name={timeRangeOption.id}
              value={timeRangeOption.id}
              labelText={`${timeRangeOption.start} - ${timeRangeOption.end}`}
              onClick={() => setSelectedTimeRange(() => timeRangeOption)}
              isActive={timeRangeOption.id === selectedTimeRange.id}
            />
          ))}
          <SelectButton
            key="custom"
            name="custom"
            value="custom"
            labelText="custom"
            onClick={() =>
              setSelectedTimeRange((prev) => {
                return {
                  ...prev,
                  id: "custom",
                };
              })
            }
            isActive={selectedTimeRange.id === "custom"}
          />
        </UnifiedMultipleSelect>
        <CustomTimeRangeSelector isVisible={showCustomTimeRange}>
          <div>From</div>
          <input
            type="time"
            name="time-range-start"
            value={selectedTimeRange.start}
            onChange={(e) => {
              e.persist();
              setSelectedTimeRange((prev) => {
                return {
                  ...prev,
                  start: e.target.value,
                };
              });
            }}
          />
          <div>to</div>
          <input
            type="time"
            name="time-range-end"
            value={selectedTimeRange.end}
            min={selectedTimeRange.start}
            onChange={(e) => {
              e.persist();
              setSelectedTimeRange((prev) => {
                return {
                  ...prev,
                  end: e.target.value,
                };
              });
            }}
          />
          <Button severity="high" onClick={submit} size="sm">
            Apply
          </Button>
        </CustomTimeRangeSelector>
      </Row>
    </>
  );
}

const getMonday = (date: Date): Date => {
  const currentDate = new Date(date);

  return isMonday(currentDate) ? currentDate : previousMonday(currentDate);
};

const getInitSelectedDate = (initRange: Interval): Date => {
  return isSameDay(initRange.start, initRange.end)
    ? new Date(initRange.start)
    : new Date();
};

const getDateOptions = (monday: Date): DateOption[] => {
  const mondayTime = new Date(monday.getTime());

  return WEEKDAYS.map((weekday, index) => {
    const currentDate = addDays(new Date(mondayTime), index);

    return {
      id: currentDate.toDateString(),
      weekday: weekday,
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    };
  });
};

const getInitDateOptions = (selectedDate: Date): DateOption[] => {
  return getDateOptions(getMonday(selectedDate));
};

const getLabelContent = (dateOption: DateOption): React.ReactNode => {
  return (
    <>
      <label>{dateOption.weekday}</label>
      <div className="date-value">
        {dateOption.day}.{dateOption.month}
      </div>
    </>
  );
};

const getDateWithTime = (date: Date, time: string): Date => {
  const copiedDate = new Date(date);
  const timeNumbers = time.split(":").map((val) => parseInt(val));

  return new Date(copiedDate.setHours(timeNumbers[0], timeNumbers[1], 0));
};
