import { createBreakpoint, createMap } from "styled-components-breakpoint";
import { palette } from "./palette";

type Colors = {
  darks: Array<string>;
  lights: Array<string>;
  [color: string]: string | any;
};

type Color = {
  background: { [key: string]: string };
  text: { [key: string]: string };
  border: { [key: string]: string };
  interactive: { [key: string]: string };
  support: { [key: string]: string };
  [key: string]: string | any;
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

export type ThemeInterface = {
  color: Color;
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
};

const theme: ThemeInterface = {
  color: {
    background: {
      body: palette.grey.grey300,
      ui01: palette.white,
      ui02: palette.grey.grey100,
      ui03: palette.grey.grey200,
      ui04: palette.grey.grey300,
      error: palette.red.red500,
      warning: palette.orange.orange500,
      success: palette.green.green500,
      information: palette.blue.blue600,
    },
    text: {
      primary: palette.darkBlue.darkBlue700,
      secondary: palette.grey.grey800,
      placeholder: palette.grey.grey700,
      invert: palette.white,
      error: palette.red.red700,
      warning: palette.orange.orange800,
      success: palette.green.green700,
      information: palette.blue.blue700,
    },
    border: {
      default: palette.grey.grey400,
      input: palette.grey.grey500,
      hover: palette.grey.grey700,
      focus: palette.grey.grey800,
      error: palette.red.red700,
    },
    interactive: {
      primary: palette.darkBlue.darkBlue700,
      primaryHover: palette.darkBlue.darkBlue800,
      primaryActive: palette.darkBlue.darkBlue800,
      secondary: palette.grey.grey300,
      secondaryHover: palette.grey.grey500,
      secondaryActive: palette.grey.grey600,
      link: palette.blue.blue800,
      linkInverse: palette.blue.blue200,
      error: palette.red.red600,
      errorHover: palette.red.red700,
      errorActive: palette.red.red800,
      success: palette.green.green600,
      successHover: palette.green.green700,
      successActive: palette.green.green800,
      info: palette.blue.blue600,
      infoHover: palette.blue.blue700,
      infoActive: palette.blue.blue800,
      disabled: palette.grey.grey300,
    },
    support: {
      red: palette.red.red500,
      redInverse: palette.red.red100,
      pink: palette.pink.pink500,
      purple: palette.purple.purple500,
      indigo: palette.indigo.indigo500,
      blue: palette.blue.blue500,
      blueInverse: palette.blue.blue100,
      cyan: palette.cyan.cyan500,
      teal: palette.teal.teal500,
      green: palette.green.green500,
      greenInverse: palette.green.green100,
      lightGreen: palette.lightGreen.lightGreen500,
      yellow: palette.yellow.yellow600,
      orange: palette.orange.orange500,
      orangeInverse: palette.orange.orange100,
    },
  },
  colors: {
    primary: "#161632",
    accent: "#FF2837",
    danger: "#e74c3c",
    success: "#27ae60",
    warning: "#f39c12",
    notification: "#3498db",
    black: "#212129",
    white: "#fcfcfd",
    snowWhite: "#ffffff",
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
      heading: "Rubik, sans-serif",
    },
    fontSizes: ["0.625rem", "0.75rem", "1rem", "1.25rem", "1.5rem", "2rem"],
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
    sm: "2px",
    md: "4px",
    lg: "6px",
    xl: "16px",
    xxl: "22px",
  },

  shadow: {
    shadow00: "none",
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

  transition: "all 0.26s ease-in-out",

  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
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
theme.radiusDefault = theme.radius.md;

export const { breakpoints, spacings, paddings } = theme;
export const bp = createBreakpoint(breakpoints);
export const map = createMap(breakpoints);

export default theme;
