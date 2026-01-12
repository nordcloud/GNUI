export declare enum THEME_OPTIONS {
    LIGHT = "LIGHT",
    DARK = "DARK"
}
export declare const useThemeSwitcher: () => {
    currentTheme: THEME_OPTIONS;
    setTheme: (value: THEME_OPTIONS) => void;
};
