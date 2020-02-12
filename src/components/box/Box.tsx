import styled from "styled-components";
import theme from "../../theme";

interface BoxProps {
  children: string;
}

export const Box = styled.div<BoxProps>`
  background-color: ${theme.colors.light};
  border: none;
  padding: 1.25rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.1s linear;
  box-shadow: 0px 0.125rem 0.25rem rgba(31, 30, 47, 0.099);
  border-radius: 0.375rem;
`;
