import React from "react";
import styled from "styled-components";
import { icons } from "../../utils/icons";

interface IconProps {
  image: string;
  width: string;
  height: string;
}

const StyledIcon = styled.div<IconProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url("${props => icons[props.image]}");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Icon: React.FC<IconProps> = props => {
  return <StyledIcon {...props}></StyledIcon>;
};
