import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import { Input, Label, Description } from "../components/input";

const inputTypes = [
  "button",
  "checkbox",
  "color",
  "date",
  "email",
  "file",
  "image",
  "number",
  "password",
  "radio",
  "range",
  "search",
  "tel",
  "text",
  "time",
  "url",
  "submit"
];

const stories = storiesOf("Components/Form", module);
stories
  .addDecorator(withKnobs)
  .add("simple input", () => {
    return (
      <Input
        name={text("Name", "Input name")}
        type={select("Type", inputTypes, "text")}
        placeholder={text("Placeholder", "Placeholder")}
        disabled={boolean("Disabled", false)}
      />
    );
  })
  .add("search input", () => {
    return (
      <Input
        name={text("Name", "Input name")}
        type={select("Type", inputTypes, "search")}
        placeholder={text("Placeholder", "Placeholder")}
        disabled={boolean("Disabled", false)}
      />
    );
  })
  .add("with label and description", () => {
    return (
      <>
        <Label name={text("Name", "Input name")}>
          {text("Name", "Input name")}
        </Label>
        <Input
          name={text("Name", "Input name")}
          type={select("Type", inputTypes, "text")}
          placeholder={text("Placeholder", "Placeholder")}
          disabled={boolean("Disabled", false)}
        />
        <Description>{text("Description", "Inputs description")}</Description>
      </>
    );
  });
