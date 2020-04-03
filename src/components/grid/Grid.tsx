import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { createBreakpoint, createMap } from "styled-components-breakpoint";
import theme from "../../theme";

const { breakpoints } = theme;

const bp = createBreakpoint(breakpoints);
const map = createMap(breakpoints);

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

const basicFlexStyles = (props: { color?: string }) => css`
  color: ${props.color || theme.colors.primary};
  letter-spacing: 0.0525rem;
`;

const FlexItem = styled.div<FlexProps>`
  ${basicFlexStyles};
  ${props =>
    props &&
    css`
      display: ${props.display || "flex"};
      justify-content: ${props.justifyContent || "space-between"};
      flex-direction: ${props.flexDirection || "row"};
      flex-grow: ${props.flexGrow || 0};
      flex-basis: ${props.flexBasis || "auto"};
      flex-shrink: ${props.flexShrink || 1};
      flex-wrap: ${props.flexWrap || "wrap"};
      flex: ${props.flex || "0 1 auto"};
      align-items: ${props.alignItems || "stretch"};
      align-content: ${props.alignContent || "center"};
    `}
`;

export const Grid: FunctionComponent = ({ children, ...props }) => (
  <FlexItem {...props}>{children}</FlexItem>
);

export const Row = styled(FlexItem)<{ cols: number }>`
  flex-basis: 100%;
`;

const flexBasisQuery = (size: number): any =>
  map(
    size,
    val =>
      `flex-basis: calc(8.3% * ${val} - 0.2rem); max-width: calc(8.3% * ${val} - 0.2rem)`
  );

export const Column = styled.div<{ size: number; order: number }>`
  margin: 0.1rem;
  flex-grow: 1;

  ${({ size }) => flexBasisQuery(size)};

  ${({ order }) =>
    order &&
    css`
      order: ${order};
    `}
`;
