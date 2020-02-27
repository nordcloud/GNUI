import React from "react";
import { storiesOf } from "@storybook/react";
import { Text, Code } from "../components/text";

const stories = storiesOf("Typography/Text", module);

stories
  .add("default", () => <Text>Lorem ipsum.</Text>)
  .add("as", () => (
    <Text as="p" size="2rem">
      I am paragraph.{" "}
      <Text as="span" color="blue">
        But this is span.
      </Text>
    </Text>
  ))
  .add("monospace", () => <Code>Lorem ipsum.</Code>);
