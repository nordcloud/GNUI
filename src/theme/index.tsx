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

export interface ThemeInterface {
  colors: Colors;
  typography: Typography;
  borders: Borders;
  transition: Transition;
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
      body: "Roboto, sans-serif",
      headers: "Montserrat, sans-serif",
      monospace: "Fira Code, monospace"
    },
    lineHeight: "1.5rem"
  },

  borders: {
    color: null,
    width: "0.0625rem",
    style: "solid",
    radius: "0.25rem"
  },

  transition: "all 0.2s linear"
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

export default theme;
