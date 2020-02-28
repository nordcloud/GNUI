import styled from "styled-components";
import { Container } from "../container";

interface GridProps {
  className: string;
  columns: string | number;
  gap: string;
  columnGap: string;
  rowGap: string;
  height: string;
  minRowHeight: string;
  flow: string;
  rows: string | number;
  areas: Array<string>;
  justifyContent: string;
  alignContent: string;
}

const autoRows = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const frGetter = (value: number | string) =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

const gap = ({ gap = "8px" }) => gap;

const flow = ({ flow = "row" }) => flow;

const formatAreas = (areas: Array<string>) =>
  areas.map(area => `"${area}"`).join(" ");

export const Grid = styled(Container)<GridProps>`
  display: grid;
  height: ${({ height = "auto" }) => height};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
  grid-gap: ${gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;
