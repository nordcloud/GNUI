import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.@(story|stories).@(ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-mdx-gfm",
  ],

  staticDirs: ["../public"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: "tag",
    defaultName: "Docs",
  },

  // eslint-disable-next-line @typescript-eslint/require-await -- setup support for css prop
  async viteFinal(viteConfig) {
    viteConfig.plugins = viteConfig.plugins?.filter(
      (plugin) =>
        !(Array.isArray(plugin) &&
        plugin[0] != null &&
        typeof plugin[0] === "object" &&
        "name" in plugin[0]
          ? plugin[0].name.includes("vite:react")
          : false)
    );

    viteConfig.plugins?.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        babel: {
          plugins: ["babel-plugin-styled-components"],
        },
      })
    );

    return viteConfig;
  },
};

export default config;
