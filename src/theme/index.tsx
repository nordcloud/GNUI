import { createBreakpoint, createMap } from "styled-components-breakpoint";
import {
  borders,
  breakpoints,
  color,
  colors,
  iconSize,
  opacity,
  radius,
  shadow,
  spacing,
  transition,
  typography,
  zindex,
} from "./config";

const theme = {
  // Typograhpy
  fonts: typography.fonts,
  lineHeight: typography.lineHeight,
  fontWeights: {
    regular: typography.fontWeights[0],
    medium: typography.fontWeights[1],
    bold: typography.fontWeights[2],
  },
  fontSizes: {
    xs: typography.fontSizes[0],
    sm: typography.fontSizes[1],
    md: typography.fontSizes[2],
    lg: typography.fontSizes[3],
    xl: typography.fontSizes[4],
    xxl: typography.fontSizes[5],
  },
  typography,

  // Borders
  borderDefault: borders.default,
  borderInput: borders.darkenGrey,
  borders,

  // Radius
  radiusDefault: radius.md,
  radius,

  // Colors
  color,
  colors,

  shadow,

  transition,

  zindex,

  opacity,

  iconSize,

  breakpoints,

  spacing,
} as const;

export const bp = createBreakpoint(breakpoints);
export const map = createMap(breakpoints);

export default theme;
