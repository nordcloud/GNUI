import * as React from "react";
import {
  Interval,
  isSameDay,
  previousMonday,
  nextMonday,
  addDays,
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
import { DateOptionLabel, TimeRangeLabel } from "./components";
import {
  WEEKDAYS,
  DEFAULT_RANGE_OPTIONS,
  DEFAULT_TIME_RANGE_OPTIONS,
  DEFAULT_TIME_RANGE,
  DEFAULT_DAILY_COUNTS,
} from "./constants";
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
  DailyCount,
} from "./types";
import {
  getMonday,
  getTimeRangeDate,
  getDateWithDays,
  getDateWithTime,
  getDate,
} from "./utils";

const dateFormat = "dd MMM yyyy";

export function TimeRangePicker({
  initTimeRange = DEFAULT_TIME_RANGE,
  type = "Hours",
  weekCounts,
  countsLoading = false,
  onChange,
  onWeekChange,
}: TimeRangePickerProps) {
  const [dateOptions, setDateOptions] = React.useState<DateOption[]>(
    getDateOptions(getMonday(initTimeRange.start))
  );
  const [timeRangeOptions, setTimeRangeOptions] = React.useState(
    DEFAULT_TIME_RANGE_OPTIONS
  );

  const [selectedDate, setSelectedDate] = React.useState<Date>(
    getTimeRangeDate(initTimeRange)
  );
  const [selectedTimeRange, setSelectedTimeRange] = React.useState(
    getInitSelectedTimeRange(initTimeRange)
  );

  const [selectedDaysRange, setSelectedDaysRange] = React.useState(
    DEFAULT_RANGE_OPTIONS[0]
  );

  const {
    isOpen: isCalendarActive,
    close: closeCalendar,
    toggle: toggleCalendar,
  } = useDisclosure();

  const showCustomTimeRange = selectedTimeRange.id === "custom";

  const calendarWrapper = React.useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: calendarWrapper,
    active: isCalendarActive,
    onClickAway: closeCalendar,
  });

  // // Submit timeRange change when selectedTimeRange changed,
  // // except for custom timeRange change, which will be handled separately
  // React.useEffect(() => {
  //   if (selectedTimeRange.id !== "custom") {
  //     submit(selectedDate, selectedTimeRange);
  //   }
  //   // weekCounts is updated async after week change
  //   // update date options and time range options when value gets updated
  //   if (weekCounts) {
  //     setDateOptions((prev) =>
  //       getDateOptions(new Date(prev[0].id), weekCounts)
  //     );
  //     updateTimeRangeOptions(selectedDate);
  //   }
  // }, [selectedTimeRange]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    // weekCounts is updated async after week change
    // update date options and time range options when value gets updated
    if (weekCounts) {
      setDateOptions((prev) =>
        getDateOptions(new Date(prev[0].id), weekCounts)
      );
      updateTimeRangeOptions(selectedDate);
    }
  }, [weekCounts]); // eslint-disable-line react-hooks/exhaustive-deps

  // Function to update dateOptions when arrows are clicked
  const updateDateOptions = (direction: "backward" | "forward") => {
    const currentMonday = new Date(dateOptions[0].id);
    const newMonday =
      direction === "backward"
        ? previousMonday(currentMonday)
        : nextMonday(currentMonday);

    setDateOptions(getDateOptions(newMonday));
    updateTimeRangeOptions(selectedDate);

    if (onWeekChange) {
      onWeekChange(newMonday);
    }
  };

  // Function to update time range options
  const updateTimeRangeOptions = (date: Date) => {
    if (weekCounts === undefined) {
      return;
    }

    const dayCounts = weekCounts.find((item) =>
      isSameDay(item.date, date)
    )?.counts;

    if (dayCounts) {
      setTimeRangeOptions(
        DEFAULT_TIME_RANGE_OPTIONS.map((item, index) => ({
          ...item,
          count: dayCounts[index],
        }))
      );
    } else {
      // when selected date is not in currently showing week,
      // reset time range options
      setTimeRangeOptions(DEFAULT_TIME_RANGE_OPTIONS);
    }
  };

  // Function to update date range when arrows are clicked
  const updateCurrentTime = (direction: "backward" | "forward") => {
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
    if (newSelectDate === undefined) {
      return;
    }

    if (!isSameDay(newSelectDate, selectedDate)) {
      setSelectedDate(newSelectDate);

      if (type === "Hours") {
        updateTimeRangeOptions(newSelectDate);

        // Update date options when week changes
        const newMonday = getMonday(newSelectDate);
        const currentMonday = new Date(dateOptions[0].id);
        if (!isSameDay(newMonday, currentMonday)) {
          if (onWeekChange) {
            onWeekChange(newMonday);
          }
          setDateOptions(getDateOptions(newMonday));
        }
      }

      submit(newSelectDate, selectedTimeRange);
    }
  };

  const submit = (date: Date, timeRange?: TimeRangeOption) => {
    const timeStart = timeRange ? getDateWithTime(date, timeRange.start) : date;
    const timeEnd = timeRange ? getDateWithTime(date, timeRange.end) : date;
    onChange({ start: timeStart, end: timeEnd });
  };

  if (type === "Days") {
    return (
      <FlexContainer alignContent="center">
        <SelectWrap>
          <UnifiedMultipleSelect size="small">
            {DEFAULT_RANGE_OPTIONS.map((timeRangeOption) => (
              <SelectButton
                key={timeRangeOption.id}
                name={timeRangeOption.id}
                value={timeRangeOption.id}
                labelText={timeRangeOption.label}
                isActive={timeRangeOption.id === selectedDaysRange.id}
                onClick={() => {
                  setSelectedDaysRange(timeRangeOption);
                  submit(selectedDate);
                }}
              />
            ))}
          </UnifiedMultipleSelect>
        </SelectWrap>
        <Row css={{ alignItems: "center" }}>
          <StyledButton
            icon="chevronLeft"
            onClick={() => updateCurrentTime("backward")}
          />
          <div className="date-options">
            <DatepickerContainer ref={calendarWrapper}>
              <StyledButton onClick={toggleCalendar}>
                <Text size="sm" tag="span" color={theme.color.text.text04}>
                  {getDateWithDays(
                    selectedDate,
                    selectedDaysRange.label,
                    dateFormat
                  )}
                </Text>
              </StyledButton>
              <Datepicker className="daypicker-panel">
                {isCalendarActive && (
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(selectedDay: Date | undefined) =>
                      handleDateSelection(selectedDay)
                    }
                  />
                )}
              </Datepicker>
            </DatepickerContainer>
          </div>
          <StyledButton
            icon="chevronRight"
            onClick={() => updateCurrentTime("forward")}
          />
        </Row>
      </FlexContainer>
    );
  }
  return (
    <>
      <Row className="date-picker">
        <IconButton
          severity="medium"
          icon="chevronLeft"
          onClick={() => updateDateOptions("backward")}
        />
        <div className="date-options">
          <UnifiedMultipleSelect size="small">
            {dateOptions.map((dateOption) => (
              <SelectButton
                key={dateOption.id}
                name={dateOption.id}
                value={dateOption.id}
                isActive={dateOption.id === selectedDate.toDateString()}
                disabled={countsLoading}
                labelText={
                  <DateOptionLabel
                    dateOption={dateOption}
                    loading={countsLoading}
                  />
                }
                onClick={() => handleDateSelection(new Date(dateOption.id))}
              />
            ))}
          </UnifiedMultipleSelect>
        </div>
        <IconButton
          severity="medium"
          icon="chevronRight"
          onClick={() => updateDateOptions("forward")}
        />
        <DatepickerContainer ref={calendarWrapper}>
          <IconButton
            severity="medium"
            icon="calendar"
            onClick={toggleCalendar}
          />
          <Datepicker className="daypicker-panel">
            {isCalendarActive && (
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(selectedDay: Date | undefined) => {
                  handleDateSelection(selectedDay);
                  closeCalendar();
                }}
              />
            )}
          </Datepicker>
        </DatepickerContainer>
      </Row>
      <Row className="time-range-picker">
        <Label name="Hours:" />
        <UnifiedMultipleSelect size="small">
          {timeRangeOptions.map((timeRangeOption) => (
            <SelectButton
              key={timeRangeOption.id}
              name={timeRangeOption.id}
              value={timeRangeOption.id}
              isActive={timeRangeOption.id === selectedTimeRange.id}
              labelText={
                <TimeRangeLabel
                  timeRangeOption={timeRangeOption}
                  hasCounts={weekCounts !== undefined}
                />
              }
              onClick={() => {
                setSelectedTimeRange(() => timeRangeOption);
                submit(selectedDate, timeRangeOption);
              }}
            />
          ))}
          <SelectButton
            key="custom"
            name="custom"
            value="custom"
            labelText="custom"
            isActive={selectedTimeRange.id === "custom"}
            onClick={() =>
              setSelectedTimeRange((prev) => ({
                ...prev,
                id: "custom",
              }))
            }
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
              setSelectedTimeRange((prev) => ({
                ...prev,
                start: e.target.value,
              }));
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
              setSelectedTimeRange((prev) => ({
                ...prev,
                end: e.target.value,
              }));
            }}
          />
          <Button
            severity="high"
            size="sm"
            onClick={() => submit(selectedDate, selectedTimeRange)}
          >
            Apply
          </Button>
        </CustomTimeRangeSelector>
      </Row>
    </>
  );
}

const getInitSelectedTimeRange = (initRange: Interval): TimeRangeOption => {
  const rangeId = Math.floor(new Date(initRange.start).getHours() / 6); // Each default time range has 6 hours time span
  return DEFAULT_TIME_RANGE_OPTIONS[rangeId];
};

const getDateOptions = (
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
