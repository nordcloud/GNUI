import { When, If, Then, Else } from "react-if";
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
        <header>{dateOption.weekday}</header>
        <time className="date-value" dateTime={dateOption.id}>
          {getDateString(new Date(dateOption.id))}
        </time>
      </div>
      <When condition={hasCounts}>
        <If condition={loading}>
          <Then>
            <div style={{ alignSelf: "center" }}>
              <Spinner />
            </div>
          </Then>
          <Else>
            <FlexContainer gap="2px">
              {(dateOption.counts ?? DEFAULT_DAILY_COUNTS).map(
                (precentage, index) => (
                  <CountBarWrapper
                    key={`${dateOption.id}-${DEFAULT_TIME_RANGE_OPTIONS[index].id}`}
                  >
                    <CountBar height={precentage} />
                  </CountBarWrapper>
                )
              )}
            </FlexContainer>
          </Else>
        </If>
      </When>
    </FlexContainer>
  );
}
