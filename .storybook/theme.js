import { create } from "@storybook/theming/create";
import logo from "../assets/nclogo.png";

export default create({
  base: "light",
  brandTitle: "Storybook of General Nordcloud UI library",
  brandUrl: "https://nordcloud.com/",
  brandImage: logo,
  brandTarget: "_self",

  colorPrimary: "#161632",
  colorSecondary: "#ff2837",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Rubik", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "silver",
  barBg: "#161632",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,
});
