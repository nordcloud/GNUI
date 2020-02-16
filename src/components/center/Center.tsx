import React from "react";
import styled from "styled-components";

interface DivProps {
  children: string;
  margin?: number | string;
}

const StyledDiv = styled.div<DivProps>`
  letter-spacing: 0.05rem;
  margin: ${props => (props.margin ? props.margin : "0rem 2rem")};
`;

export const Center: React.FC<DivProps> = props => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};
