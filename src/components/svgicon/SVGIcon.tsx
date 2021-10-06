import React, { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";
import { getViewBox, getPath, PathName } from "../../utils/svgicons";

export type SVGIconProps = HTMLAttributes<HTMLOrSVGElement> & {
  name: PathName;
  color?: SingleColors;
  size?: keyof typeof theme.iconSize;
};

const StyledSVGIcon = styled.svg<Pick<SVGIconProps, "color" | "size">>`
  fill: ${theme.color.text.text01};
  width: ${theme.iconSize.md};
  height: ${theme.iconSize.md};

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
  const Path = React.useMemo(() => getPath(name), [name]);

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
