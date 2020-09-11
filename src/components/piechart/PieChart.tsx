import React, { useEffect, useState, FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { space, SpaceProps } from "styled-system";

interface IPieChart {
  size: number;
  progress: number;
  strokeWidth: number;
  color?: "danger" | "warning" | "success" | "notification";
  [x: string]: any;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const setColorBgr = (color: string) => {
  switch (color) {
    case "danger":
      return theme.colors.statusDanger[0];
    case "warning":
      return theme.colors.statusWarning[0];
    case "success":
      return theme.colors.statusSuccess[0];
    case "notification":
      return theme.colors.statusNotification[0];
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
  color: ${theme.colors.primary};
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
        color: ${setColor(color)};
        line-height: 1.5rem;
      }
      .chartCaption {
        color: ${theme.colors.darks[3]};
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
  stroke: ${theme.colors.lights[3]};
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
  stroke: ${theme.colors.darks[2]};
  ${({ color }) =>
    color &&
    css`
      stroke: ${setColor(color)};
    `}

  ${({ size }) =>
    size &&
    css`
      transform: rotate(-90deg) translateX(-${size}px);
    `}
`;

export const PieChart: FunctionComponent<IPieChart & SpaceProps> = ({
  size,
  progress,
  strokeWidth,
  color,
  displayValue,
  valueDescription,
  children,
  ...props
}) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
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
};
