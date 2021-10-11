import * as React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";

type IPieChart = {
  size: number;
  progress: number;
  strokeWidth: number;
  color?: "danger" | "warning" | "success" | "notification";
  [x: string]: any;
};

const setColorBgr = (color: string) => {
  switch (color) {
    case "danger":
      return theme.color.support.redInverse;
    case "warning":
      return theme.color.support.orangeInverse;
    case "success":
      return theme.color.support.greenInverse;
    case "notification":
      return theme.color.support.blueInverse;
  }
};
const setColorProgress = (color: string) => {
  switch (color) {
    case "danger":
      return theme.color.support.red;
    case "warning":
      return theme.color.support.orange;
    case "success":
      return theme.color.support.green;
    case "notification":
      return theme.color.support.blue;
  }
};

const StyledPieChartWrap = styled.div`
  display: flex;
  position: relative;
  ${space}
`;

const StyledPieChartDescription = styled.div<IPieChart>`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.color.text.text02};
  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}
  ${({ color }) =>
    color &&
    css`
      .chartValue {
        color: ${setColorProgress(color)};
        line-height: 1.5rem;
      }
      .chartCaption {
        color: ${theme.color.text.text02};
      }
    `}
`;

const StyledSVG = styled.svg<IPieChart>`
  display: block;
  ${({ size }) =>
    size &&
    css`
      width: ${size};
    `}
`;
const StyledCircleBgr = styled.circle<IPieChart>`
  fill: none;
  stroke: ${theme.color.support.greyInverse};
  ${({ color }) =>
    color &&
    css`
      stroke: ${setColorBgr(color)};
    `}
`;

const StyledCircleProgress = styled.circle<IPieChart>`
  transform: rotate(-90deg) translateX(-96px);
  transition: stroke-dashoffset 0.85s ease-in-out;
  fill: none;
  stroke: ${theme.color.support.grey};
  ${({ color }) =>
    color &&
    css`
      stroke: ${setColorProgress(color)};
    `}

  ${({ size }) =>
    size &&
    css`
      transform: rotate(-90deg) translateX(-${size}px);
    `}
`;

type Props = { children: React.ReactNode } & IPieChart & SpaceProps;

export function PieChart({
  size,
  progress,
  strokeWidth,
  color,
  children,
  ...props
}: Props) {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  const [offset, setOffset] = React.useState(circumference);

  React.useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, progress, offset]);

  return (
    <StyledPieChartWrap {...props}>
      <StyledSVG width={size} height={size}>
        <StyledCircleBgr
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          color={color}
        />
        <StyledCircleProgress
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          color={color}
          size={size}
        />
      </StyledSVG>
      {children && (
        <StyledPieChartDescription size={size} color={color}>
          {children}
        </StyledPieChartDescription>
      )}
    </StyledPieChartWrap>
  );
}
