import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";
import { getPath, PathName } from "./paths";

const StyledSVGIcon = styled.svg<Pick<SVGIconProps, "color" | "size">>`
  fill: ${(props) => props.color || theme.color.text.text01};
  width: ${theme.iconSize.md};
  height: ${theme.iconSize.md};
  vertical-align: middle;

  ${({ color }) =>
    color &&
    css`
      fill: ${theme.colors[color as SingleColors] || color};
    `}

  ${({ size }) =>
    size &&
    css`
      width: ${theme.iconSize[size]};
      height: ${theme.iconSize[size]};
    `}
`;

const VIEW_BOX = "0 0 24 24";

type AnyString = Record<never, never> & string;
type SvgColor = AnyString | SingleColors;

export type SVGIconProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  name: PathName;
  color?: SvgColor;
  size?: keyof typeof theme.iconSize;
};

export function SVGIcon({ name, ...props }: SVGIconProps) {
  const Path = React.useMemo(() => getPath(name), [name]);

  return (
    <StyledSVGIcon
      color="currentColor"
      {...props}
      viewBox={VIEW_BOX}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {Path}
    </StyledSVGIcon>
  );
}
