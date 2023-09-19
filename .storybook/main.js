module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-docs"],
  preLoaders: [
    {
      test: /\.tsx$/,
      loader: "eslint-loader",
    },
  ],
  core: {
    disableTelemetry: true,
  },
  core: {
    builder: "webpack5",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
