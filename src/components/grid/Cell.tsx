import styled, { css } from "styled-components";
import { Container } from "../container";

interface CellProps {
  className: string;
  width: number;
  height: number;
  top: number | string;
  left: number | string;
  middle: boolean;
  center: boolean;
  area: string;
}

export const Cell = styled(Container)<CellProps>`
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};
  ${({ center }) => center && `text-align: center`};
  ${({ area }) => area && `grid-area: ${area}`};
  ${({ middle }) =>
    middle &&
    css`
      display: inline-flex;
      flex-flow: column wrap;
      justify-content: center;
      justify-self: stretch;
    `};
`;
