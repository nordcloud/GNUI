interface Colors {
  primary: string;
  light: string;
  dark: string;
  gray: string;
  darkGray: string;
}

export interface ThemeInterface {
  colors: Colors;
  transition: string;
}

const theme: ThemeInterface = {
  colors: {
    primary: "#2e2e47",
    light: "#ffffff",
    dark: "#212B35",
    gray: "#DFE4E8",
    darkGray: "#454F5B"
  },

  transition: "all 0.1s linear"
};

export default theme;
