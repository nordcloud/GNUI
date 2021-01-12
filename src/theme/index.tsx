import { createBreakpoint, createMap } from "styled-components-breakpoint";

type Colors = {
  darks: Array<string>;
  lights: Array<string>;
  [color: string]: string | any;
};

type BackgroundColor = {
  body: string;
  overlay: string;
  ui01: string;
  ui02: string;
  ui03: string;
  ui04: string;
  ui05: string;
  error: string;
  warning: string;
  success: string;
  info: string;
};

type TextColor = {
  text01: string;
  text02: string;
  text03: string;
  text04: string;
  error: string;
  warning: string;
  success: string;
  info: string;
};

type FieldColor = {
  default: string;
  disabled: string;
};

type BorderColor = {
  border01: string;
  border02: string;
  input: string;
  focus: string;
  error: string;
};

type InteractiveColor = {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  secondary: string;
  secondaryHover: string;
  secondaryActive: string;
  link: string;
  linkInverse: string;
  error: string;
  errorHover: string;
  errorActive: string;
  success: string;
  successHover: string;
  successActive: string;
  info: string;
  infoHover: string;
  infoActive: string;
  disabled: string;
};

type SupportColor = {
  red: string;
  redInverse: string;
  pink: string;
  purple: string;
  indigo: string;
  blue: string;
  blueInverse: string;
  grey: string;
  greyInverse: string;
  cyan: string;
  teal: string;
  green: string;
  greenInverse: string;
  lightGreen: string;
  yellow: string;
  orange: string;
  orangeInverse: string;
};

export type Color = {
  background: BackgroundColor;
  text: TextColor;
  field: FieldColor;
  border: BorderColor;
  interactive: InteractiveColor;
  support: SupportColor;
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
      body: "var(--background-body)",
      ui01: "var(--background-ui01)",
      ui02: "var(--background-ui02)",
      ui03: "var(--background-ui03)",
      ui04: "var(--background-ui04)",
      ui05: "var(--background-ui05)",
      error: "var(--background-error)",
      warning: "var(--background-warning)",
      success: "var(--background-success)",
      info: "var(--background-info)",
      overlay: "var(--background-overlay)",
    },
    field: {
      default: "var(--field-default)",
      disabled: "var(--field-disabled)",
    },
    text: {
      text01: "var(--text-text01)",
      text02: "var(--text-text02)",
      text03: "var(--text-text03)",
      text04: "var(--text-text04)",
      error: "var(--text-error)",
      warning: "var(--text-warning)",
      success: "var(--text-success)",
      info: "var(--text-info)",
    },
    border: {
      border01: "var(--border-border01)",
      border02: "var(--border-border02)",
      input: "var(--border-input)",
      focus: "var(--border-focus)",
      error: "var(--border-error)",
    },
    interactive: {
      primary: "var(--interactive-primary)",
      primaryHover: "var(--interactive-primaryHover)",
      primaryActive: "var(--interactive-primaryActive)",
      secondary: "var(--interactive-secondary)",
      secondaryHover: "var(--interactive-secondaryHover)",
      secondaryActive: "var(--interactive-secondaryActive)",
      link: "var(--interactive-link)",
      linkInverse: "var(--interactive-linkInverse)",
      error: "var(--interactive-error)",
      errorHover: "var(--interactive-errorHover)",
      errorActive: "var(--interactive-errorActive)",
      success: "var(--interactive-success)",
      successHover: "var(--interactive-successHover)",
      successActive: "var(--interactive-successActive)",
      info: "var(--interactive-info)",
      infoHover: "var(--interactive-infoHover)",
      infoActive: "var(--interactive-infoActive)",
      disabled: "var(--interactive-disabled)",
    },
    support: {
      red: "var(--support-red)",
      redInverse: "var(--support-redInverse)",
      pink: "var(--support-pink)",
      purple: "var(--support-purple)",
      indigo: "var(--support-indigo)",
      blue: "var(--support-blue)",
      blueInverse: "var(--support-blueInverse)",
      grey: "var(--support-grey)",
      greyInverse: "var(--support-greyInverse)",
      cyan: "var(--support-cyan)",
      teal: "var(--support-teal)",
      green: "var(--support-green)",
      greenInverse: "var(--support-greenInverse)",
      lightGreen: "var(--support-lightGreen)",
      yellow: "var(--support-yellow)",
      orange: "var(--support-orange)",
      orangeInverse: "var(--support-orangeInverse)",
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
    darkenGrey: "1px solid #D1D1D8",
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
