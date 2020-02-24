import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs, boolean } from "@storybook/addon-knobs";
import { Dropdown } from "../components/dropdown";

const stories = storiesOf("Components/Dropdown", module);
stories.addDecorator(withKnobs).add("simple dropdown", () => {
  const items = ["pink", "blue", "green", "...different"];
  return (
    <Dropdown
      name={text("Name", "Pick your favorite color")}
      items={items}
      width="15rem"
      disabled={boolean("Disabled", false)}
    />
  );
});
