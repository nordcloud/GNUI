import React from "react";
import styled from "styled-components";
import { icons } from "../../utils/icons";

interface IconProps {
  image: string;
  width: string;
  height: string;
  inline: boolean;
}

const svgToMiniDataURI = require('mini-svg-data-uri');

const StyledIcon = styled.div<IconProps>`
  display: ${props => (props.inline ? "inline-block" : "ś")};
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url("${props => svgToMiniDataURI(icons[props.image])}");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Icon: React.FC<IconProps> = props => {
  return <StyledIcon {...props}></StyledIcon>;
};
