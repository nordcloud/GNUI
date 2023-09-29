import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Preview } from "@storybook/react";
import { GnuiContainer } from "../src/components/container";
import { SetGlobalStyle } from "../src/theme/globals";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    },

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
      canvas: {
        layout: "padded",
      },
    },
  },

  decorators: [
    (storyFn) => (
      <GnuiContainer>
        <SetGlobalStyle />
        {storyFn()}
      </GnuiContainer>
    ),
  ],
};

export default preview;
