import { createBreakpoint, createMap } from "styled-components-breakpoint";

type Colors = {
  darks: Array<string>;
  lights: Array<string>;
  [color: string]: string | any;
};

type Typography = {
  fonts: { [font: string]: string };
  fontWeights: Array<number>;
  fontSizes: Array<string>;
  lineHeight: string;
};

type Radius = { [key: string]: string };

type Shadow = { [key: string]: string };

type Borders = { [key: string]: string };

type Transition = string | { transition: string };

type Breakpoints = {
  [bp: string]: number;
};

type ZIndex = {
  [zIndex: string]: number | any;
};

type IconSize = { [key: string]: string };

export interface ThemeInterface {
  colors: Colors;
  typography: Typography;
  borders: Borders;
  radius: Radius;
  shadow: Shadow;
  transition: Transition;
  breakpoints: Breakpoints;
  zindex: ZIndex;
  [aliases: string]: any;
  iconSize: IconSize;
}

const theme: ThemeInterface = {
  colors: {
    primary: "#161632",
    accent: "#FF2837",
    danger: "#e74c3c",
    success: "#27ae60",
    warning: "#f39c12",
    notification: "#3498db",
    black: "#212129",
    white: "#fcfcfd",
    snowwhite: "#ffffff",
    actions: ["#FF2837", "#e74c3c", "#27ae60", "#f39c12", "#3498db"],
    darks: ["#212129", "#32323f", "#444454", "#5e5e75", "#7a7a94"],
    lights: ["#fcfcfd", "#f1f1f4", "#e7e7eb", "#d1d1da", "#bbbbc9"],
    statusDanger: ["#F5B7B1", "#E74C3C", "#B03A2E", "#943126"],
    statusSuccess: ["#A9DFBF", "#27AE60", "#1E8449", "#196F3D"],
    statusWarning: ["#FAD7A0", "#F39C12", "#B9770E", "#9C640C"],
    statusNotification: ["#AED6F1", "#3498DB", "#2874A6", "#21618C"],
  },

  typography: {
    fonts: {
      body: "Rubik, sans-serif",
      heading: "Rubik, sans-serif"
    },
    fontSizes: ["0.625rem",  "0.75rem", "1rem", "1.25rem", "1.5rem", "2rem"],
    fontWeights: [400, 500, 700],
    lineHeight: "1.5em",
  },

  borders: {
    default: "1px solid #161632",
    medium: "2px solid #161632",
    bold: "4px solid #161632",
    grey: "1px solid #e7e7eb",
    disabled: "1px solid #d1d1da",
    darkenGrey: "1px solid #bbbbc9",
    dark: "1px solid #32323f",
    success: "1px solid #27ae60",
    danger: "1px solid #e74c3c",
    warning: "1px solid #f39c12",
    notification: "1px solid #3498db",
    transparent: "1px solid transparent",
  },

  radius: {
    small: "2px",
    default: "4px",
    large: "6px",
  },

  shadow: {
    shadow01: "0 1px 3px rgba(31, 30, 47, 0.1)",
    shadow02: "0 3px 6px rgba(31, 30, 47, 0.1)",
    shadow03: "0 8px 20px rgba(31, 30, 47, 0.12)",
    shadow04: "0 12px 22px rgba(31, 30, 47, 0.18)",
  },

  spacing: {
    spacing00: "0",
    spacing01: "0.25rem",
    spacing02: "0.5rem",
    spacing03: "0.75rem",
    spacing04: "1rem",
    spacing05: "1.25rem",
    spacing06: "1.5rem",
    spacing07: "2rem",
    spacing08: "2.5rem",
  },

  zindex: {
    topoftheworld: 9999,
    popup: 9000,
    modal: 8000,
    overlay: 7000,
    dropdown: 6000,
    sticky: 2000,
    masked: 1000,
    default: 1,
    zero: 0,
    deep: -9999,
  },

  transition: "all 0.2s linear",

  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },

  iconSize: {
    sm: "0.875rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "5rem",
  },

  opacity: 0.7,
};

/** ALIASES */
theme.fontWeights = theme.typography.fontWeights;
theme.fontSizes = theme.typography.fontSizes;
theme.fonts = theme.typography.fonts;
theme.lineHeight = theme.typography.lineHeight;

/** Font-weights */
theme.fontWeights.regular = theme.fontWeights[0];
theme.fontWeights.medium = theme.fontWeights[1];
theme.fontWeights.bold = theme.fontWeights[2];

// Font-sizes
theme.fontSizes.xs = theme.fontSizes[0];
theme.fontSizes.sm = theme.fontSizes[1];
theme.fontSizes.md = theme.fontSizes[2];
theme.fontSizes.lg = theme.fontSizes[3];
theme.fontSizes.xl = theme.fontSizes[4];
theme.fontSizes.xxl = theme.fontSizes[5];

// Borders & Radius
theme.borderDefault = theme.borders.default;
theme.borderInput = theme.borders.darkenGrey;
theme.radiusDefault = theme.radius.default;

export const { breakpoints, spacings, paddings } = theme;
export const bp = createBreakpoint(breakpoints);
export const map = createMap(breakpoints);

export default theme;
