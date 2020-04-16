import { createBreakpoint, createMap } from "styled-components-breakpoint";

type Colors = {
  darks: Array<string>;
  lights: Array<string>;
  [color: string]: string | any;
};

type Typography = {
  fontWeights: Array<number>;
  fontSizes: Array<string>;
  fonts: { [font: string]: string };
  lineHeight: string;
};

type Borders = { [key: string]: string | number | null };

type Transition = string | { transition: string };

type Breakpoints = {
  [bp: string]: number;
};

type Gutter = number;

type Spacings = Array<{ [name: string]: number }>;

type ZIndex = {
  [zIndex: string]: number | any;
}

export interface ThemeInterface {
  colors: Colors;
  typography: Typography;
  borders: Borders;
  transition: Transition;
  breakpoints: Breakpoints;
  margin: Gutter;
  padding: Gutter;
  spacings: Spacings;
  zindex: ZIndex;
  [aliases: string]: any;
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
    actions: ["#FF2837", "#e74c3c", "#27ae60", "#f39c12", "#3498db"],
    darks: ["#212129", "#32323f", "#444454", "#5e5e75", "#7a7a94"],
    lights: ["#fcfcfd", "#f1f1f4", "#e7e7eb", "#d1d1da", "#bbbbc9"],
  },

  typography: {
    fontWeights: [400, 500, 600, 700],
    fontSizes: ["0.75rem", "1rem", "1.3rem", "1.5rem"],
    fonts: {
      body: "Rubik, sans-serif",
      headers: "Montserrat, sans-serif",
      monospace: "Fira Code, monospace",
    },
    lineHeight: "1.5rem",
  },

  borders: {
    color: null,
    width: "0.0625rem",
    style: "solid",
    radius: "0.25rem",
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
    deep: -9999
  },

  transition: "all 0.2s linear",

  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },

  margin: 0.25,
  padding: 0.25,
  spacings: [{ xs: 0 }, { sm: 0.25 }, { md: 0.75 }, { lg: 1.5 }, { xl: 2.5 }],
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
theme.fontWeights.bolder = theme.fontWeights[3];

// Font-sizes
theme.fontSizes.small = theme.fontSizes[0];
theme.fontSizes.regular = theme.fontSizes[1];
theme.fontSizes.big = theme.fontSizes[2];
theme.fontSizes.large = theme.fontSizes[3];

// Borders
theme.borders.color = theme.colors.lights[4];
theme.borderColor = theme.borders.color;
theme.borderStyle = theme.borders.style;
theme.borderRadius = theme.borders.radius;

export const { breakpoints, margin, padding, spacings } = theme;
export const bp = createBreakpoint(breakpoints);
export const map = createMap(breakpoints);

export default theme;
