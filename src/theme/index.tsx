interface Colors {
  primary: string;
  light: string;
  dark: string;
  gray: string;
  darkGray: string;
}

export interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  colors: {
    primary: "#2e2e47",
    light: "#ffffff",
    dark: "#333333",
    gray: "#DCDCDC",
    darkGray: "#808080"
  }
};

export default theme;
