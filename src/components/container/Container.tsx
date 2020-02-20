import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-family: ${theme.fontFamily.regular};
  font-weight: ${theme.fontWeights.regular};
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Flex = styled(Container)`
  display: flex;
`;
