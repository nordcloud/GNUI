require("@nordcloud/eslint-config-pat/patch/modern-module-resolution");

// Display some of the warnings only while developing, prevent CI build from failing
const isProd = process.env.NODE_ENV === "production";

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
      version: "16.13.1", // React version. "detect" automatically picks the version you have installed.
    },
    jest: {
      version: "27",
    },
  },

  rules: {
    "no-console": isProd ? "error" : "warn",
    "no-unused-expressions": [
      isProd ? "error" : "warn",
      { allowShortCircuit: true },
    ],
    "import/no-cycle": "warn",
    "object-shorthand": "warn",
    radix: "warn",
    "default-case": "warn",
    "require-await": "warn",
    "no-mixed-operators": "warn",
    "no-duplicate-imports": "warn",
    "no-else-return": "warn",
    "no-lonely-if": "warn",
    "prefer-const": "warn",

    "@typescript-eslint/default-param-last": "warn",
    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "@typescript-eslint/no-redeclare": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase"],
        filter: {
          regex: "^(__typename|Component)$",
          match: false,
        },
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        filter: {
          regex: "^(__typename)$",
          match: false,
        },
      },
      {
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: ["function"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: ["objectLiteralProperty", "objectLiteralMethod"],
        format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
        leadingUnderscore: "allowDouble",
      },
      {
        selector: ["enumMember", "typeProperty"],
        format: ["camelCase", "snake_case", "UPPER_CASE"],
        leadingUnderscore: "allowDouble",
        filter: {
          regex: "^(Component)$",
          match: false,
        },
      },
      {
        selector: "enum",
        format: ["UPPER_CASE", "PascalCase"],
      },
    ],
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/no-for-in-array": "warn",

    "react/jsx-curly-brace-presence": "warn",

    "testing-library/prefer-presence-queries": "warn",
    "testing-library/no-node-access": "warn",
    "testing-library/render-result-naming-convention": "warn",
    "testing-library/no-container": "warn",

    "jest-dom/prefer-in-document": "warn",

    "unicorn/prefer-export-from": "warn",
    "unicorn/prefer-ternary": "warn",
    "unicorn/no-abusive-eslint-disable": "warn",
    "unicorn/prefer-logical-operator-over-ternary": "warn",

    "import/newline-after-import": "warn",
  },
};
