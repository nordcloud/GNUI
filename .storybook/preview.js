import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { GnuiContainer } from "../src/components/container";
import { SetGlobalStyle } from "../src/theme/globals";
import "./global.css";

addParameters({
  options: {
    showRoots: true,
    storySort: {
      order: [
        "Foundation",
        ["Grid", "Colors", "Icons", "Spacing"],
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
