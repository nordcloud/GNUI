import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { Heading } from "../components/heading";

const stories = storiesOf("Typography/Heading", module);
stories
  .addDecorator(withKnobs)
  .add("simple", () => <Heading>This is heading.</Heading>)
  .add("level", () => (
    <Heading level={select("level", ["1", "2", "3", "4", "5", "6"], "2")}>
      This is {select("level", ["1", "2", "3", "4", "5", "6"], "2")} heading.
    </Heading>
  ))
  .add("color", () => (
    <Heading color="palevioletred">This is colorful heading.</Heading>
  ));
