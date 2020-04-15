interface Colors {
  [color: string]: string | Array<string>;
  darks: Array<string>;
  lights: Array<string>;
}

const darks: Array<string> = [
  "#212129",
  "#32323f",
  "#444454",
  "#5e5e75",
  "#7a7a94",
];

const lights: Array<string> = [
  "#fcfcfd",
  "#f1f1f4",
  "#e7e7eb",
  "#d1d1da",
  "#bbbbc9",
];

export const colors: Colors = {
  primary: "#161632",
  accent: "#FF2837",
  danger: "#e74c3c",
  success: "#27ae60",
  warning: "#f39c12",
  notification: "#3498db",
  black: "#212129",
  white: "#fcfcfd",
  darks: darks,
  lights: lights,
};
