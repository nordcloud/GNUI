import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Text } from "../../components/text";
import { Grid, Row, Column } from "../../components/grid";
import theme from "../../theme";

interface StyleguideProps {
  colors?: Array<string | number | any>;
}

const ColorPaletteWrapper = styled(Grid)`
  padding: 0;
  width: 100%;
  text-rendering: optimizelegibility;
  border: ${theme.borders.default};
  border-radius: ${theme.radius.default};
  color: ${theme.colors.white};
  box-shadow: 0px 2px 12px ${theme.colors.darks[4]};
`;

const ColorBox = styled(Row)<{ color: any }>`
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: ${theme.colors.white};
  min-height: 7rem;
  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}
`;

const ColorColumn = styled(Column)`
  flex: 1 1 0%;
  padding: 1rem;
  & > * {
    color: ${theme.colors.white};
  }
`;

export const Styleguide: FunctionComponent<StyleguideProps> = ({ colors }) => (
  <ColorPaletteWrapper>
    {colors &&
      colors.map((color) => (
        <ColorBox
          color={theme.colors[color.toLowerCase()] || color}
          key={color}
        >
          <ColorColumn>
            <Text size={3}>{color}</Text>
          </ColorColumn>
          <ColorColumn>
            <Text>{theme.colors[color.toLowerCase()] || color}</Text>
          </ColorColumn>
        </ColorBox>
      ))}
  </ColorPaletteWrapper>
);
