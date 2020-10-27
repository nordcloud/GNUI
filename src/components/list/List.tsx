import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { space, SpaceProps } from "styled-system";

type StyledListProps = {
  horizontal?: boolean;
  unordered?: boolean;
  hasDescription?: boolean;
  spacing?: string;
};

type INestedListItem = {
  description?: string | number;
  title: string | number;
  rowChildren?: IListItem[];
} & StyledListProps;

type IListItem = Array<string | number> | INestedListItem;

type IListProps = {
  items?: IListItem[];
} & StyledListProps;

const StyledListItemTitle = styled.span`
  width: 11.25rem;
  color: ${theme.colors.darks[3]};
`;

const StyledListMarker = css`
  content: "";
  border-radius: 1px;
  width: 8px;
  height: 8px;
  margin: ${theme.spacing.spacing02};
  background-color: ${theme.colors.primary};
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: ${theme.spacing.spacing05};
  display: flex;
  flex-direction: ${(props: StyledListProps) =>
    props.horizontal ? `row` : `column`};
  ${space}
`;

const getListSpacing = (props: StyledListProps): string => {
  if (props.horizontal) {
    return props.spacing ? props.spacing : `0 ${theme.spacing.spacing04} 0 0`;
  }

  return props.spacing ? props.spacing : `0 0 ${theme.spacing.spacing02} 0`;
};

const StyledListItem = styled.li`
  font-family: ${theme.fonts.body};
  display: flex;
  margin: ${(props: StyledListProps) => getListSpacing(props)};
  color: ${theme.colors.primary};
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

export const List: FunctionComponent<IListProps & SpaceProps> = (
  props
): JSX.Element => {
  return (
    <StyledList {...props}>
      {props.items &&
        props.items.map((item, idx) => {
          // Nested object
          if (isNested(item)) {
            return (
              <React.Fragment key={`id-${idx}`}>
                <ListItem {...props} {...item} key={idx} />
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
            <StyledListItem key={idx} {...props}>
              {item}
            </StyledListItem>
          );
        })}
    </StyledList>
  );
};

const ListItem: FunctionComponent<INestedListItem> = (props): JSX.Element => (
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
