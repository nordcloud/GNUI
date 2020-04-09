import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import theme from "../../theme";

export interface CellProps {
    id?: string;
    className?: string;
    header?:boolean;
    children?: string | number | any;
    onClick?: (e: React.MouseEvent) => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface HeadingRowProps {
    name?: string;
    headings: Array<string>;
    children?: string | number | any;
}

export interface RowProps {
    name?: string;
    row: Array<string>;
    children?: string | number | any;
}

export interface TableProps {
    name?: string;
    headings: Array<string>;
    rows: Array<Array<string>>;
    children?: string | number | any;
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
    headings
}) => (
    <tr>
        {
            headings && headings.map((heading : string) => (
                <Cell key={heading} header={true}>{heading}</Cell>
            ))
        }
    </tr>
);

export const Row: FunctionComponent<RowProps> = ({ 
    row
}) => (
    <tr>
        {
            row && row.map((tablerow) => (
                <Cell key={tablerow}>{tablerow}</Cell>
            ))
        }
    </tr>
);

export const Table: FunctionComponent<TableProps> = ({
    name,
    headings,
    rows,
    ...props
}) => {
    return(
        <TableWrapper {...props}>
            <table className={name}>
                <thead><HeadingRow headings={headings}/></thead>
                <tbody>
                    {
                        rows && rows.map((row) => (
                            <Row row={row}/>
                        ))
                    }
                </tbody>
            </table>
        </TableWrapper>
    )
}
