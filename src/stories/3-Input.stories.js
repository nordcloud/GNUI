import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import { Form } from "../components/form";
import { Input } from "../components/input";

const stories = storiesOf("Components/Input", module);
stories.addDecorator(withKnobs).add("simple", () => {
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
  return (
    <Form width={text("Form width", "100%")}>
      <Input
        disabled={boolean("Disabled", false)}
        name={text("Name", "Input name")}
        type={select("Type", inputTypes, "text")}
        placeholder={text("Placeholder", "Placeholder")}
        note={text(
          "Note",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        )}
      />
      <Input name={text("Name", "Input name")} />
      <Input name={text("Name", "Input name")} />
      <Input
        name={text("Name", "Input name")}
        note={text(
          "Note",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        )}
      />
    </Form>
  );
});
