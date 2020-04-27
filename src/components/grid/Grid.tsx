import React, { FunctionComponent } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import theme, { map } from "../../theme";

const defaultSpacing = theme.spacing.spacing01;
const gridSpacings = [
  { bp: "xs", value: theme.spacing.spacing01 },
  { bp: "sm", value: theme.spacing.spacing02 },
  { bp: "md", value: theme.spacing.spacing03 },
  { bp: "lg", value: theme.spacing.spacing04 },
  { bp: "xl", value: theme.spacing.spacing05 },
  { bp: "xxl", value: theme.spacing.spacing06 },
];

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
type Size = { [sizeBreakpoint: string]: string | number } | number;
interface ColumnProps {
  size?: Size;
  margin?: Spacing;
  padding?: Spacing;
}

const FlexItem = styled.div<FlexProps>`
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
      const margin = isRem
        ? marginValue.join("rem ") + "rem"
        : marginValue.join(" ");
      return css`
        margin: ${margin};
      `;
    }

    if (!Array.isArray(marginValue) && isColumn) {
      // i.e. margin={5}
      return css`
        margin: ${isRem ? `${value}rem` : `${value}`};
      `;
    }

    return css`
      margin-left: ${isRem ? `${value}rem` : `${value}`};
      margin-right: ${isRem ? `${value}rem` : `${value}`};
    `;
  };

  if (isNaN(marginValue)) {
    for (const option of gridSpacings) {
      const [bp, value] = Object.values(option);
      if (bp === marginValue) {
        return cache(value, false);
      }
    }

    return cache(marginValue);
  }

  if (typeof marginValue === "number") {
    return cache(marginValue, true);
  }

  return cache(marginValue, true);
};

const setPaddings = (paddingValue: Spacing) => {
  const cache = (
    value: Spacing,
    isRem: boolean = true
  ): FlattenSimpleInterpolation => {
    if (Array.isArray(paddingValue)) {
      const padding = isRem
        ? paddingValue.join("rem ") + "rem"
        : paddingValue.join(" ");
      return css`
        padding: ${padding};
      `;
    }
    return css`
      padding: ${value};
    `;
  };

  if (isNaN(paddingValue)) {
    for (const option of gridSpacings) {
      const [key, value] = Object.values(option).flat();
      if (key === paddingValue) {
        return cache(value);
      }
    }
    return cache(paddingValue);
  }

  if (typeof paddingValue === "number") {
    return cache(paddingValue);
  }

  return cache(paddingValue);
};

export const Row = styled(FlexItem)<{ margin: number }>`
  flex-basis: 100%;
  max-width: 100%;
  & > * {
    overflow: auto;
  }

  ${({ margin }) => margin && setMargins(margin)}
`;

const setColumnSize = (size: Size, margin: Spacing = defaultSpacing) => {
  const cache = (size: Size, margin: Spacing = defaultSpacing) => css`
    flex-basis: calc(8.33% * ${size} - 2 * ${margin});
    max-width: calc(8.33% * ${size} - 2 * ${margin});
    ${margin && `margin: ${margin};`}
  `;

  if (typeof size === "number") {
    return cache(size);
  }

  if (typeof size !== "undefined" && typeof size !== "number") {
    return map(
      size,
      (columns) => `
      flex-basis: calc(8.33% * ${columns} - 2 * ${margin});
      max-width: calc(8.33% * ${columns} - 2 * ${margin});
      `
    );
  }

  return css`
    flex-basis: auto;
    max-width: calc(100% - 2 * ${margin});
  `;
};

export const Column = styled(FlexItem)<ColumnProps>`
  box-sizing: border-box;
  flex-grow: 1;
  padding-left: ${defaultSpacing};
  padding-right: ${defaultSpacing};
  margin: ${defaultSpacing};

  ${({ margin }) => margin && setMargins(margin, true)}
  ${({ padding }) => padding && setPaddings(padding)};
  ${({ size, margin }) =>
    ((size && margin) || size) && setColumnSize(size, margin)}
`;
