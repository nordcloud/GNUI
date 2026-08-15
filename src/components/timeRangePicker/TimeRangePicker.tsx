import { ComponentProps } from "react";
import { DatesPicker, DateHourPicker } from "./components";
import { getDefaultInitTimeRange } from "./components/utils";

type Props = Omit<ComponentProps<typeof DateHourPicker>, "initTimeRange"> & {
  initTimeRange?: Interval;
  type?: "Days" | "Hours";
  keepSelectedWeekday?: boolean;
};

export function TimeRangePicker({
  initTimeRange = getDefaultInitTimeRange(),
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
