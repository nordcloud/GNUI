/* Copyright (c) 2021-2023 Nordcloud Oy or its affiliates. All Rights Reserved. */

module.exports = {
  "{src,.storybook}/**/*.{ts,tsx,js}": [
    "prettier --write",
    "eslint --fix",
    "stylelint",
  ],
  "*.{json,json5,jsonc,md,mdx,yaml,yml,css,html}": ["prettier --write"],
};
