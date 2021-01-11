import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled("div")`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zindex.sticky};
  max-width: 100%;
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.snowWhite};
`;

export const StickyBar: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};