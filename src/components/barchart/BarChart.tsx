import React from "react";
import styled, { css } from "styled-components";
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

const StyledBarChart = styled.svg<IStyledBarProps>`
  width: 100%;
  height: 1.5rem;
  border-radius: ${theme.radiusDefault};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
  ${space};
`;

type BarProps = IBarValues & IStyledBarProps;

export const BarChart = ({ values, ...visualProps }: BarProps) => {
  const sum = values.reduce((accumulator, { value }) => accumulator + value, 0);
  let x = 0;
  const calculateX = (prevBarWidth: number) => (x += prevBarWidth);
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
