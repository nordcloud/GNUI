import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

type ContainerProps = {
  width?: string;
  children?: string;
  [propName: string]: string | any;
};

const StyledContainer = styled.div<ContainerProps>`
  box-sizing: border-box;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.regular};
  line-height: ${theme.lineHeight};
  border-radius: ${theme.borderRadius};
  ${({ width }) =>
    width &&
    css`
      width: ${width || "100%"};
    `}
`;

export const Container: FunctionComponent<ContainerProps> = ({
  children,
  ...props
}) => <StyledContainer {...props}>{children}</StyledContainer>;

export const Flex = styled(Container)`
  display: flex;
`;
