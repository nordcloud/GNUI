module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-links/register", "@storybook/addon-docs"],
  preLoaders: [
    {
      test: /\.tsx$/,
      loader: "eslint-loader",
    },
  ],
};
