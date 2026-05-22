import { ComponentProps } from "react";
import { DatesPicker, DateHourPicker } from "./components";

type Props = Omit<ComponentProps<typeof DateHourPicker>, "initTimeRange"> & {
  initTimeRange?: Interval;
  type?: "Days" | "Hours";
  keepSelectedWeekday?: boolean;
};

const DEFAULT_TIME_RANGE: Interval = {
  start: new Date(),
  end: new Date(),
};

export function TimeRangePicker({
  initTimeRange = DEFAULT_TIME_RANGE,
  type = "Hours",
  weekCounts,
  countsLoading = false,
  disabledDays,
  keepSelectedWeekday = false,
  onChange,
  onWeekChange,
}: Props) {
  if (type === "Days") {
    return (
      <DatesPicker
        initTimeRange={initTimeRange}
        disabledDays={disabledDays}
        onChange={onChange}
      />
    );
  }
  return (
    <DateHourPicker
      initTimeRange={initTimeRange}
      weekCounts={weekCounts}
      countsLoading={countsLoading}
      disabledDays={disabledDays}
      keepSelectedWeekday={keepSelectedWeekday}
      onChange={onChange}
      onWeekChange={onWeekChange}
    />
  );
}
