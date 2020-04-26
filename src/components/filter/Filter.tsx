import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import { Grid, Row, Column, Box, Button, DropdownIcon, Icon } from "..";
import theme from "../../theme";

const filterBackground = theme.colors.lights[2];

const FilterButton = styled(Button) <{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  background-color: ${filterBackground};
  justify-content: space-between;

  ${({ isOpen }) => isOpen && css`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

const Spacer = styled.div`
  width: 100%;
  max-height: 100%;
  min-height: 1rem;
  height: 100%;
  background-color: ${filterBackground};
`;

const FilterColumn = styled(Column)`
  margin-bottom: 0;
  overflow: visible;
`;

const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  
  div {
    margin-right: ${theme.spacing.spacing02}
  }
`;

const FilterContent = styled(Box) <{ hasComponent?: boolean }>`
  background: ${filterBackground};
  box-shadow: none;
  margin-left: ${theme.spacing.spacing02};
  margin-right: ${theme.spacing.spacing02};
  margin-top: 0;
  border-top-left-radius: 0;

  ${({ hasComponent }) => !hasComponent && css`
    border-top-right-radius: 0;
  `}
`;

interface IFilter {
  children: React.ReactNode;
  isFilterOpen?: boolean;
  accompanyingComponent?: React.ReactElement;
  label: string;
}

export const Filter: FunctionComponent<IFilter> = ({
  children,
  label,
  isFilterOpen,
  accompanyingComponent
}) => {
  const [isOpen, setOpen] = useState(isFilterOpen || false)
  const filterSize = accompanyingComponent ? { xs: 6, sm: 5, lg: 2 } : 12

  return (
    <Grid>
      <Row>
        <FilterColumn
          size={filterSize}
          style={{ textAlign: "left" }}
        >
          <FilterButton isOpen={isOpen} severity="medium" onClick={() => setOpen(!isOpen)}>
            <FilterTitle>
              <Icon
                width="1rem"
                height="1rem"
                image="FILTER"
              />
              {label}
            </FilterTitle>
            <DropdownIcon
              width="0.75rem"
              height="0.75rem"
              image="ARROW_BOTTOM"
              animate={isOpen && true}
            />
          </FilterButton>
          {isOpen && <Spacer />}
        </FilterColumn>
        {accompanyingComponent && (
          <Column size={{ sm: 8, lg: 10 }}>
            {accompanyingComponent}
          </Column>
        )}
      </Row>
      {isOpen && (
        <Row>
          <FilterContent hasComponent={!!accompanyingComponent} spacing="spacing01" padding="spacing04">{children}</FilterContent>
        </Row>
      )}
    </Grid>
  )
};