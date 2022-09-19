module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-docs",
    {
      // https://storybook.js.org/addons/storybook-addon-turbo-build
      name: "storybook-addon-turbo-build",
      options: {
        optimizationLevel: 3,
      },
    },
  ],
  preLoaders: [
    {
      test: /\.tsx$/,
      loader: "eslint-loader",
    },
  ],
};
