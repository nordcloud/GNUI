import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { Text } from "../components/text";

const stories = storiesOf("Typography/Text", module);
const fontSizes = ["small", "regular", "big", "large"];

stories
  .addDecorator(withKnobs)
  .add("default", () => <Text>Default paragraph.</Text>)
  .add("as", () => (
    <Text>
      This is paragraph.{" "}
      <Text as="span" color="palevioletred">
        But this is colored span inside paragraph.
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
