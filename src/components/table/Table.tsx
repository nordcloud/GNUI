import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Checkbox } from "../checkbox";
import { Button } from "../button";

export interface CellProps {
  id?: string;
  className?: string;
  header?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface HeadingRowProps {
  name?: string;
  headings: Array<string>;
  isCheckable?: boolean;
  children?: React.ReactNode;
}

export interface RowProps {
  id: number;
  name?: string;
  row: Array<string>;
  isCheckable?: boolean;
  isChecked?: boolean;
  handleTableCheckbox?: (
    rows: Array<any>,
    id: number,
    isChecked: boolean
  ) => void;
  children?: React.ReactNode;
}

export interface TableProps {
  name?: string;
  headings: Array<string>;
  rows: Array<Array<string>>;
  checkboxes?: boolean;
  getSelectedRows?: (rows: Array<any>) => void;
  children?: React.ReactNode;
}

export interface TableWrapperProps {
  hoverline?: boolean;
  striped?: boolean;
  small?: boolean;
}

const TableWrapper = styled.div<TableWrapperProps>`
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    font-weight: ${theme.fontWeights.regular};
    font-family: ${theme.typography.fonts.body};
    font-size: ${theme.fontSizes.regular};
    color: ${theme.colors.primary};

    tr {
      &:hover {
        background-color: ${({ hoverline }) =>
          hoverline ? theme.colors.lights[1] : "none"};
      }
      &:nth-child(even) {
        background-color: ${({ striped }) =>
          striped ? theme.colors.lights[0] : "none"};
        &:hover {
          background-color: ${({ hoverline }) =>
            hoverline ? theme.colors.lights[1] : "none"};
        }
      }
    }
    th {
      border-bottom: 1px solid ${theme.colors.lights[2]};
      font-weight: ${theme.fontWeights.medium};
      font-size: ${theme.fontSizes.small};
      text-transform: uppercase;
    }
    td {
      border-top: 1px solid ${theme.colors.lights[2]};
    }
    td,
    th {
      padding: ${({ small }) => (small ? "0.5rem 0.75rem" : "0.75rem")};
    }
  }
`;

export const Cell: FunctionComponent<CellProps> = ({ header, children }) => {
  const cellMarkup = header ? <th>{children}</th> : <td>{children}</td>;
  return cellMarkup;
};

export const HeadingRow: FunctionComponent<HeadingRowProps> = ({
  headings,
  isCheckable,
  children,
}) => (
  <tr>
    <React.Fragment>
      {isCheckable && <Cell header>{children}</Cell>}
      {headings &&
        headings.map((heading: string) => (
          <Cell key={heading} header>
            {heading}
          </Cell>
        ))}
    </React.Fragment>
  </tr>
);

export const Row: FunctionComponent<RowProps> = ({
  id,
  row,
  isCheckable,
  handleTableCheckbox,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <tr key={id}>
      <React.Fragment>
        {isCheckable && (
          <Cell>
            <Checkbox
              name={"checkbox-" + id}
              onClick={() => setIsChecked(!isChecked)}
              checked={isChecked}
              onChange={() =>
                handleTableCheckbox
                  ? handleTableCheckbox(row, id, isChecked)
                  : null
              }
            />
          </Cell>
        )}
        {row && row.map((tablerow) => <Cell key={tablerow}>{tablerow}</Cell>)}
      </React.Fragment>
    </tr>
  );
};

export const Table: FunctionComponent<TableProps> = ({
  name,
  headings,
  rows,
  checkboxes,
  ...props
}) => {
  interface SelectedRow {
    row: string[];
    id: number;
  }

  const [selectedRows, setSelectedRows] = useState<Array<SelectedRow>>([]);
  const handleTableCheckbox = (
    row: Array<string>,
    key: number,
    isChecked: boolean
  ) => {
    !isChecked
      ? setSelectedRows([...selectedRows, { id: key, row }])
      : setSelectedRows(selectedRows.filter((item) => item.id !== key));
  };

  const getSelectedRows = (rows: Array<SelectedRow>) => console.log(rows);

  return (
    <React.Fragment>
      <TableWrapper {...props}>
        <table className={name}>
          <thead>
            <HeadingRow headings={headings} isCheckable={checkboxes} />
          </thead>
          <tbody>
            {rows &&
              rows.map((row, index) => {
                const isChecked = selectedRows.some(
                  (selectedRow) => selectedRow.id === index
                );
                return (
                  <Row
                    key={index}
                    isChecked={isChecked}
                    row={row}
                    id={index}
                    isCheckable={checkboxes}
                    handleTableCheckbox={handleTableCheckbox}
                  />
                );
              })}
          </tbody>
        </table>
        {checkboxes && (
          <Button
            children={"Get Selected"}
            onClick={() =>
              getSelectedRows ? getSelectedRows(selectedRows) : null
            }
          />
        )}
      </TableWrapper>
    </React.Fragment>
  );
};
