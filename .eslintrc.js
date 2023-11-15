require("@nordcloud/eslint-config-pat/patch/modern-module-resolution");

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  extends: [
    "@nordcloud/eslint-config-pat/profile/web-app",
    "@nordcloud/eslint-config-pat/mixins/react",
  ],

  parserOptions: { tsconfigRootDir: __dirname },

  ignorePatterns: ["./*.js", "vitest.config.ts"],

  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },

  overrides: [
    {
      files: ["**/*.{js,mjs}"],
      parserOptions: {
        sourceType: "module",
      },
    },
    {
      files: ["src/**/*.{ts,tsx}"],
      rules: {
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
      },
    },
    {
      // Declare an override that applies to TypeScript files only
      files: [".storybook/**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        // The "project" path is resolved relative to parserOptions.tsconfigRootDir.
        // Your local .eslintrc.js must specify that parserOptions.tsconfigRootDir=__dirname.
        tsconfigRootDir: __dirname + "/.storybook",
        project: ["./tsconfig.json"],

        // Allow parsing of newer ECMAScript constructs used in TypeScript source code.  Although tsconfig.json
        // may allow only a small subset of ES2018 features, this liberal setting ensures that ESLint will correctly
        // parse whatever is encountered.
        ecmaVersion: "latest",

        sourceType: "module",
      },
    },
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "react-hooks/rules-of-hooks": "off",
        "no-alert": "off",
        "unicorn/consistent-function-scoping": "off",
      },
    },
    {
      files: ["**/*.spec.{ts,tsx}"],
      extends: [
        "@nordcloud/eslint-config-pat/mixins/vitest",
        "@nordcloud/eslint-config-pat/mixins/react-testing",
      ],
      rules: {
        "testing-library/no-node-access": "warn",
        "testing-library/no-container": "warn",
      },
    },
  ],
};
