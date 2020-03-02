import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { Heading } from "../components/heading";

const stories = storiesOf("Typography/Heading", module);
stories
  .addDecorator(withKnobs)
  .add("simple", () => <Heading>This is heading.</Heading>)
  .add("as", () => (
    <Heading as={select("as", ["h1", "h2", "h3", "h4", "h5", "h6"], "h2")}>
      This is h2 heading.
    </Heading>
  ))
  .add("color", () => (
    <Heading color="palevioletred">This is colorful heading.</Heading>
  ));
