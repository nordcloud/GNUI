import { useState, useEffect, useRef } from "react";
import { isSameDay, previousMonday, nextMonday } from "date-fns";
import { DayPicker } from "react-day-picker";
import { When } from "react-if";
import { useClickOutside, useDisclosure } from "../../../../hooks";
import { Datepicker } from "../../../datepicker";
import { DateOption, TimeRangeOption } from "../../types";
import { DEFAULT_TIME_RANGE_OPTIONS } from "../constants";
import { Row, IconButton, DatepickerContainer } from "../styles";
import { DatesPickerProps, DailyCount } from "../types";
import {
  getDateOptions,
  getDateHourInterval,
  getInitSelectedTimeRange,
  getMonday,
  getTimeRangeDate,
  getNewSelectedDate,
} from "../utils";
import { DateSelector, HourSelector } from "./components";

const toCustomTimeRange = (timeRange: TimeRangeOption): TimeRangeOption => ({
  ...timeRange,
  id: "custom",
  // HTML time inputs only accept 00:00-23:59.
  end: timeRange.end === "24:00" ? "23:59" : timeRange.end,
});

type Props = DatesPickerProps & {
  weekCounts?: DailyCount[];
  countsLoading?: boolean;
  keepSelectedWeekday?: boolean;
  onWeekChange?: (monday: Date) => void;
};

export function DateHourPicker({
  initTimeRange,
  weekCounts,
  countsLoading = false,
  disabledDays,
  keepSelectedWeekday = false,
  onChange,
  onWeekChange,
}: Props) {
  const [selectedDate, setSelectedDate] = useState<Date>(
    getTimeRangeDate(initTimeRange, "Hours")
  );
  const [dateOptions, setDateOptions] = useState<DateOption[]>(
    getDateOptions(getMonday(initTimeRange.start))
  );
  const [timeRangeOptions, setTimeRangeOptions] = useState(
    DEFAULT_TIME_RANGE_OPTIONS
  );
  const initialSelectedTimeRange = getInitSelectedTimeRange(initTimeRange);
  const [selectedTimeRange, setSelectedTimeRange] = useState(
    initialSelectedTimeRange
  );
  const [lastAppliedCustomTimeRange, setLastAppliedCustomTimeRange] =
    useState<TimeRangeOption | null>(() =>
      initialSelectedTimeRange.id === "custom" ? initialSelectedTimeRange : null
    );

  useEffect(() => {
    submitDateHour(selectedDate, selectedTimeRange);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Always emit the resolved initial range on mount
  }, []);

  const calendarWrapper = useRef<HTMLDivElement>(null);

  const {
    isOpen: isCalendarActive,
    close: closeCalendar,
    toggle: toggleCalendar,
  } = useDisclosure();

  useClickOutside({
    ref: calendarWrapper,
    active: isCalendarActive,
    onClickAway: closeCalendar,
  });

  useEffect(() => {
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
    if (keepSelectedWeekday) {
      const newSeletedDate = getNewSelectedDate(
        selectedDate,
        currentMonday,
        newMonday
      );
      setSelectedDate(newSeletedDate);
      submitDateHour(newSeletedDate, selectedTimeRange);
    }
  };

  // Function to update time range options
  const updateTimeRangeOptions = (date: Date) => {
    if (weekCounts === undefined) {
      return;
    }
    const dayCounts = weekCounts.find((item) => isSameDay(item.date, date))
      ?.counts;
    if (dayCounts) {
      setTimeRangeOptions(
        DEFAULT_TIME_RANGE_OPTIONS.map((item, index) => ({
          ...item,
          count: dayCounts[index],
        }))
      );
    } else {
      // when selected date is not in currently showing week, reset time range options
      setTimeRangeOptions(DEFAULT_TIME_RANGE_OPTIONS);
    }
  };

  const handleDateSelection = (newSelectDate?: Date) => {
    if (newSelectDate && !isSameDay(newSelectDate, selectedDate)) {
      setSelectedDate(newSelectDate);
      updateTimeRangeOptions(newSelectDate);
      // Update date options when week changes
      const newMonday = getMonday(newSelectDate);
      const currentMonday = new Date(dateOptions[0].id);
      if (!isSameDay(newMonday, currentMonday)) {
        setDateOptions(getDateOptions(newMonday));
        onWeekChange?.(newMonday);
      }
      submitDateHour(newSelectDate, selectedTimeRange);
    }
  };

  const handleHourChange = (
    timeRange: TimeRangeOption,
    shouldSubmit = false
  ) => {
    if (timeRange.id === "custom" && shouldSubmit) {
      setLastAppliedCustomTimeRange(timeRange);
    }

    setSelectedTimeRange(timeRange);
    if (shouldSubmit) {
      submitDateHour(selectedDate, timeRange);
    }
  };

  const handleCustomSelect = () => {
    if (selectedTimeRange.id === "custom") {
      return;
    }

    handleHourChange(
      lastAppliedCustomTimeRange ?? toCustomTimeRange(selectedTimeRange)
    );
  };

  const submitDateHour = (date: Date, timeRange: TimeRangeOption) => {
    onChange(getDateHourInterval(date, timeRange));
  };

  return (
    <>
      <Row className="date-picker">
        <IconButton
          severity="medium"
          icon="chevronLeft"
          onClick={() => updateDateOptions("backward")}
        />
        <DateSelector
          dateOptions={dateOptions}
          selectedDate={selectedDate}
          disabledDays={disabledDays ?? []}
          loading={countsLoading}
          onSelect={handleDateSelection}
        />
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
            <When condition={isCalendarActive}>
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
            </When>
          </Datepicker>
        </DatepickerContainer>
      </Row>
      <Row className="time-range-picker">
        <HourSelector
          timeRangeOptions={timeRangeOptions}
          selectedTimeRange={selectedTimeRange}
          weekCounts={weekCounts}
          onSelect={handleHourChange}
          onCustomSelect={handleCustomSelect}
        />
      </Row>
    </>
  );
}
