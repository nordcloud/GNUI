import * as React from "react";
import { css, styled } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";
import { LengthUnitSuffix, Unit } from "./types";

type StyledContainerProps = SpaceProps & {
  width?: string;
};

const StyledContainer = styled.div<StyledContainerProps>`
  box-sizing: border-box;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.md};
  border-radius: ${theme.radiusDefault};
  width: ${(props) => props.width || "100%"};

  ${space};
`;

export type ContainerProps = React.ComponentPropsWithRef<
  typeof StyledContainer
>;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => (
    <StyledContainer {...props} ref={ref}>
      {children}
    </StyledContainer>
  )
);

type FlexProps = SpaceProps & {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  margin?: string;
};

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
type FlexContainerProps = SpaceProps & {
  alignItems?:
    | "baseline"
    | "center"
    | "end"
    | "first baseline"
    | "flex-end"
    | "flex-start"
    | "last baseline"
    | "self-end"
    | "self-start"
    | "start"
    | "stretch";
  alignContent?:
    | "baseline"
    | "center"
    | "end"
    | "first baseline"
    | "flex-end"
    | "flex-start"
    | "last baseline"
    | "self-end"
    | "self-start"
    | "start"
    | "stretch";
  justifyContent?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "left"
    | "right"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start";
  grow?: number;
  wrap?: "nowrap" | "wrap-reverse" | "wrap";
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
  gap?: Unit<LengthUnitSuffix> | "0" | 0;
  columnGap?: Unit<LengthUnitSuffix> | "0" | 0;
  rowGap?: Unit<LengthUnitSuffix> | "0" | 0;
  popup?: boolean;
};

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
