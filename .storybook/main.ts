import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.@(story|stories).@(ts|tsx)"],
  stories: ["../src/stories/**.@(mdx|stories.@(tsx))"],
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
    options: {
      legacyRootApi: true,
    },
  },

  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },

  docs: {
    autodocs: true,
  },

  async viteFinal(config, { configType }) {
    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
    }
    if (configType === "PRODUCTION") {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
};

export default config;
