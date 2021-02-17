import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { GnuiContainer } from "../src/components/container";
import "./global.css";
import { SetGlobalStyle } from "../src/theme/globals";

addParameters({
  options: {
    showRoots: true,
    storySort: {
      order: [
        "Foundation",
        [
          "Grid",
          "Colors",
          "Icons",
          "Spacing",
        ],
        "Typography",
        "Components",
        "Forms",
        "Patterns",
        "Pages",
        "Widgets",
      ],
    },
  },
  viewMode: "docs",
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator((storyFn) => (
  <GnuiContainer>
    <SetGlobalStyle />
    {storyFn()}
  </GnuiContainer>
));
