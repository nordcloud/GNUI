import * as React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";

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

// New implementation of Flex container to replace Flex in future.
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
  gap?: string;
};

function getFlexCss(props: FlexContainerProps) {
  return css`
    align-items: ${props.alignItems || "center"};
    align-content: ${props.alignContent || "center"};
    justify-content: ${props.justifyContent || "flex-start"};
    flex-wrap: ${props.wrap || "no-wrap"};
    flex-direction: ${props.direction || "row"};
    flex-grow: ${props.grow || 0};
    gap: ${props.gap || "0"};
  `;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${getFlexCss}
`;
