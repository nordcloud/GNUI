import * as React from "react";
import styled, { css } from "styled-components";
import { space } from "styled-system";
import theme from "../../theme";

type IBarValue = {
  color: string;
  value: number;
};

type IBarValues = {
  values: IBarValue[];
};

type IStyledBarProps = {
  height?: string;
};

const StyledBarChart = styled.svg<IStyledBarProps>`
  width: 100%;
  height: 1.5rem;
  border-radius: ${theme.radiusDefault};
  rect {
    height: 1.5rem;
  }
  ${({ height }) =>
    height &&
    css`
      height: ${height};
      rect {
        height: ${height};
      }
    `};
  ${space};
`;

type BarProps = IBarValues & IStyledBarProps;

export function BarChart({ values, ...visualProps }: BarProps) {
  const xRef = React.useRef(0);
  const sum = values.reduce((accumulator, { value }) => accumulator + value, 0);

  const calculateX = (prevBarWidth: number) => (xRef.current += prevBarWidth);
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
        {percentageValues.map(({ size, x, color }, index) => (
          <rect key={index} x={`${x}%`} width={`${size}%`} fill={color} />
        ))}
      </g>
    </StyledBarChart>
  );
}
