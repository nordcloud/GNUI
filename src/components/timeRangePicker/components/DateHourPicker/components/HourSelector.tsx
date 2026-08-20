import theme from "../../../../../theme";
import { Button } from "../../../../button";
import { FlexContainer } from "../../../../container";
import { Label, Input } from "../../../../input";
import { SelectButton } from "../../../../selectbutton";
import { TimeRangeOption } from "../../../types";
import { UnifiedMultipleSelect } from "../../styles";
import { DailyCount } from "../../types";
import { CustomTimeRangeSelector } from "./styles";
import { TimeRangeLabel } from "./TimeRangeLabel";

type Props = {
  timeRangeOptions: TimeRangeOption[];
  selectedTimeRange: TimeRangeOption;
  weekCounts: DailyCount[] | undefined;
  onSelect: (timeRange: TimeRangeOption, shouldSubmit?: boolean) => void;
  onCustomSelect: () => void;
};

const isValidCustomTimeRange = (start: string, end: string): boolean =>
  start !== "" && end !== "" && end >= start;

export function HourSelector({
  timeRangeOptions,
  selectedTimeRange,
  weekCounts,
  onSelect,
  onCustomSelect,
}: Props) {
  const isCustomTimeRange = selectedTimeRange.id === "custom";
  const isCustomRangeValid = isValidCustomTimeRange(
    selectedTimeRange.start,
    selectedTimeRange.end
  );

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
            isActive={isCustomTimeRange}
            onClick={onCustomSelect}
          />
        </UnifiedMultipleSelect>
        <CustomTimeRangeSelector isVisible={isCustomTimeRange}>
          <Label name="From" htmlFor="time-range-start" />
          <Input
            required
            id="time-range-start"
            type="time"
            name="time-range-start"
            value={selectedTimeRange.start}
            max={selectedTimeRange.end || undefined}
            onBlur={(event) => event.target.reportValidity()}
            onChange={(event) => {
              const start = event.target.value;

              onSelect({
                ...selectedTimeRange,
                start,
              });
            }}
          />
          <Label name="To" htmlFor="time-range-end" />
          <Input
            required
            id="time-range-end"
            type="time"
            name="time-range-end"
            value={selectedTimeRange.end}
            min={selectedTimeRange.start || undefined}
            onBlur={(event) => event.target.reportValidity()}
            onChange={(event) => {
              const end = event.target.value;

              onSelect({
                ...selectedTimeRange,
                end,
              });
            }}
          />
          <Button
            severity="high"
            size="sm"
            disabled={!isCustomRangeValid}
            onClick={() => onSelect(selectedTimeRange, true)}
          >
            Apply
          </Button>
        </CustomTimeRangeSelector>
      </FlexContainer>
    </>
  );
}
