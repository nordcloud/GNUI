import { Matcher, isMatch } from "react-day-picker";
import { DateOption } from "../../../types";
import { UnifiedMultipleSelect, SelectButton } from "../../styles";
import { DateOptionLabel } from "./DateOptionLabel";

type Props = {
  dateOptions: DateOption[];
  disabledDays: Matcher[];
  loading: boolean;
  selectedDate: Date;
  onSelect: (date: Date) => void;
};

export function DateSelector({
  dateOptions,
  selectedDate,
  disabledDays,
  loading,
  onSelect,
}: Props) {
  return (
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
              disabled={isMatch(date, disabledDays) || loading}
              labelText={
                <DateOptionLabel dateOption={dateOption} loading={loading} />
              }
              onClick={() => onSelect(date)}
            />
          );
        })}
      </UnifiedMultipleSelect>
    </div>
  );
}
