interface Colors {
  [propName: string]: string;
}

interface FontWeights {
  [propName: string]: number;
}

interface FontFamily {
  [propName: string]: string;
}

export interface ThemeInterface {
  colors: Colors;
  fontWeights: FontWeights;
  fontFamily: FontFamily;
  transition: string;
}

const theme: ThemeInterface = {
  colors: {
    primary: "#161632",
    accent: "#FF2837",
    danger: "#e74c3c",
    success: "#27ae60",
    warning: "#f39c12",
    notification: "#3498db",
    dark: "#212129",
    dark500: "#212129",
    dark400: "#32323f",
    dark300: "#444454",
    dark200: "#5e5e75",
    dark100: "#7a7a94",
    light500: "#bbbbc9",
    light400: "#d1d1da",
    light300: "#e7e7eb",
    light200: "#f1f1f4",
    light100: "#fcfcfd",
    light: "#fcfcfd"
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 600,
    bolder: 700
  },

  fontFamily: {
    regular: "Roboto, sans-serif",
    headers: "Montserrat, sans-serif"
  },

  transition: "all 0.1s linear"
};

export default theme;
