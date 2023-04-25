import { useState, useRef } from "react";
import { isSameDay } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import { When } from "react-if";
import theme from "../../../../theme";
import { RANGE_TYPE } from "../../types";
import { DEFAULT_RANGE_TYPES } from "../constants";
import {
  Row,
  UnifiedMultipleSelect,
  DatepickerContainer,
  StyledButton,
  SelectWrap,
  FlexContainer,
  Datepicker,
  SelectButton,
  Text,
} from "../styles";
import { DatesPickerProps } from "../types";
import {
  getDate,
  getDateWithDays,
  getTimeRangeDate,
  useClickOutside,
  useDisclosure,
} from "../utils";

const dateFormat = "dd MMM yyyy";

export function DatesPicker({
  initTimeRange,
  disabledDays,
  onChange,
}: DatesPickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(
    getTimeRangeDate(initTimeRange)
  );
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >({ from: new Date() });
  const [selectedRangeType, setSelectedRangeType] = useState<RANGE_TYPE>(
    DEFAULT_RANGE_TYPES[0]
  );

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
      updateDateRange(newSelectDate, selectedRangeType);
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
              <When condition={isCalendarActive}>
                <DayPicker
                  mode="range"
                  selected={selectedDateRange}
                  defaultMonth={selectedDate}
                  disabled={disabledDays}
                  onSelect={(_: DateRange | undefined, newSelectedDate: Date) =>
                    handleDateSelection(newSelectedDate)
                  }
                />
              </When>
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
