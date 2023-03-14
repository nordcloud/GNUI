require("@nordcloud/eslint-config-pat/patch/modern-module-resolution");

module.exports = {
  extends: [
    "@nordcloud/eslint-config-pat/profile/web-app",
    "@nordcloud/eslint-config-pat/mixins/react",
    "@nordcloud/eslint-config-pat/mixins/react-testing",
    "@nordcloud/eslint-config-pat/mixins/tsdoc",
    "@nordcloud/eslint-config-pat/mixins/jest",
  ],

  parserOptions: { tsconfigRootDir: __dirname },

  ignorePatterns: ["*.js"],

  settings: {
    react: {
      version: "16.14.0", // React version. "detect" automatically picks the version you have installed.
    },
    jest: {
      version: "29",
    },
  },

  rules: {
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    // Should be in sync with https://github.com/nordcloud/eslint-config-pat/blob/master/profile/_common.js#L463
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: null,
      },
      // Ignore destructured names
      {
        selector: "variable",
        types: ["array", "boolean", "function", "number", "string"],
        modifiers: ["destructured"],
        format: null,
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: [
          "is",
          "are",
          "should",
          "has",
          "can",
          "did",
          "will",
          "show",
          "hide",
        ],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        filter: {
          regex: "^(Component)$",
          match: false,
        },
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: ["function"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: ["typeProperty"],
        format: ["camelCase"],
        leadingUnderscore: "allowDouble",
        filter: {
          regex: "^(Component)$",
          match: false,
        },
      },
      {
        selector: ["enumMember"],
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "enum",
        format: ["PascalCase", "UPPER_CASE"],
      },
    ],

    "testing-library/no-node-access": "warn",
    "testing-library/no-container": "warn",
  },
};
