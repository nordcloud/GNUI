import { TimeRangeOption, DailyCount } from "../../../types";
import {
  UnifiedMultipleSelect,
  CustomTimeRangeSelector,
  Button,
  Label,
  SelectButton,
} from "../../styles";
import { TimeRangeLabel } from "./TimeRangeLabel";

type Props = {
  timeRangeOptions: TimeRangeOption[];
  selectedTimeRange: TimeRangeOption;
  weekCounts: DailyCount[] | undefined;
  onSelect: (timeRange: TimeRangeOption, shouldSubmit?: boolean) => void;
};

export function HourSelector({
  timeRangeOptions,
  selectedTimeRange,
  weekCounts,
  onSelect,
}: Props) {
  const showCustomTimeRange = selectedTimeRange.id === "custom";

  return (
    <>
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
            onClick={() => onSelect(timeRangeOption, true)}
          />
        ))}
        <SelectButton
          key="custom"
          name="custom"
          value="custom"
          labelText="custom"
          isActive={selectedTimeRange.id === "custom"}
          onClick={() =>
            onSelect({
              ...selectedTimeRange,
              id: "custom",
            })
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
            onSelect({
              ...selectedTimeRange,
              start: error.target.value,
            });
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
            onSelect({
              ...selectedTimeRange,
              end: error.target.value,
            });
          }}
        />
        <Button
          severity="high"
          size="sm"
          onClick={() => onSelect(selectedTimeRange, true)}
        >
          Apply
        </Button>
      </CustomTimeRangeSelector>
    </>
  );
}
