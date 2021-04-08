import { useEffect, useState } from "react";
import dark from "./dark";
import light from "./light";

export enum THEME_OPTIONS {
  LIGHT,
  DARK,
}

const previousTheme = localStorage.getItem("NC_GNUI_THEME");
const defaultTheme =
  previousTheme === "LIGHT"
    ? THEME_OPTIONS.LIGHT
    : previousTheme === "DARK"
    ? THEME_OPTIONS.DARK
    : window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ? THEME_OPTIONS.DARK
    : THEME_OPTIONS.LIGHT;

export const useThemeSwitcher = () => {
  const [c, setC] = useState<THEME_OPTIONS>(defaultTheme);

  useEffect(() => {
    const newTheme = c === THEME_OPTIONS.DARK ? dark : light;
    newTheme.forEach((el) => {
      document.documentElement.style.setProperty(el[0], el[1]);
    });
  }, [c]);
  const setTheme = (value: THEME_OPTIONS) => {
    setC(value);
    localStorage.setItem("NC_GNUI_THEME", THEME_OPTIONS[value]);
  };
  return { currentTheme: c, setTheme };
};
