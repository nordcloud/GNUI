import styled from "styled-components";
import theme from "../../theme";
import { Container } from "../container";
import { lighten } from "polished";

export const Box = styled(Container)`
  padding: 1.25rem;
  margin: 0.25rem;
  background: ${theme.colors.lights[0]};
  font-weight: ${theme.fontWeights.medium};
  box-shadow: 0 0.05rem 0.25rem ${lighten(0.7, theme.colors.darks[1])};
  transition: ${theme.transition};
`;
