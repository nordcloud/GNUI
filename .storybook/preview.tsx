import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { Preview } from "@storybook/react-vite";
import { GnuiContainer } from "../src/components/container";
import { SetGlobalStyle } from "../src/theme/globals";

const preview: Preview = {
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
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
