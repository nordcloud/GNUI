import styled from "styled-components";
import theme from "../../theme";

export type TableProps = {
  hoverline?: boolean;
  striped?: boolean;
  small?: boolean;
  tiny?: boolean;
};

/* stylelint-disable no-descending-specificity */
/* eslint-disable sonarjs/no-identical-functions */
const Table: any = styled.table<TableProps>`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  font-size: ${({ tiny }: any) => (tiny ? theme.fontSizes.sm : theme.fontSizes.md)};
  line-height: 1.5em;
  color: ${theme.color.text.text01};

  tbody {
    tr {
      &:hover {
        cursor: ${({ hoverline }: any) => (hoverline ? "pointer" : "default")};
        background-color: ${({ hoverline }: any) =>
          hoverline ? theme.color.background.ui03 : ""};
      }
      &:nth-child(odd) {
        background-color: ${({ striped }: any) =>
          striped ? theme.color.background.ui02 : ""};
        &:hover {
          background-color: ${({ hoverline }: any) =>
            hoverline ? theme.color.background.ui03 : ""};
        }
      }
    }
  }

  tbody,
  thead,
  tfoot {
    td {
      padding: ${({ small, tiny }: any) =>
        small || tiny
          ? `${theme.spacing.spacing02} ${theme.spacing.spacing03}`
          : `${theme.spacing.spacing03}`};
    }
    th {
      padding: ${({ small, tiny }: any) =>
        small || tiny
          ? `${theme.spacing.spacing02} ${theme.spacing.spacing03}`
          : `${theme.spacing.spacing03}`};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.color.text.text02};
      line-height: 1.5em;
    }
  }
`;

const Thead = styled.thead`
  letter-spacing: normal;
  text-transform: ${theme.typography.titleCase};
`;

const Tbody = styled.tbody``;

const Tfoot = styled.tfoot`
  td {
    background-color: ${theme.color.background.ui01};
  }
`;

const Td = styled.td<any>`
  border-top: 1px solid ${theme.color.border.border01};
  border-left: ${({ hasLeftBorder }: any) =>
    hasLeftBorder ? `1px solid ${theme.color.border.border01}` : "none"};
  border-right: ${({ hasRightBorder }: any) =>
    hasRightBorder ? `1px solid ${theme.color.border.border01}` : "none"};
`;

const Tr = styled.tr<any>``;

const Th = styled.th<any>`
  border-bottom: 2px solid ${theme.color.border.border01};
`;

Table.thead = Thead;
Table.tbody = Tbody;
Table.tfoot = Tfoot;
Table.td = Td;
Table.tr = Tr;
Table.th = Th;

export default Table;
