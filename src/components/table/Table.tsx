import styled from "styled-components";
import theme from "../../theme";

export type TableProps = {
  hoverline?: boolean;
  striped?: boolean;
  small?: boolean;
  tiny?: boolean;
};

const Table: any = styled.table<TableProps>`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  font-size: ${({ tiny }) => (tiny ? theme.fontSizes.sm : theme.fontSizes.md)};
  line-height: 1.5em;
  color: ${theme.colors.primary};

  tbody {
    tr {
      &:hover {
        cursor: ${({ hoverline }) => (hoverline ? "pointer" : "default")};
        background-color: ${({ hoverline }) =>
          hoverline ? theme.colors.lights[1] : ""};
      }
      &:nth-child(odd) {
        background-color: ${({ striped }) =>
          striped ? theme.colors.lights[0] : ""};
        &:hover {
          background-color: ${({ hoverline }) =>
            hoverline ? theme.colors.lights[1] : ""};
        }
      }
    }
  }

  tbody,
  thead,
  tfoot {
    td {
      padding: ${({ small, tiny }) =>
        small || tiny
          ? `${theme.spacing.spacing02} ${theme.spacing.spacing03}`
          : `${theme.spacing.spacing03}`};
    }
    th {
      padding: ${({ small, tiny }) =>
        small || tiny
          ? `${theme.spacing.spacing02} ${theme.spacing.spacing03}`
          : `${theme.spacing.spacing03}`};
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.medium};
      color: ${theme.colors.darks[4]};
      line-height: 1.5em;
    }
  }
`;

const Thead = styled.thead`
  letter-spacing: normal;
  text-transform: uppercase;
`;

const Tbody = styled.tbody``;
const Tfoot = styled.tfoot`
  td {
    background-color: ${theme.colors.lights[1]};
  }
`;

const Td = styled.td<any>`
  border-top: 1px solid ${theme.colors.lights[2]};
  border-left: ${({ hasLeftBorder }) =>
    hasLeftBorder ? `1px solid ${theme.colors.lights[2]}` : "none"};
  border-right: ${({ hasRightBorder }) =>
    hasRightBorder ? `1px solid ${theme.colors.lights[2]}` : "none"};
`;

const Tr = styled.tr<any>``;

const Th = styled.th<any>`
  border-bottom: 2px solid ${theme.colors.lights[2]};
`;

Table.thead = Thead;
Table.tbody = Tbody;
Table.tfoot = Tfoot;
Table.td = Td;
Table.tr = Tr;
Table.th = Th;

export default Table;
