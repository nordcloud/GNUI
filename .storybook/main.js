module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-docs"],
  preLoaders: [
    {
      test: /\.tsx$/,
      loader: "eslint-loader",
    },
  ],
};
