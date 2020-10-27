import React from "react";
import styled from "styled-components";
import { icons } from "../../utils/icons";
import { space, SpaceProps } from "styled-system";

const svgToMiniDataURI = require("mini-svg-data-uri");

const getIcon = (icon: string) =>
  icons[icon] ? svgToMiniDataURI(icons[icon]) : svgToMiniDataURI(icon);

export type IconProps = {
  image: string;
  width: string;
  height: string;
  inline?: boolean;
};

const StyledIcon = styled.div<IconProps & SpaceProps>`
  display: ${(props) => (props.inline ? "inline-block" : "")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url("${(props) => getIcon(props.image)}");
  background-size: cover;
  background-repeat: no-repeat;
  ${space}
`;

export const Icon: React.FC<IconProps & SpaceProps> = (props) => {
  return <StyledIcon {...props}></StyledIcon>;
};
