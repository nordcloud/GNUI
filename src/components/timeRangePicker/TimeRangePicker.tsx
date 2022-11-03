import * as React from "react";
import {
  Interval,
  isSameDay,
  isMonday,
  previousMonday,
  nextMonday,
  addDays,
  format,
  addWeeks,
  addMonths,
  addYears,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import { useClickOutside, useDisclosure } from "../../hooks";
import theme from "../../theme";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { Datepicker } from "../datepicker";
import { Label } from "../input";
import { SelectButton } from "../selectbutton";
import { Text } from "../text";
import {
  Row,
  UnifiedMultipleSelect,
  IconButton,
  DatepickerContainer,
  CustomTimeRangeSelector,
  StyledButton,
  SelectWrap,
} from "./styles";
import {
  DateOption,
  TimeRangeOption,
  TimeRangePickerProps,
  RANGE_TYPE,
  TIME_TYPE,
} from "./types";

const dateFormat = "dd MMM yyyy";

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type RangeOptions = {
  id: string;
  label: RANGE_TYPE;
};

const DEFAULT_RANGE_OPTIONS: RangeOptions[] = [
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
  type = TIME_TYPE.HOURS,
  onChange,
}: TimeRangePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    getInitSelectedDate(initTimeRange)
  );
  const [selectedTimeRange, setSelectedTimeRange] = React.useState(
    DEFAULT_TIME_RANGE_OPTIONS[0]
  );

  const [selectedDaysRange, setSelectedDaysRange] = React.useState(
    DEFAULT_RANGE_OPTIONS[0]
  );

  const [dateOptions, setDateOptions] = React.useState<DateOption[]>(
    getInitDateOptions(selectedDate)
  );
  const {
    isOpen: isCalendarActive,
    close: closeCalendar,
    toggle: toggleCalendar,
  } = useDisclosure();

  const showCustomTimeRange = selectedTimeRange.id === "custom";

  const calendarWrapper = React.useRef<HTMLDivElement>(null);

  useClickOutside(calendarWrapper, isCalendarActive, closeCalendar);

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
  const updateDateOptions = (direction: "forward" | "backward") => {
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

  // Function to update date range when arrows are clicked
  const updateCurrentTime = (direction: "forward" | "backward") => {
    if (direction === "backward") {
      setSelectedDate((prev) => {
        return getDate(selectedDaysRange.label, prev, -1) ?? new Date();
      });
    }

    if (direction === "forward") {
      setSelectedDate((prev) => {
        return getDate(selectedDaysRange.label, prev, 1) ?? new Date();
      });
    }
  };

  const handleDateSelection = (newSelectDate?: Date) => {
    if (!isSameDay(newSelectDate ?? new Date(), selectedDate)) {
      setSelectedDate(newSelectDate ?? new Date());
    }
  };

  const submit = () => {
    const timeStart = getDateWithTime(selectedDate, selectedTimeRange.start);
    const timeEnd = getDateWithTime(selectedDate, selectedTimeRange.end);
    onChange({ start: timeStart, end: timeEnd });
  };

  if (type === TIME_TYPE.DAYS) {
    return (
      <>
        <FlexContainer alignContent="center">
          <SelectWrap>
            <UnifiedMultipleSelect size="small">
              {DEFAULT_RANGE_OPTIONS.map((timeRangeOption) => (
                <SelectButton
                  key={timeRangeOption.id}
                  name={timeRangeOption.id}
                  value={timeRangeOption.id}
                  labelText={timeRangeOption.label}
                  onClick={() => {
                    setSelectedDaysRange(timeRangeOption);
                    submit();
                  }}
                  isActive={timeRangeOption.id === selectedDaysRange.id}
                />
              ))}
            </UnifiedMultipleSelect>
          </SelectWrap>
          <Row css={{ alignItems: "center" }}>
            <StyledButton
              onClick={() => updateCurrentTime("backward")}
              icon="chevronLeft"
            />
            <div className="date-options">
              <DatepickerContainer ref={calendarWrapper}>
                <StyledButton onClick={toggleCalendar}>
                  <Text size="sm" tag="span" color={theme.color.text.text04}>
                    {getDateWithDays(selectedDate, selectedDaysRange.label)}
                  </Text>
                </StyledButton>
                <Datepicker className="daypicker-panel">
                  {isCalendarActive && (
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={(selectedDay?: Date) =>
                        handleDateSelection(selectedDay)
                      }
                    />
                  )}
                </Datepicker>
              </DatepickerContainer>
            </div>
            <StyledButton
              onClick={() => updateCurrentTime("forward")}
              icon="chevronRight"
            />
          </Row>
        </FlexContainer>
      </>
    );
  }
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
            onClick={toggleCalendar}
            severity="medium"
            icon="calendar"
          />
          <Datepicker className="daypicker-panel">
            {isCalendarActive && (
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(selectedDay?: Date) =>
                  handleDateSelection(selectedDay)
                }
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

const getDateWithDays = (
  date: Date,
  rangeType: RANGE_TYPE
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

const getDate = (
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
