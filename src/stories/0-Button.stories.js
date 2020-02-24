import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Button } from "../components/button";
import { Flex } from "../components/container";
import title from "title";

const stories = storiesOf("Components/Button", module);
stories
  .addDecorator(withKnobs)
  .add("primary", () => (
    <Button onClick={action("clicked")} disabled={boolean("Disabled", false)}>
      Primary Button
    </Button>
  ))
  .add("outline", () => (
    <Button
      onClick={action("clicked")}
      disabled={boolean("Disabled", false)}
      outline
    >
      Outline Button
    </Button>
  ))
  .add("size", () => (
    <Button
      onClick={action("clicked")}
      disabled={boolean("Disabled", false)}
      size={select("Size", ["large", "regular", "small"], "regular")}
    >
      {title(select("Size", ["large", "regular", "small"], "regular"))} Button
    </Button>
  ))
  .add("color (actions)", () => {
    const colors = ["accent", "danger", "success", "warning", "notification"];
    return (
      <Flex>
        {colors.map(color => (
          <Button color={color} disabled={boolean("Disabled", false)}>
            {title(color)} Button
          </Button>
        ))}
      </Flex>
    );
  })
  .add("color (HEX)", () => (
    <Button
      onClick={action("clicked")}
      color={text("HEX color", "#db7093")}
      disabled={boolean("Disabled", false)}
    >
      HEX Button
    </Button>
  ))
  .add("severity", () => {
    const severityOptions = ["high", "medium", "low"];
    return (
      <Button
        onClick={action("clicked")}
        disabled={boolean("Disabled", false)}
        severity={select("Severity", severityOptions, "high")}
      >
        {title(select("Severity", severityOptions, "high"))} Priority
      </Button>
    );
  });
