import * as React from "react";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils/wInfo";
import { Button } from "../components/button";
import { Center } from "../components/center";
import title from "title";

const stories = storiesOf("Components/Button", module);
stories
  .addDecorator(withKnobs)
  .add(
    "primary",
    wInfo()(() => (
      <Center>
        <Button
          onClick={action("clicked")}
          disabled={boolean("Disabled", false)}
        >
          Primary Button
        </Button>
      </Center>
    ))
  )
  .add(
    "secondary",
    wInfo()(() => (
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
  )
  .add(
    "color (actions)",
    wInfo()(() => {
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
  )
  .add(
    "color (HEX)",
    wInfo()(() => (
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
  )
  .add(
    "severity",
    wInfo()(() => {
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
    })
  );
