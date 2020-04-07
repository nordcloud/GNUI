import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme, { margin, padding, spacings, map } from "../../theme";

interface FlexProps {
  children?: any;
  className?: string;
  display?: "block" | "flex";
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  flex?: string;
}

interface ColumnProps {
  size: number;
  m: number;
  p: number;
}

const basicFlexStyles = (props: { color?: string }) => css`
  color: ${props.color || theme.colors.primary};
  letter-spacing: 0.0525rem;
  & > * {
    color: inherit;
  }
`;

const FlexItem = styled.div<FlexProps>`
  ${basicFlexStyles};
  ${(props) =>
    props &&
    css`
      display: ${props.display || "flex"};
      justify-content: ${props.justifyContent || "space-around"};
      flex-direction: ${props.flexDirection || "row"};
      flex-grow: ${props.flexGrow || 0};
      flex-basis: ${props.flexBasis || "auto"};
      flex-shrink: ${props.flexShrink || 1};
      flex-wrap: ${props.flexWrap || "wrap"};
      align-items: ${props.alignItems || "stretch"};
      align-content: ${props.alignContent || "center"};
    `}
`;

export const Grid: FunctionComponent = ({ children, ...props }) => (
  <FlexItem {...props}>{children}</FlexItem>
);

const checkMargins = (marginPropValue: number | string | any): any => {
  const cache = (value: any, rem: boolean = true): any =>
    css`
      margin-left: ${rem ? `${value}rem` : `${value}`};
      margin-right: ${rem ? `${value}rem` : `${value}`};
    `;

  if (typeof marginPropValue === "number") {
    return cache(marginPropValue, true);
  }

  for (const obj of spacings) {
    const [key, value] = Object.entries(obj).flat();
    if (key === marginPropValue) {
      return cache(value, true);
    }
  }

  return cache(marginPropValue, false);
};

export const Row = styled(FlexItem)<{ m: number }>`
  flex-basis: 100%;
  max-width: 100%;
  & > * {
    overflow: hidden;
  }

  ${({ m }) => m && checkMargins(m)}
`;

const flexBasisQuery = (size: number, m = margin): any =>
  map(
    size,
    (val) =>
      `flex-basis: calc(8.3% * ${val} - ${2 * m}rem);
      max-width: calc(8.3% * ${val} - ${2 * m}rem)`
  );

const setColumnMargin = (size: number, m: any) => {
  if (typeof size === "number") {
    return css`
      flex-basis: calc(8.3% * ${size} - 2 * ${m ? m : margin}rem);
      max-width: calc(8.3% * ${size} - 2 * ${m ? m : margin}rem);
    `;
  }

  if (typeof size !== "undefined" && typeof size !== "number") {
    return flexBasisQuery(size, m);
  }

  return css`
    flex-basis: auto;
    max-width: calc(100% - 2 * ${m ? m : margin}rem);
  `;
};

export const Column = styled.div<ColumnProps>`
  box-sizing: border-box;
  flex-grow: 1;
  padding-left: ${padding}rem;
  padding-right: ${padding}rem;
  margin: ${margin}rem;

  ${({ p }) =>
    p &&
    css`
      padding-left: ${p}rem;
      padding-right: ${p}rem;
    `}

  ${({ size, m }) => ((size && m) || size) && setColumnMargin(size, m)}
`;
