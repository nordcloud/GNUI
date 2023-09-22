import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "./Checkbox";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";

const meta: Meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
};

export default meta;

export const Simple: StoryObj = {
  render: () => <Checkbox id="checkbox-1" labelText="GNUI Checkbox" />,
  name: "simple",
};

export const WithoutLabel: StoryObj = {
  render: () => <Checkbox withoutLabel id="checkbox-5" />,
  name: "withoutLabel",
};

export const IsIndeterminate: StoryObj = {
  render: () => <IndeterminateCheckbox indeterminate id="321312" />,
  name: "isIndeterminate",
};

export const Group: StoryObj = {
  render: () => {
    const [value, setValue] = useState<{
      [key: number]: boolean;
    }>({
      0: false,
      1: false,
      2: false,
    });

    const handleCheckbox = (index: number) =>
      setValue({
        ...value,
        [index]: !value[index],
      });

    const labels = ["New York", "San Francisco", "Los Angeles"];
    const names = ["checkbox-1", "checkbox-2", "checkbox-3"];

    return (
      <CheckboxGroup name="gnui-checkbox-group">
        {names.map((item, index) => (
          <Checkbox
            key={item[index]}
            id={item[index]}
            labelText={labels[index]}
            onChange={() => handleCheckbox(index)}
          />
        ))}
      </CheckboxGroup>
    );
  },

  name: "group",
};
