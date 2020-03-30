import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface FlexProps {
  children?: any;
  className?: string;
  display?: "block" | "flex";
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  flex?: string;
  padding?: string;
  margin?: string;
  cols?: number;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  span?: number;
  order?: number;
}

const basicFlexStyles = (props: { color?: string }) => css`
  color: ${props.color || theme.colors.primary};
  letter-spacing: 0.0525rem;
`;

const StyledFlex = styled.div<FlexProps>`
  ${basicFlexStyles};
  ${props =>
    props &&
    css`
      display: ${props.display || "flex"};
      justify-content: ${props.justifyContent || "space-between"};
      flex-direction: ${props.flexDirection || "row"};
      flex-grow: ${props.flexGrow || 0};
      flex-basis: ${props.flexBasis || "auto"};
      flex-shrink: ${props.flexShrink || 1};
      flex-wrap: ${props.flexWrap || "wrap"};
      flex: ${props.flex || "0 1 auto"};
      align-items: ${props.alignItems || "stretch"};
      align-content: ${props.alignContent || "center"};
      margin: ${props.margin || 0};
      padding: ${props.padding || "0"};
      width: ${props.cols || "100%"};
      height: ${props.height || "auto"};
      max-width: ${props.maxWidth || "none"};
      order: ${props.order && props.order};
    `}
`;

export const Grid: FunctionComponent = ({ children, ...props }) => (
  <StyledFlex {...props}>{children}</StyledFlex>
);

export const Row = styled(StyledFlex)`
  ${({ flexGrow }) =>
    flexGrow &&
    css`
      & > * {
        flex-grow: ${flexGrow};
      }
    `}
`;

export const Column = styled(StyledFlex)`
  @media (min-width: 768px) {
    flex-grow: 1;
    width: min-content;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }

  ${({ cols }) =>
    cols &&
    css`
      @media (max-width: 768px) {
        flex-basis: 100%;
        max-width: 100%;
      }
      @media (min-width: 768px) {
        flex-basis: calc(8.3% * ${cols});
        max-width: calc(8.3% * ${cols});
      }
    `};
`;
