import { FlexContainer } from "../../container";
import { CountBarWrapper, CountBar } from "./styles";

type Props = {
  precentageArray: number[];
};

export function CountsGraph({ precentageArray }: Props) {
  return (
    <FlexContainer gap="2px">
      {precentageArray.map((precentage, index) => {
        return (
          <CountBarWrapper key={index}>
            <CountBar height={precentage} />
          </CountBarWrapper>
        );
      })}
    </FlexContainer>
  );
}
