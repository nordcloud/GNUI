import * as React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";
import { LengthUnitSuffix, Unit } from "./types";

type StyledContainerProps = {
  width?: string;
} & SpaceProps;

const StyledContainer = styled.div<StyledContainerProps>`
  box-sizing: border-box;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.md};
  border-radius: ${theme.radiusDefault};
  width: ${(props) => props.width || "100%"};

  ${space};
`;

export type ContainerProps = React.ComponentProps<typeof StyledContainer>;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => (
    <StyledContainer {...props} ref={ref}>
      {children}
    </StyledContainer>
  )
);

type FlexProps = {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  margin?: string;
} & SpaceProps;

/**
 * @deprecated Please use FlexContainer
 */
export const Flex = styled(Container)<FlexProps>`
  display: flex;

  ${(props) => css`
    align-items: ${props.alignItems || "center"};
    justify-content: ${props.justifyContent || "flex-start"};
    flex-direction: ${props.flexDirection || "row"};
    margin: ${props.margin} ?? 0;
  `}

  ${space}
`;

// New implementation of FlexContainer to replace Flex in the future.
type FlexContainerProps = {
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start"
    | "end"
    | "self-start"
    | "self-end";
  alignContent?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start"
    | "end"
    | "self-start"
    | "self-end";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  grow?: number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: Unit<LengthUnitSuffix> | "0" | 0;
  columnGap?: Unit<LengthUnitSuffix> | "0" | 0;
  rowGap?: Unit<LengthUnitSuffix> | "0" | 0;
} & SpaceProps;

function getFlexCss(props: FlexContainerProps) {
  return css`
    align-items: ${props.alignItems ?? "center"};
    align-content: ${props.alignContent ?? "center"};
    justify-content: ${props.justifyContent ?? "flex-start"};
    flex-wrap: ${props.wrap ?? "nowrap"};
    flex-direction: ${props.direction ?? "row"};
    flex-grow: ${props.grow};
    gap: ${props.gap};
    column-gap: ${props.columnGap};
    row-gap: ${props.rowGap};
  `;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${getFlexCss}

  ${space}
`;
