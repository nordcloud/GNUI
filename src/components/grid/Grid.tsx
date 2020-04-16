import React, { FunctionComponent } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import theme, {
  margin as defaultMargin,
  padding as defaultPadding,
  spacings,
  map,
  bp,
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

type Spacing = Array<string | number> | string | number | any;
type Size = { [sizeBreakpoint: string]: string } | number;
interface ColumnProps {
  size: Size;
  margin: Spacing;
  padding: Spacing;
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

const setMargins = (marginValue: Spacing, isColumn: boolean = false): any => {
  const cache = (
    value: Spacing,
    isRem: boolean = true
  ): FlattenSimpleInterpolation => {
    if (Array.isArray(marginValue)) {
      // i.e. margin={[1, 5, 5, 1]}
      return css`
        margin-top: ${isRem ? `${value[0]}rem` : `${value[0]}`};
        margin-right: ${isRem ? `${value[1]}rem` : `${value[1]}`};
        margin-bottom: ${isRem ? `${value[2]}rem` : `${value[2]}`};
        margin-left: ${isRem ? `${value[3]}rem` : `${value[3]}`};
      `;
    }

    if (!Array.isArray(marginValue) && isColumn) {
      // i.e. margin={5}
      return css`
        margin-top: ${isRem ? `${value}rem` : `${value}`};
        margin-right: ${isRem ? `${value}rem` : `${value}`};
        margin-bottom: ${isRem ? `${value}rem` : `${value}`};
        margin-left: ${isRem ? `${value}rem` : `${value}`};
      `;
    }

    return css`
      margin-left: ${isRem ? `${value}rem` : `${value}`};
      margin-right: ${isRem ? `${value}rem` : `${value}`};
    `;
  };

  if (isNaN(marginValue)) {
    for (const option of spacings) {
      const [key, value] = Object.values(option).flat();
      console.log({ key, value });
      if (key === marginValue) {
        return cache(value, true);
      }
    }
    return cache(marginValue);
  }

  if (typeof marginValue === "number") {
    return cache(marginValue, true);
  }

  return cache(marginValue, true);
};

const setPaddings = (paddingValue: Spacing, isColumn: boolean = false) => {
  const cache = (
    value: Spacing,
    isRem: boolean = true
  ): FlattenSimpleInterpolation => {
    if (Array.isArray(paddingValue)) {
      return css`
        padding-top: ${isRem ? `${value[0]}rem` : `${value[0]}`};
        padding-right: ${isRem ? `${value[1]}rem` : `${value[1]}`};
        padding-bottom: ${isRem ? `${value[2]}rem` : `${value[2]}`};
        padding-left: ${isRem ? `${value[3]}rem` : `${value[3]}`};
      `;
    }
    return css`
      padding: ${value}rem;
    `;
  };

  if (isNaN(paddingValue)) {
    for (const option of spacings) {
      const [key, value] = Object.values(option).flat();
      console.log({ key, value });
      if (key === paddingValue) {
        return cache(value, true);
      }
    }
    return cache(paddingValue);
  }

  if (typeof paddingValue === "number") {
    return cache(paddingValue, true);
  }

  return cache(paddingValue, true);
};

export const Row = styled.div<{ margin: number }>`
  display: flex;
  flex-basis: 100%;
  max-width: 100%;
  & > * {
    overflow: scroll;
  }

  ${({ margin }) => margin && setMargins(margin)}
`;

const setColumnSize = (size: Size, margin: Spacing = defaultMargin) => {
  const cache = (size: Size, margin: Spacing = defaultMargin) => css`
    flex-basis: calc(8.3% * ${size} - 2 * ${margin}rem);
    max-width: calc(8.3% * ${size} - 2 * ${margin}rem);
    ${margin && `margin: ${margin}rem;`}
  `;

  if (typeof size === "number") {
    return cache(size);
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

export const Column = styled.div<ColumnProps>`
  box-sizing: border-box;
  flex-grow: 1;
  padding-left: ${defaultPadding}rem;
  padding-right: ${defaultPadding}rem;
  margin: ${defaultMargin}rem;

  ${({ margin }) => margin && setMargins(margin, true)}
  ${({ padding }) => padding && setPaddings(padding, true)};
  ${({ size, margin }) =>
    ((size && margin) || size) && setColumnSize(size, margin)}
`;
