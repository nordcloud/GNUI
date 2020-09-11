import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { Container } from "../src/components/container";
import "./global.css";

addParameters({
  options: {
    showRoots: true,
    storySort: {
      sort: [
        "Foundation",
        "Layout",
        "Typography",
        "Components",
        "Form",
        "Widgets",
        "Pages",
      ],
    },
  },
  viewMode: "docs",
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator((storyFn) => <Container>{storyFn()}</Container>);
