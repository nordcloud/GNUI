import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import { GnuiContainer } from "../src/components/container";
import { SetGlobalStyle } from "../src/theme/globals";
import "./global.css";

addParameters({
  options: {
    sidebar: {
      showRoots: true,
    },
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
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <GnuiContainer>
      <SetGlobalStyle />
      {storyFn()}
    </GnuiContainer>
  </StyleSheetManager>
));

// This implements the default behavior from styled-components v5
function shouldForwardProp(propertyName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propertyName);
  }
  // For other elements, forward all props
  return true;
}
