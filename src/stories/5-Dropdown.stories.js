import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { Dropdown } from "../components/dropdown";

const stories = storiesOf("Components/Dropdown", module);
stories.addDecorator(withKnobs).add("simple dropdown", () => {
  const items = ["item1", "item2", "item3"];
  return (
    <Dropdown name={text("Name", "Dropdown button")} items={items}>
      {text("Name", "Dropdown button")}
    </Dropdown>
  );
});
