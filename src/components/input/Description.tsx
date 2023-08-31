import * as React from "react";
import { styled } from "styled-components";
import theme from "../../theme";
import { GnuiContainer } from "../container";

const StyledDescription = styled(GnuiContainer)`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.color.text.text02};
  margin: ${theme.spacing.spacing02} 0;
  width: 100%;
`;

type Props = {
  children: React.ReactNode;
};

export function Description({ children }: Props) {
  return <StyledDescription>{children}</StyledDescription>;
}
