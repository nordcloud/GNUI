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
