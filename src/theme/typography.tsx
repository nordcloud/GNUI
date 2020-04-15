type PropArray = Array<number | string>;
type PropFonts = {
  [propName: string]: string;
};

export type Typography = {
  fontWeights: PropArray;
  fontSizes: PropArray;
  fonts: PropFonts;
  lineHeight: string;
};

export const fontWeights: PropArray = [400, 500, 600, 700];
export const fontSizes: PropArray = ["0.75rem", "1rem", "1.3rem", "1.5rem"];
export const fonts: PropFonts = {
  body: "Rubik, sans-serif",
  headers: "Montserrat, sans-serif",
  monospace: "Fira Code, monospace",
};
export const lineHeight = "1.5rem";

const typography = Object.assign(
  {},
  { fontWeights, fontSizes, fonts, lineHeight }
);

export default typography;
