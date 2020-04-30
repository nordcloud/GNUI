import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Text } from "../text";
import { Grid, Row, Column } from "../grid";
import theme from "../../theme";

interface StyleguideProps {
  colors?: Array<string | number | any>;
  description?: string;
  name?: string;
}

const ColorPaletteWrapper = styled((props) => <Grid {...props} />)`
  padding: 0;
  text-rendering: optimizelegibility;
  border: ${theme.borders.default};
  border-radius: ${theme.radius.default};
  box-shadow: ${theme.shadow.shadow04};
`;

const ColorBox = styled((props) => <Row {...props} />)<{ color: any }>`
  align-items: center;
  justify-content: space-between;
  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}
`;

const ColorColumn = styled((props) => <Column {...props} />)<{
  darkText?: boolean;
}>`
  flex: 1 1 0%;
  padding: 1rem 2.5rem;
  color: ${theme.colors.white};
  & > * {
    ${({ darkText }) =>
      darkText &&
      css`
        color: ${theme.colors.primary};
      `}
  }
`;

export const Styleguide: FunctionComponent<StyleguideProps> = ({
  colors,
  description,
  name,
}) => (
  <ColorPaletteWrapper>
    {colors &&
      colors.map((color, index) => (
        <ColorBox
          color={theme.colors[color.toLowerCase()] || color}
          key={`${color}$-{index}`}
        >
          <ColorColumn
            justifyContent="flex-start"
            darkText={name === "lights" && true}
          >
            <Text>{color.charAt(0) !== "#" ? color : `${name}[${index}]`}</Text>
          </ColorColumn>
          {description && (
            <ColorColumn
              justifyContent="center"
              darkText={name === "lights" && true}
            >
              <Text>{description}</Text>
            </ColorColumn>
          )}
          <ColorColumn
            justifyContent="flex-end"
            darkText={name === "lights" && true}
          >
            <Text small>{theme.colors[color.toLowerCase()] || color}</Text>
          </ColorColumn>
        </ColorBox>
      ))}
  </ColorPaletteWrapper>
);
