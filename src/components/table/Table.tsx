import React, { FunctionComponent, useState } from 'react';
import styled from "styled-components";
import theme from "../../theme";
import { Checkbox } from "../checkbox";
import { Button } from "../button";

export interface CellProps {
    id?: string;
    className?: string;
    header?:boolean;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface HeadingRowProps {
    name?: string;
    headings: Array<string>;
    isCheckable?:boolean;
    children?: React.ReactNode;
}

export interface RowProps {
    id: number;
    name?: string;
    row: Array<string>;
    isCheckable?:boolean;
    isSelected?:boolean;
    handleTableCheckbox?: (row:any, event: React.FormEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}

export interface TableProps {
    name?: string;
    headings: Array<string>;
    rows: Array<Array<string>>;
    checkboxes?:boolean;
    getSelectedRows?:(rows:any) => void;
    children?: React.ReactNode;
}

const TableWrapper = styled.div`
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
                background-color: ${props => (props.hoverline ? theme.colors.lights[1] : "none")};
            }
            &:nth-child(even) {
                background-color: ${props => (props.striped ? theme.colors.lights[0] : "none")};
                &:hover {
                    background-color: ${props => (props.hoverline ? theme.colors.lights[1] : "none")};
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
        td, th {
            padding: ${props => (props.small ? "0.5rem 0.75rem" : "0.75rem")};
        }
    }
`;

export const Cell: FunctionComponent<CellProps> = ({ 
    header,
    children
}) => {
    const cellMarkup = header ? (
    <th>{children}</th>
    ) : (
    <td>{children}</td>
    );
    return (cellMarkup);
}

export const HeadingRow: FunctionComponent<HeadingRowProps> = ({ 
    headings,
    isCheckable,
    children
}) => (
    <tr>
        <React.Fragment>
            {isCheckable && <Cell header>{children}</Cell>}
            {
                headings && headings.map((heading : string) => (
                    <Cell key={heading} header>{heading}</Cell>
                ))
            }
        </React.Fragment>
    </tr>
);

export const Row: FunctionComponent<RowProps> = ({ 
    id,
    row,
    isCheckable,
    handleTableCheckbox,
    isSelected
}) => (
    <tr key={id}>
        <React.Fragment>
            {isCheckable && 
            <Cell>
                <Checkbox name={" "} checked={isSelected} onChange={handleTableCheckbox ? (e) => handleTableCheckbox({row, id}, e.target.checked) : undefined}/>
            </Cell>}
            {
                row && row.map((tablerow) => (
                    <Cell key={tablerow}>{tablerow}</Cell>
                ))
            }
        </React.Fragment>
    </tr>
);

export const Table: FunctionComponent<TableProps> = ({
    name,
    headings,
    rows,
    getSelectedRows,
    checkboxes,
    ...props
}) => {
    interface SelectedRow {
        id: number;
        row: any;
    };

    const [selectedRows, setSelectedRows] = useState<SelectedRow | []>([]);
    const handleTableCheckbox = (selectedRow: SelectedRow, checked: boolean) => {
        const newSelectedRows = [...selectedRows, selectedRow];
        if (checked) {
            setSelectedRows(newSelectedRows);
        } else {
            newSelectedRows.splice(selectedRow.id);
            setSelectedRows(newSelectedRows);
        }
        console.log(newSelectedRows);
    };
     
    return(
        <React.Fragment>
            <TableWrapper {...props}>
                <table className={name}>
                    <thead><HeadingRow headings={headings} isCheckable={checkboxes} /></thead>
                    <tbody>
                        {
                            rows && rows.map((row, index) => {
                                const isSelected = selectedRows.some(selectedRow => selectedRow.id === index)
                                return(
                                    <Row isSelected={isSelected} row={row} id={index} isCheckable={checkboxes} handleTableCheckbox={handleTableCheckbox}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </TableWrapper>
            {
                getSelectedRows && <Button children={"string"} onClick={() => getSelectedRows(selectedRows)} />
            }
        </React.Fragment>
    )
}
