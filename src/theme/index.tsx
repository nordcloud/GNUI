interface Colors {
    primary: string;
    light: string;
    dark: string;
}

export interface ThemeInterface {
    colors: Colors;
}

const theme: ThemeInterface = {
    colors: {
        primary: '#2e2e47',
        light: '#ffffff',
        dark: '#333333',
    },
};

export default theme;
