import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Text } from "../text";
import { Container, Row, Col } from "../../index";
import theme from "../../theme";

interface StyleguideProps {
  colors?: Array<string | number | any>;
  description?: string;
  name?: string;
}

const ColorPaletteWrapper = styled((props) => <Container {...props} />)`
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

const ColorColumn = styled((props) => <Col {...props} />)<{
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
            justify="flex-start"
            darkText={name === "lights" && true}
          >
            <Text>{color.charAt(0) !== "#" ? color : `${name}[${index}]`}</Text>
          </ColorColumn>
          {description && (
            <ColorColumn
              justify="center"
              darkText={name === "lights" && true}
            >
              <Text>{description}</Text>
            </ColorColumn>
          )}
          <ColorColumn
            justify="flex-end"
            darkText={name === "lights" && true}
          >
            <Text size="sm">{theme.colors[color.toLowerCase()] || color}</Text>
          </ColorColumn>
        </ColorBox>
      ))}
  </ColorPaletteWrapper>
);
