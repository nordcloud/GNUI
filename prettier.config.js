module.exports = {
  ...require("@nordcloud/eslint-config-pat/prettier.config.js"),
  overrides: [
    {
      files: "*.json5",
      options: {
        singleQuote: false,
        parser: "json5",
        quoteProps: "preserve",
        trailingComma: false,
      },
    },
  ],
};
