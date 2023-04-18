import { TimeRangeOption } from "../../../types";
import { FlexContainer } from "../../styles";
import { CountTag } from "./styles";

type Props = {
  timeRangeOption: TimeRangeOption;
  hasCounts: boolean;
};

export function TimeRangeLabel({ timeRangeOption, hasCounts }: Props) {
  return (
    <FlexContainer
      justifyContent={hasCounts ? "space-between" : "center"}
      alignItems="stretch"
    >
      <label>{`${timeRangeOption.start} - ${timeRangeOption.end}`}</label>
      {![undefined, 0].includes(timeRangeOption.count) && (
        <CountTag>{timeRangeOption.count}</CountTag>
      )}
    </FlexContainer>
  );
}
