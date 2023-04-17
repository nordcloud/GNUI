import { FlexContainer } from "../../container";
import { Spinner } from "../../spinner";
import { DEFAULT_DAILY_COUNTS } from "../constants";
import { DateOption } from "../types";
import { getDateString } from "../utils";
import { CountsGraph } from "./CountsGraph";

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
      {hasCounts && !loading && (
        <CountsGraph
          precentageArray={dateOption.counts ?? DEFAULT_DAILY_COUNTS}
        />
      )}
    </FlexContainer>
  );
}
