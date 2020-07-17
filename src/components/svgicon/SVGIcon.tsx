import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { getViewBox } from "../../utils/svgicons";
import { getPath } from "../../utils/svgicons";

export interface SVGIconProps {
  name: string;
  color?: "success" | "danger" | "warning" | "notification" | "white";
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
}

const StyledSVGIcon = styled.svg<SVGIconProps>`
  fill: ${theme.colors.primary};
  width: ${theme.iconSize.md};
  height: ${theme.iconSize.md};
  [x: string]: any;

  ${({ color }) =>
    color &&
    css`
      fill: ${theme.colors[color]};
    `}

  ${({ size }) =>
    size &&
    css`
      width: ${theme.iconSize[size]};
      height: ${theme.iconSize[size]};
    `}
`;

export const SVGIcon: React.FC<SVGIconProps> = ({ name, ...props }) => {
  const ViewBox = getViewBox(name);
  const Path = getPath(name);

  return (
    <StyledSVGIcon
      {...props}
      viewBox={ViewBox}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {Path}
    </StyledSVGIcon>
  );
};
