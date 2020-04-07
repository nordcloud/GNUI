import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";

type ContainerProps = {
  width?: string;
  children?: string;
  margin?: string;
  [propName: string]: string | any;
};

const StyledContainer = styled.div<ContainerProps>`
  box-sizing: border-box;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.regular};
  border-radius: ${theme.borderRadius};
  max-width: ${props => props.width || "100%"};
`;

export const Container: FunctionComponent<ContainerProps> = ({
  children,
  ...props
}) => <StyledContainer {...props}>{children}</StyledContainer>;

export const Flex = styled(Container)`
  display: flex;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "flex-start"};
  margin: ${props => props.margin};
`;
