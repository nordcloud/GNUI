import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Button } from "../components/button";
import { Center } from "../components/center";
import title from "title";

const stories = storiesOf("Components/Button", module);
stories
  .addDecorator(withKnobs)
  .add("primary", () => (
    <Center>
      <Button onClick={action("clicked")} disabled={boolean("Disabled", false)}>
        Primary Button
      </Button>
    </Center>
  ))
  .add("secondary", () => (
    <Center>
      <Button
        onClick={action("clicked")}
        disabled={boolean("Disabled", false)}
        secondary
      >
        Secondary Button
      </Button>
    </Center>
  ))
  .add("color (actions)", () => {
    const colorOptions = [
      "accent",
      "danger",
      "success",
      "warning",
      "notification"
    ];

    return (
      <Center>
        <Button
          onClick={action("clicked")}
          disabled={boolean("Disabled", false)}
          color={select("Color", colorOptions, "danger")}
        >
          {title(select("Color", colorOptions, "danger"))} Button
        </Button>{" "}
      </Center>
    );
  })
  .add("color (HEX)", () => (
    <Center>
      <Button
        onClick={action("clicked")}
        color={text("HEX color", "#db7093")}
        disabled={boolean("Disabled", false)}
      >
        HEX Button
      </Button>
    </Center>
  ))
  .add("severity", () => {
    const severityOptions = ["high", "medium", "low"];

    return (
      <Center>
        <Button
          onClick={action("clicked")}
          disabled={boolean("Disabled", false)}
          severity={select("Severity", severityOptions, "high")}
        >
          {title(select("Severity", severityOptions, "high"))} Priority
        </Button>
      </Center>
    );
  });
