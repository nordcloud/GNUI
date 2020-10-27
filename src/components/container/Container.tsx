import React, { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";

export type ContainerProps = {
  width?: string;
  children: ReactNode;
  margin?: string;
  [propName: string]: string | any;
};

const StyledContainer = styled.div<ContainerProps & SpaceProps>`
  box-sizing: border-box;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.md};
  border-radius: ${theme.radiusDefault};
  width: ${(props) => props.width || "100%"};
  ${space};
`;

export const Container: FunctionComponent<
  ContainerProps & SpaceProps
> = React.forwardRef(({ children, ...props }, ref) => (
  <StyledContainer {...props} ref={ref}>
    {children}
  </StyledContainer>
));

export const Flex = styled(Container)`
  display: flex;
  ${(props) => css`
    align-items: ${props.alignItems || "center"};
    justify-content: ${props.justifyContent || "flex-start"};
    margin: ${props.margin};
  `}
  ${space}
`;
