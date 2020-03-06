import React from "react";
import { storiesOf } from "@storybook/react";
import { Text, Code } from "../components/text";

const stories = storiesOf("Typography/Text", module);

stories
  .add("default", () => <Text>Default paragraph.</Text>)
  .add("as", () => (
    <Text as="p">
      This is paragraph.{" "}
      <Text as="span" color="palevioletred">
        But this is colored span inside <Code>paragraph</Code>.
      </Text>
    </Text>
  ))
  .add("bold", () => <Text fontWeight="bold">Bold paragraph.</Text>)
  .add("light", () => <Text fontWeight="light">Light paragraph.</Text>)
  .add("monospace", () => <Code>Monospaced.</Code>);
