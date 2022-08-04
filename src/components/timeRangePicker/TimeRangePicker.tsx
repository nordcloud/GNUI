import { useState, useRef, useEffect, ReactNode } from "react";
import { Calendar } from "react-date-range";
import {
  Interval,
  isSameDay,
  isMonday,
  previousMonday,
  nextMonday,
} from "date-fns";
import { useClickOutside } from "../../hooks";
import { Button } from "../button";
import { SelectButton } from "../selectbutton";
import { Datepicker } from "../datepicker";
import { Label } from "../input";
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
  const [selectedDate, setSelectedDate] = useState<Date>(
    getInitSelectedDate(initTimeRange)
  );
  const [selectedTimeRange, setSelectedTimeRange] = useState(
    DEFAULT_TIME_RANGE_OPTIONS[0]
  );
  const [dateOptions, setDateOptions] = useState<DateOption[]>(
    getInitDateOptions(selectedDate)
  );
  const [isCalendarActive, setIsCalendarActive] = useState(false);

  const showCustomTimeRange = selectedTimeRange.id === "custom";

  const calendarWrapper = useRef<HTMLDivElement>(null);

  useClickOutside(calendarWrapper, isCalendarActive, () => {
    setIsCalendarActive(false);
  });

  // Update dateOptions when Monday of the selectedDate is changed
  useEffect(() => {
    setDateOptions(() => getDateOptions(getMonday(selectedDate)));
  }, [getMonday(selectedDate).toLocaleDateString()]); // eslint-disable-line

  // Submit timeRange change when selectedDate changed,
  useEffect(() => {
    submit();
  }, [selectedDate]); // eslint-disable-line

  // Submit timeRange change when selectedTimeRange changed,
  // except for custom timeRange change, which will be handled separately
  useEffect(() => {
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
    } else if (direction === "forward") {
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
        <DatepickerContainer>
          <IconButton
            onClick={() => setIsCalendarActive((prev) => !prev)}
            severity="medium"
            icon="eventList"
          />
          <div ref={calendarWrapper}>
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
          </div>
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
            name="appt"
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
            name="appt"
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
  const result = new Date(date);

  if (isMonday(result)) return result;
  else return previousMonday(result);
};

const getInitSelectedDate = (initRange: Interval): Date => {
  let initDate: Date;

  if (isSameDay(initRange.start, initRange.end)) {
    initDate = new Date(initRange.start);
  } else {
    initDate = new Date();
  }

  return initDate;
};

const getDateOptions = (monday: Date): DateOption[] => {
  let result: DateOption[] = [];
  let current = new Date(monday.getTime());

  WEEKDAYS.forEach((weekday) => {
    result.push({
      id: current.toDateString(),
      weekday: weekday,
      day: current.getDate(),
      month: current.getMonth() + 1,
      year: current.getFullYear(),
    });

    current.setDate(current.getDate() + 1);
  });

  return result;
};

const getInitDateOptions = (selectedDate: Date): DateOption[] => {
  return getDateOptions(getMonday(selectedDate));
};

const getLabelContent = (dateOption: DateOption): ReactNode => {
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
