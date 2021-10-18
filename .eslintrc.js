/* Copyright (c) 2021 Nordcloud Oy or its affiliates. All Rights Reserved. */

// Display some of the warnings only while developing, prevent CI build from failing
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:sonarjs/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:fp/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["fp"],
  rules: {
    // general
    "no-shadow": "off", // @typescript-eslint/no-shadow is used
    "consistent-return": "off",
    "no-underscore-dangle": "off",
    "no-prototype-builtins": "off",
    "require-await": "off",
    camelcase: "off", // @typescript-eslint/naming-convention is used
    "no-nested-ternary": "error",
    "no-console": isProd ? "error" : "warn",
    "prefer-const": "error",
    complexity: ["error", 15],
    "max-params": ["error", 3],
    eqeqeq: ["error", "smart"],
    "no-unused-expressions": [
      isProd ? "error" : "warn",
      { allowShortCircuit: true },
    ],
    // eslint-plugin-fp
    "fp/no-unused-expression": "off",
    "fp/no-rest-parameters": "off",
    "fp/no-nil": "off",
    "fp/no-throw": "off",
    "fp/no-mutating-methods": [
      isProd ? "off" : "warn",
      {
        allowedObjects: ["history"],
      },
    ],
    "fp/no-mutation": [
      "error",
      {
        commonjs: true,
        exceptions: [{ property: "current" }],
      },
    ],
    // eslint-plugin-import
    "import/no-extraneous-dependencies": "off",
    "import/no-relative-parent-imports": "off",
    // avoid false-positives for webpack resolution
    "import/no-unresolved": "off",
    "import/no-internal-modules": [
      "off",
      {
        allow: ["@testing-library/**"],
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: false,
        allowObject: false,
      },
    ],
    // eslint-plugin-react-hooks
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    // eslint-plugin-react
    "react/jsx-no-useless-fragment": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-pascal-case": ["error", { allowNamespace: true }],
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-key": "error",
    // eslint-plugin-sonarjs
    "sonarjs/cognitive-complexity": "off",
    "sonarjs/no-duplicate-string": "off",
    "sonarjs/no-nested-template-literals": "off",
    "sonarjs/no-unused-collection": "warn",
    "sonarjs/no-collapsible-if": "warn",
    // @typescript-eslint/eslint-plugin
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": ["off", "never"],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        filter: {
          regex: "^(__typename|Component|_[iI]gnored)$",
          match: false,
        },
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        filter: {
          regex: "^(__typename|_[iI]gnored)$",
          match: false,
        },
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
        selector: "typeLike",
        format: ["PascalCase"],
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
        selector: ["function"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: ["objectLiteralProperty", "objectLiteralMethod"],
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allowDouble",
        filter: {
          regex: "^(Content-Type|Authorization|Component)$",
          match: false,
        },
      },
      {
        selector: "enum",
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "[iI]gnored", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-shadow": "error",
  },
  env: {
    es2020: true,
    browser: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: [
        "src/**/__tests__/**/*.[jt]s?(x)",
        "src/**/?(*.)+(spec|test).[jt]s?(x)",
      ],
      extends: [
        "plugin:jest/all",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
      rules: {
        // eslint-plugin-jest
        "jest/no-hooks": "off",
        "jest/require-top-level-describe": "off",
        "jest/prefer-expect-assertions": "off",
        "jest/expect-expect": "off",
        "jest/valid-expect-in-promise": "warn",
        "jest/no-identical-title": "error",
        "jest/no-mocks-import": "error",
        "jest/no-disabled-tests": "error",
        "jest/require-to-throw-message": "error",
        "jest/no-commented-out-tests": "error",
        // eslint-plugin-jest-dom
        "jest-dom/prefer-in-document": "off",
        // eslint-plugin-testing-library
        "testing-library/prefer-screen-queries": "error",
        // eslint-plugin-fp
        "fp/no-loops": "off",
      },
    },
  ],
  settings: {
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
    "import/internal-regex": "^~/",
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
};
