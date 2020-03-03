import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { Text } from "../components/text";

const stories = storiesOf("Typography/Text", module);
const fontWeights = ["regular", "medium", "bold", "bolder"];
const fontSizes = ["small", "regular", "big", "heading"];

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
  .add("font weights", () => (
    <Text>
      Font weights gets properties from theme: regular (400), medium (500), bold
      (600), bolder (700).
      <Text fontWeight={select("font weight", fontWeights, "bold")}>
        Lorem ipsum.
      </Text>
    </Text>
  ))
  .add("font sizes", () => (
    <Text>
      Font sizes gets properties from theme: small (0.75rem), regular (1rem),
      big (1.3rem), heading (1.5rem).
      <Text fontSize={select("font size", fontSizes, "regular")}>
        Lorem ipsum.
      </Text>
    </Text>
  ))
  .add("small", () => <Text small>Small typings.</Text>)
  .add("caption", () => <Text caption>Caption.</Text>);
