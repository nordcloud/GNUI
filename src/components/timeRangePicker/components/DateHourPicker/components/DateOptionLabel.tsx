import { DateOption } from "../../../types";
import {
  DEFAULT_DAILY_COUNTS,
  DEFAULT_TIME_RANGE_OPTIONS,
} from "../../constants";
import { FlexContainer, Spinner } from "../../styles";
import { getDateString } from "../../utils";
import { CountBarWrapper, CountBar } from "./styles";

type Props = {
  dateOption: DateOption;
  loading: boolean;
};

export function DateOptionLabel({ dateOption, loading }: Props) {
  const hasCounts = dateOption.counts !== undefined;

  return (
    <FlexContainer
      justifyContent={hasCounts ? "space-between" : "center"}
      alignItems="stretch"
    >
      <div>
        <label>{dateOption.weekday}</label>
        <div className="date-value">
          {getDateString(new Date(dateOption.id))}
        </div>
      </div>
      {hasCounts && loading && (
        <div style={{ alignSelf: "center" }}>
          <Spinner />
        </div>
      )}
      {hasCounts &&
        !loading &&
        renderCountsGraph(
          dateOption.counts ?? DEFAULT_DAILY_COUNTS,
          dateOption.id
        )}
    </FlexContainer>
  );
}

const renderCountsGraph = (precentageArray: number[], dateString: string) => {
  return (
    <FlexContainer gap="2px">
      {precentageArray.map((precentage, index) => (
        <CountBarWrapper
          key={`${dateString}-${DEFAULT_TIME_RANGE_OPTIONS[index].id}`}
        >
          <CountBar height={precentage} />
        </CountBarWrapper>
      ))}
    </FlexContainer>
  );
};
