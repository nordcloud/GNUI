import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme, {
  defaultMargin,
  defaultPadding,
  spacings,
  map,
} from "../../theme";

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
  size: number | any;
  margin: number | any;
  padding: number | any;
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

const setMargins = (marginValue: number | string | any): any => {
  const cache = (value: any, rem: boolean = true): any =>
    css`
      margin-left: ${rem ? `${value}rem` : `${value}`};
      margin-right: ${rem ? `${value}rem` : `${value}`};
    `;

  if (typeof marginValue === "number") {
    return cache(marginValue, true);
  }

  for (const obj of spacings) {
    const [key, value] = Object.entries(obj).flat();
    if (key === marginValue) {
      return cache(value, true);
    }
  }

  return cache(marginValue, false);
};

export const Row = styled(FlexItem)<{ margin: number }>`
  flex-basis: 100%;
  max-width: 100%;
  & > * {
    overflow: hidden;
  }

  ${({ margin }) => margin && setMargins(margin)}
`;

const setColumnSize = (size: any, margin = defaultMargin) => {
  const widthValue = `calc(8.3% * ${size} - 2 * ${margin}rem)`;

  const cache = (widthValue: any) => css`
    flex-basis: ${widthValue};
    max-width: ${widthValue};
    ${margin && `margin: ${margin}rem;`}
  `;

  if (typeof size === "number") {
    return cache(widthValue);
  }

  if (typeof size !== "undefined" && typeof size !== "number") {
    return map(
      size,
      (columns) => `
      flex-basis: calc(8.3% * ${columns} - 2 * ${margin}rem);
      max-width: calc(8.3% * ${columns} - 2 * ${margin}rem);
      `
    );
  }

  return css`
    flex-basis: auto;
    max-width: calc(100% - 2 * ${margin}rem);
  `;
};

const setColumnMargins = (marginValue: number | string | any): any => {
  const cache = (value: any, rem: boolean = true): any =>
    css`
      margin: ${rem ? `${value}rem` : `${value}`}rem;
    `;

  if (typeof marginValue === "number") {
    return cache(marginValue, true);
  }

  for (const obj of spacings) {
    const [key, value] = Object.entries(obj).flat();
    if (key === marginValue) {
      return cache(value, true);
    }
  }

  return cache(marginValue, false);
};

export const Column = styled.div<ColumnProps>`
  box-sizing: border-box;
  flex-grow: 1;
  padding-left: ${defaultPadding}rem;
  padding-right: ${defaultPadding}rem;
  margin: ${defaultMargin}rem;

  ${({ margin }) => margin && setColumnMargins(margin)}

  ${({ padding }) =>
    padding &&
    css`
      padding-left: ${padding}rem;
      padding-right: ${padding}rem;
    `}

  ${({ size, margin }) =>
    ((size && margin) || size) && setColumnSize(size, margin)}
`;
