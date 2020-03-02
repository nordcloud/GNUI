import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs, boolean } from "@storybook/addon-knobs";
import { Dropdown } from "../components/dropdown";

const stories = storiesOf("Components/Dropdown", module);
stories.addDecorator(withKnobs).add("simple dropdown", () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [value, setValue] = useState();

  return (
    <Dropdown
      name={text("Name", "Select an option")}
      options={options}
      value={value}
      width="15rem"
      disabled={boolean("Disabled", false)}
      onChange={setValue}
    />
  );
});
