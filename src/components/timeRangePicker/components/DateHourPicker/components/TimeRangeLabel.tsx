import { When } from "react-if";
import { TimeRangeOption } from "../../../types";
import { FlexContainer } from "../../styles";
import { CountTag } from "./styles";

type Alignment = "center" | "space-between";

type Props = {
  timeRangeOption: TimeRangeOption;
  justifyContent: Alignment;
};

export function TimeRangeLabel({ timeRangeOption, justifyContent }: Props) {
  return (
    <FlexContainer justifyContent={justifyContent} alignItems="center">
      <span>{`${timeRangeOption.start} - ${timeRangeOption.end}`}</span>
      <When condition={timeRangeOption.count !== 0}>
        <CountTag
          text={timeRangeOption.count.toString()}
          color="blue"
          colorText="white"
        />
      </When>
    </FlexContainer>
  );
}
