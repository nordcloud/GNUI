import styled from 'styled-components'
import theme from '../../theme'

export interface TableProps {
  hoverline?: boolean;
  striped?: boolean;
  small?: boolean;
}

const Table: any = styled.table<TableProps>`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    font-weight: ${theme.fontWeights.regular};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.regular};
    line-height: 1.5em;
    color: ${theme.colors.primary};
    
    tbody {
      tr {
        &:hover {
          cursor: ${({ hoverline }) => (hoverline ? 'pointer' : 'default')};
          background-color: ${({ hoverline }) => (hoverline ? theme.colors.lights[1] : 'none')};
          }
          &:nth-child(odd) {
            background-color: ${({ striped }) => (striped ? theme.colors.lights[0] : 'none')};
            &:hover {
              background-color: ${({ hoverline }) => (hoverline ? theme.colors.lights[1] : 'none')};
            }
          } 
        }
      }
    }
    tbody, thead {
      td {
        padding: ${({ small }) =>
          small ? `${theme.spacing.spacing02} ${theme.spacing.spacing03}` : `${theme.spacing.spacing03}`};
        }
        th {
          padding: ${({ small }) =>
          small ? `${theme.spacing.spacing02} ${theme.spacing.spacing03}` : `${theme.spacing.spacing03}`};
          }
        }
      }
    }
`;

const Thead = styled.thead`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const Tbody = styled.tbody``;

const Td = styled.td<any>`
  border-top: 1px solid ${theme.colors.lights[2]};
`;

const Tr = styled.tr<any>``;

const Th = styled.th<any>``;

Table.thead = Thead;
Table.tbody = Tbody;
Table.td = Td;
Table.tr = Tr;
Table.th = Th;

export default Table
