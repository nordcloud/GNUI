import * as React from "react";
import {
  Interval,
  isSameDay,
  previousMonday,
  nextMonday,
  addDays,
} from "date-fns";
import { DayPicker, DateRange, isMatch } from "react-day-picker";
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
  DEFAULT_RANGE_TYPES,
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
  RANGE_TYPE,
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
  disabledDays,
  onChange,
  onWeekChange,
}: TimeRangePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    getTimeRangeDate(initTimeRange)
  );
  // States for "Hours" type
  const [dateOptions, setDateOptions] = React.useState<DateOption[]>(
    getDateOptions(getMonday(initTimeRange.start))
  );
  const [timeRangeOptions, setTimeRangeOptions] = React.useState(
    DEFAULT_TIME_RANGE_OPTIONS
  );
  const [selectedTimeRange, setSelectedTimeRange] = React.useState(
    getInitSelectedTimeRange(initTimeRange)
  );
  // States for "Days" type
  const [selectedDateRange, setSelectedDateRange] = React.useState<
    DateRange | undefined
  >({ from: new Date() });
  const [selectedRangeType, setSelectedRangeType] = React.useState(
    DEFAULT_RANGE_TYPES[0]
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

  // Submit timeRange change when selectedTimeRange changed,
  // except for custom timeRange change, which will be handled separately
  React.useEffect(() => {
    if (selectedTimeRange.id !== "custom") {
      submitDateHour(selectedDate, selectedTimeRange);
    }
  }, [selectedTimeRange]); // eslint-disable-line react-hooks/exhaustive-deps

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
    const newSelectedDate =
      getDate(
        selectedRangeType,
        selectedDate,
        direction === "forward" ? 1 : -1
      ) ?? new Date();

    setSelectedDate(newSelectedDate);
    updateDateRange(newSelectedDate, selectedRangeType);
  };

  const handleRangeTypeSelection = (rangeType: RANGE_TYPE) => {
    setSelectedRangeType(rangeType);
    updateDateRange(selectedDate, rangeType);
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
        submitDateHour(newSelectDate, selectedTimeRange);
      } else {
        updateDateRange(newSelectDate, selectedRangeType);
      }
    }
  };

  const updateDateRange = (date: Date, rangeType: RANGE_TYPE) => {
    const newRange = {
      from: date,
      to:
        rangeType === RANGE_TYPE.DAY ? undefined : getDate(rangeType, date, 1),
    };
    setSelectedDateRange(newRange);
    // dateRange.to undefined when range type is day
    onChange({ start: newRange.from, end: newRange.to ?? newRange.from });
  };

  const submitDateHour = (date: Date, timeRange: TimeRangeOption) => {
    const timeStart = getDateWithTime(date, timeRange.start);
    const timeEnd = getDateWithTime(date, timeRange.end);
    onChange({ start: timeStart, end: timeEnd });
  };

  if (type === "Days") {
    return (
      <FlexContainer alignContent="center">
        <SelectWrap>
          <UnifiedMultipleSelect size="small">
            {DEFAULT_RANGE_TYPES.map((rangeType) => (
              <SelectButton
                key={rangeType}
                name={rangeType}
                value={rangeType}
                labelText={rangeType}
                isActive={rangeType === selectedRangeType}
                onClick={() => handleRangeTypeSelection(rangeType)}
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
                  {getDateWithDays(selectedDate, selectedRangeType, dateFormat)}
                </Text>
              </StyledButton>
              <Datepicker className="daypicker-panel">
                {isCalendarActive && (
                  <DayPicker
                    mode="range"
                    selected={selectedDateRange}
                    defaultMonth={selectedDate}
                    disabled={disabledDays}
                    onSelect={(
                      _: DateRange | undefined,
                      newSelectedDate: Date
                    ) => handleDateSelection(newSelectedDate)}
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
            {dateOptions.map((dateOption) => {
              const date = new Date(dateOption.id);
              return (
                <SelectButton
                  key={dateOption.id}
                  name={dateOption.id}
                  value={dateOption.id}
                  isActive={dateOption.id === selectedDate.toDateString()}
                  disabled={isMatch(date, disabledDays ?? []) || countsLoading}
                  labelText={
                    <DateOptionLabel
                      dateOption={dateOption}
                      loading={countsLoading}
                    />
                  }
                  onClick={() => handleDateSelection(date)}
                />
              );
            })}
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
                defaultMonth={selectedDate}
                disabled={disabledDays}
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
                setSelectedTimeRange(timeRangeOption);
                submitDateHour(selectedDate, timeRangeOption);
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
            onChange={(error) => {
              error.persist();
              setSelectedTimeRange((prev) => ({
                ...prev,
                start: error.target.value,
              }));
            }}
          />
          <div>to</div>
          <input
            type="time"
            name="time-range-end"
            value={selectedTimeRange.end}
            min={selectedTimeRange.start}
            onChange={(error) => {
              error.persist();
              setSelectedTimeRange((prev) => ({
                ...prev,
                end: error.target.value,
              }));
            }}
          />
          <Button
            severity="high"
            size="sm"
            onClick={() => submitDateHour(selectedDate, selectedTimeRange)}
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
