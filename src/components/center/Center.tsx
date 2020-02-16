import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
`;

export const Center: FunctionComponent = ({ children }) => (
  <StyledDiv>{children}</StyledDiv>
);
