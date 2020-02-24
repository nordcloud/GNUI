import styled from "styled-components";
import { Container } from "../container";
import theme from "../../theme";
import { darken } from "polished";

export const Text = styled(Container)`
  color: palevioletred;
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};
  &:hover {
    color: ${darken(0.2, "palevioletred")};
  }
`;

export const Code = styled(Text)`
  /** Container? */
  font-family: ${theme.fonts.monospace};
`;
