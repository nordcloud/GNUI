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
  [spacing: string]: string | any;
};

type Radius = { [key: string]: string };

type Borders = { [key: string]: string };

type Transition = string | { transition: string };

type ZIndex = {
  [zIndex: string]: number | any;
}

export interface ThemeInterface {
  colors: Colors;
  typography: Typography;
  borders: Borders;
  radius: Radius;
  transition: Transition;
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
    lights: ["#fcfcfd", "#f1f1f4", "#e7e7eb", "#d1d1da", "#bbbbc9"]
  },

  typography: {
    fontWeights: [400, 500, 600, 700],
    fontSizes: ["0.75rem", "1rem", "1.3rem", "1.5rem"],
    fonts: {
      body: "Rubik, sans-serif",
      headers: "Montserrat, sans-serif",
      monospace: "Fira Code, monospace"
    },
    lineHeight: "1.5em"
  },

  borders: {
    borderDefault: "1px solid #161632",
    borderMedium: "2px solid #161632",
    borderBold: "4px solid #161632",
    borderGrey: "1px solid #e7e7eb",
    borderDisabled: "1px solid #d1d1da",
    borderDarkenGrey: "1px solid #bbbbc9",
    borderDark: "1px solid #32323f",
    borderSuccess: "1px solid #27ae60",
    borderDanger: "1px solid #e74c3c",
    borderWarning: "1px solid #f39c12",
    borderNotification: "1px solid #3498db",
    borderTransparent: "1px solid transparent"
  },

  radius: {
    radiusSmall: "2px",
    radiusDefault: "4px",
    radiusLarge: "6px"
  },

  spacing: {
    spacing01: "0.25rem",
    spacing02: "0.5rem",
    spacing03: "0.75rem",
    spacing04: "1rem",
    spacing05: "1.25rem",
    spacing06: "1.5rem",
    spacing07: "2rem",
    spacing08: "2.5rem"
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
  opacity: 0.7
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

// Borders & Radius
theme.borderDefault = theme.borders.borderDefault;
theme.borderInput = theme.borders.borderDarkenGrey;
theme.radiusDefault = theme.radius.radiusDefault;

export default theme;
