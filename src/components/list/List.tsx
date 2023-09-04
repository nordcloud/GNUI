import * as React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";

type StyledListProps = {
  horizontal?: boolean;
  unordered?: boolean;
  hasDescription?: boolean;
  spacing?: string;
};

type INestedListItem = StyledListProps & {
  description?: number | string;
  title: number | string;
  rowChildren?: IListItem[];
};

type IListItem = (number | string)[] | INestedListItem;

type IListProps = StyledListProps & {
  items?: IListItem[];
};

const StyledListItemTitle = styled.span`
  width: 11.25rem;
  color: ${theme.color.text.text02};
`;

const StyledListMarker = css`
  content: "";
  border-radius: 1px;
  width: 8px;
  min-width: 8px;
  height: 8px;
  margin: ${theme.spacing.spacing02};
  background-color: ${theme.color.text.text01};
`;

const StyledList = styled.ul<StyledListProps>`
  list-style: none;
  padding-left: ${theme.spacing.spacing05};
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? `row` : `column`)};
  ${space}
`;

const getListSpacing = (props: StyledListProps): string => {
  if (props.horizontal) {
    return props.spacing ?? `0 ${theme.spacing.spacing04} 0 0`;
  }

  return props.spacing ?? `0 0 ${theme.spacing.spacing02} 0`;
};

const StyledListItem = styled.li<StyledListProps>`
  font-family: ${theme.fonts.body};
  display: flex;
  margin: ${(props) => getListSpacing(props)};
  color: ${theme.color.text.text01};
  line-height: ${theme.typography.lineHeight};

  ${(props: StyledListProps) =>
    props.unordered
      ? css`
          &:before {
            ${StyledListMarker}
          }
        `
      : ``}
`;

const isNested = (item: IListItem): item is INestedListItem =>
  (item as INestedListItem).title !== undefined;

export function List(props: IListProps & SpaceProps) {
  return (
    <StyledList {...props}>
      {props.items?.map((item, index) => {
        // Nested object
        if (isNested(item)) {
          return (
            <React.Fragment key={`id-${index}`}>
              <ListItem {...props} {...item} key={index} />
              <List
                horizontal={props.horizontal}
                unordered={props.unordered}
                items={item.rowChildren}
              />
            </React.Fragment>
          );
        }

        // List of strings or numbers
        return (
          <StyledListItem key={index} {...props}>
            {item}
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}

function ListItem(props: INestedListItem): JSX.Element {
  return (
    <StyledListItem
      horizontal={props.horizontal || false}
      unordered={props.unordered || false}
    >
      {props.hasDescription ? (
        <>
          <StyledListItemTitle>{props.title}</StyledListItemTitle>
          <span>{props.description}</span>
        </>
      ) : (
        <span>{props.title}</span>
      )}
    </StyledListItem>
  );
}
