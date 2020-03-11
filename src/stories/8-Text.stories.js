import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { Text, Code } from "../components/text";

const stories = storiesOf("Typography/Text", module);
const fontSizes = ["small", "regular", "big", "large"];

stories
  .addDecorator(withKnobs)
  .add("default", () => <Text>Default paragraph.</Text>)
  .add("tag", () => (
    <Text>
      This is default paragraph, but thanks to <Code>tag</Code> prop which uses{" "}
      <Code>as</Code> from styled-components under the hood you can define as
      which tag it should be rendered.{" "}
      <Text tag="span" color="palevioletred">
        For example this is colored span inside paragraph.
      </Text>
    </Text>
  ))
  .add("bold", () => <Text bold>Bold text.</Text>)
  .add("italic", () => <Text italic>Italic (cursive) text.</Text>)
  .add("size", () => (
    <Text>
      <Text fontSize={select("font size", fontSizes, "regular")}>
        Lorem ipsum.
      </Text>
    </Text>
  ))
  .add("small", () => <Text small>Small typings.</Text>)
  .add("caption", () => <Text caption>Caption.</Text>);
