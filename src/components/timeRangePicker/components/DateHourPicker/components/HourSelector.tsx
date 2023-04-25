import theme from "../../../../../theme";
import { TimeRangeOption } from "../../../types";
import {
  UnifiedMultipleSelect,
  CustomTimeRangeSelector,
  Button,
  Label,
  SelectButton,
  FlexContainer,
} from "../../styles";
import { DailyCount } from "../../types";
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
      <Label name="Hours:" htmlFor="time-range-selector" />
      <FlexContainer
        gap={theme.spacing.spacing03}
        id="time-range-selector"
        alignItems="stretch"
        style={{ flex: 1 }}
      >
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
                  justifyContent={
                    weekCounts !== undefined ? "space-between" : "center"
                  }
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
          <Label name="From" htmlFor="time-range-start" />
          <input
            id="time-range-start"
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
          <Label name="To" htmlFor="time-range-end" />
          <input
            id="time-range-end"
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
      </FlexContainer>
    </>
  );
}
