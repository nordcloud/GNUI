module.exports = {
  extends: ["@nordcloud/eslint-config-pat/stylelint.config.js"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "no-duplicate-selectors": null,
        "no-descending-specificity": null,
      },
    },
  ],
};
