import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { space } from "styled-system";

interface IBarValue {
  color: string;
  value: number;
}

interface IBarValues {
  values: IBarValue[];
}

interface IStyledBarProps {
  height?: string;
}

const StyledBarChart = styled.svg`
  width: 100%;
  height: ${(props: IStyledBarProps) =>
    props.height ? props.height : "1.5rem"};
  border-radius: ${theme.radiusDefault};
  ${space};
`;

type BarProps = IBarValues & IStyledBarProps;

export const BarChart = ({ values, ...visualProps }: BarProps) => {
  const sum = values.reduce((s, { value }) => s + value, 0);
  let x = 0;
  function calculateX(prevBarWidth: number) {
    return (x = x + prevBarWidth);
  }
  const percentageValues = values.map(({ value, color }, index) => ({
    size: Math.round((value / sum) * 100),
    x:
      index === 0
        ? 0
        : calculateX(Math.round((values[index - 1].value / sum) * 100)),
    color,
  }));
  return (
    <StyledBarChart {...visualProps}>
      <g>
        {percentageValues.map(({ size, x, color }, idx) => (
          <rect x={`${x}%`} width={`${size}%`} fill={color} key={idx} />
        ))}
      </g>
    </StyledBarChart>
  );
};
