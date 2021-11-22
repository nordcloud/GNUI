/* Copyright (c) 2021 Nordcloud Oy or its affiliates. All Rights Reserved. */

// Display some of the warnings only while developing, prevent CI build from failing
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  extends: [
    "@nordcloud/eslint-config-pat/profile/web-app",
    "@nordcloud/eslint-config-pat/mixins/react",
  ],

  parserOptions: { tsconfigRootDir: __dirname },

  settings: {
    react: {
      version: "16.13.1", // React version. "detect" automatically picks the version you have installed.
    },
  },

  rules: {
    // general
    "no-console": isProd ? "error" : "warn",
    "no-unused-expressions": [
      isProd ? "error" : "warn",
      { allowShortCircuit: true },
    ],

    // eslint-plugin-fp
    "fp/no-mutating-methods": [
      isProd ? "off" : "warn",
      {
        allowedObjects: ["history"],
      },
    ],

    // eslint-plugin-sonarjs
    "sonarjs/no-nested-template-literals": "off",
  },
};
