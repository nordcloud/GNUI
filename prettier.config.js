module.exports = {
  ...require("@nordcloud/eslint-config-pat/prettier.config.js"),
  overrides: [
    {
      files: "*.mdx",
      options: {
        printWidth: 100,
      },
    },
  ],
};
