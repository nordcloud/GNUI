import * as React from "react";
import dark from "./dark";
import light from "./light";

export enum THEME_OPTIONS {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

function getPreferredBrowserTheme() {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? THEME_OPTIONS.DARK
    : THEME_OPTIONS.LIGHT;
}

function isThemeValue(value: string): value is keyof typeof THEME_OPTIONS {
  return value === "LIGHT" || value === "DARK";
}

export const useThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = React.useState<THEME_OPTIONS>(() => {
    const savedThemeValue = window.localStorage.getItem("NC_GNUI_THEME") ?? "";

    return isThemeValue(savedThemeValue)
      ? THEME_OPTIONS[savedThemeValue]
      : getPreferredBrowserTheme();
  });

  React.useEffect(() => {
    const newTheme = currentTheme === THEME_OPTIONS.DARK ? dark : light;

    newTheme.forEach((element) => {
      document.documentElement.style.setProperty(element[0], element[1]);
    });
  }, [currentTheme]);

  const setTheme = (value: THEME_OPTIONS) => {
    setCurrentTheme(value);
    localStorage.setItem("NC_GNUI_THEME", THEME_OPTIONS[value]);
  };

  return { currentTheme, setTheme };
};
