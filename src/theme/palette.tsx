export type Grey = {
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
};

export type DarkGrey = {
  darkGrey100: string;
  darkGrey200: string;
  darkGrey300: string;
  darkGrey400: string;
  darkGrey500: string;
  darkGrey600: string;
  darkGrey700: string;
  darkGrey800: string;
};

export type DarkBlue = {
  darkBlue100: string;
  darkBlue200: string;
  darkBlue300: string;
  darkBlue400: string;
  darkBlue500: string;
  darkBlue600: string;
  darkBlue700: string;
  darkBlue800: string;
};

export type Red = {
  red100: string;
  red200: string;
  red300: string;
  red400: string;
  red500: string;
  red600: string;
  red700: string;
  red800: string;
};

export type Pink = {
  pink100: string;
  pink200: string;
  pink300: string;
  pink400: string;
  pink500: string;
  pink600: string;
  pink700: string;
  pink800: string;
};

export type Purple = {
  purple100: string;
  purple200: string;
  purple300: string;
  purple400: string;
  purple500: string;
  purple600: string;
  purple700: string;
  purple800: string;
};

export type Indigo = {
  indigo100: string;
  indigo200: string;
  indigo300: string;
  indigo400: string;
  indigo500: string;
  indigo600: string;
  indigo700: string;
  indigo800: string;
};

export type Blue = {
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue500: string;
  blue600: string;
  blue700: string;
  blue800: string;
};

export type Cyan = {
  cyan100: string;
  cyan200: string;
  cyan300: string;
  cyan400: string;
  cyan500: string;
  cyan600: string;
  cyan700: string;
  cyan800: string;
};

export type Teal = {
  teal100: string;
  teal200: string;
  teal300: string;
  teal400: string;
  teal500: string;
  teal600: string;
  teal700: string;
  teal800: string;
};

export type Green = {
  green100: string;
  green200: string;
  green300: string;
  green400: string;
  green500: string;
  green600: string;
  green700: string;
  green800: string;
};

export type LightGreen = {
  lightGreen100: string;
  lightGreen200: string;
  lightGreen300: string;
  lightGreen400: string;
  lightGreen500: string;
  lightGreen600: string;
  lightGreen700: string;
  lightGreen800: string;
};

export type Yellow = {
  yellow100: string;
  yellow200: string;
  yellow300: string;
  yellow400: string;
  yellow500: string;
  yellow600: string;
  yellow700: string;
  yellow800: string;
};

export type Orange = {
  orange100: string;
  orange200: string;
  orange300: string;
  orange400: string;
  orange500: string;
  orange600: string;
  orange700: string;
  orange800: string;
};

export type colorPalette = {
  white: string;
  black: string;
  grey: Grey;
  darkGrey: DarkGrey;
  darkBlue: DarkBlue;
  red: Red;
  pink: Pink;
  purple: Purple;
  indigo: Indigo;
  blue: Blue;
  cyan: Cyan;
  teal: Teal;
  green: Green;
  lightGreen: LightGreen;
  yellow: Yellow;
  orange: Orange;
};

export const palette: colorPalette = {
  white: "#FFFFFF",
  black: "#000000",
  grey: {
    grey100: "#FDFDFE",
    grey200: "#F8F8F9",
    grey300: "#EDEDF0",
    grey400: "#E7E7EB",
    grey500: "#D1D1D8",
    grey600: "#C0C0CB",
    grey700: "#A4A4B3",
    grey800: "#6E6E83",
  },
  darkGrey: {
    darkGrey100: "#444452",
    darkGrey200: "#3B3B47",
    darkGrey300: "#363641",
    darkGrey400: "#32323B",
    darkGrey500: "#282830",
    darkGrey600: "#1F1F25",
    darkGrey700: "#16161A",
    darkGrey800: "#0C0C0F",
  },
  darkBlue: {
    darkBlue100: "#45459c",
    darkBlue200: "#3d3d8b",
    darkBlue300: "#353579",
    darkBlue400: "#2d2d67",
    darkBlue500: "#262655",
    darkBlue600: "#1e1e44",
    darkBlue700: "#161632",
    darkBlue800: "#06060f",
  },
  red: {
    red100: "#ffcdd2",
    red200: "#ef9a9a",
    red300: "#e57373",
    red400: "#ef5350",
    red500: "#f44336",
    red600: "#e53935",
    red700: "#d32f2f",
    red800: "#c62828",
  },
  pink: {
    pink100: "#f8bbd0",
    pink200: "#f48fb1",
    pink300: "#f06292",
    pink400: "#ec407a",
    pink500: "#e91e63",
    pink600: "#d81b60",
    pink700: "#c2185b",
    pink800: "#ad1457",
  },
  purple: {
    purple100: "#e1bee7",
    purple200: "#ce93d8",
    purple300: "#ba68c8",
    purple400: "#ab47bc",
    purple500: "#9c27b0",
    purple600: "#8e24aa",
    purple700: "#7b1fa2",
    purple800: "#6a1b9a",
  },
  indigo: {
    indigo100: "#c5cae9",
    indigo200: "#9fa8da",
    indigo300: "#7986cb",
    indigo400: "#5c6bc0",
    indigo500: "#3f51b5",
    indigo600: "#3949ab",
    indigo700: "#303f9f",
    indigo800: "#283593",
  },
  blue: {
    blue100: "#bbdefb",
    blue200: "#90caf9",
    blue300: "#64b5f6",
    blue400: "#42a5f5",
    blue500: "#2196f3",
    blue600: "#1e88e5",
    blue700: "#1976d2",
    blue800: "#1565c0",
  },
  cyan: {
    cyan100: "#b2ebf2",
    cyan200: "#80deea",
    cyan300: "#4dd0e1",
    cyan400: "#26c6da",
    cyan500: "#00bcd4",
    cyan600: "#00acc1",
    cyan700: "#0097a7",
    cyan800: "#00838f",
  },
  teal: {
    teal100: "#b2dfdb",
    teal200: "#80cbc4",
    teal300: "#4db6ac",
    teal400: "#26a69a",
    teal500: "#009688",
    teal600: "#00897b",
    teal700: "#00796b",
    teal800: "#00695c",
  },
  green: {
    green100: "#c8e6c9",
    green200: "#a5d6a7",
    green300: "#81c784",
    green400: "#66bb6a",
    green500: "#4caf50",
    green600: "#43a047",
    green700: "#388e3c",
    green800: "#1b5e20",
  },
  lightGreen: {
    lightGreen100: "#dcedc8",
    lightGreen200: "#c5e1a5",
    lightGreen300: "#aed581",
    lightGreen400: "#9ccc65",
    lightGreen500: "#8bc34a",
    lightGreen600: "#7cb342",
    lightGreen700: "#689f38",
    lightGreen800: "#558b2f",
  },
  yellow: {
    yellow100: "#fff9c4",
    yellow200: "#fff59d",
    yellow300: "#fff176",
    yellow400: "#ffee58",
    yellow500: "#ffeb3b",
    yellow600: "#fdd835",
    yellow700: "#fbc02d",
    yellow800: "#f9a825",
  },
  orange: {
    orange100: "#ffe0b2",
    orange200: "#ffcc80",
    orange300: "#ffb74d",
    orange400: "#ffa726",
    orange500: "#ff9800",
    orange600: "#fb8c00",
    orange700: "#f57c00",
    orange800: "#ef6c00",
  },
} as const;
