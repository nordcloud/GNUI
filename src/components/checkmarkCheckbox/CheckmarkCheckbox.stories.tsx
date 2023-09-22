import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "../checkbox/Checkbox";
import { FlexContainer } from "../container";
import { CheckmarkCheckbox } from "./CheckmarkCheckbox";

const meta: Meta = {
  title: "Forms/CheckmarkCheckbox",
  component: CheckmarkCheckbox,
};

export default meta;

export const Simple: StoryObj = {
  render: () => (
    <FlexContainer
      style={{
        padding: "3rem",
      }}
    >
      <CheckmarkCheckbox id="checkbox-1" labelText="GNUI Checkbox" />
    </FlexContainer>
  ),

  name: "simple",
};

export const Double: StoryObj = {
  render: () => (
    <FlexContainer
      style={{
        padding: "3rem",
      }}
    >
      <CheckmarkCheckbox double id="checkbox-2" labelText="GNUI Checkbox" />
    </FlexContainer>
  ),

  name: "double",
};

export const WithoutLabel: StoryObj = {
  render: () => (
    <FlexContainer
      style={{
        padding: "3rem",
      }}
    >
      <CheckmarkCheckbox withoutLabel id="checkbox-5" />
    </FlexContainer>
  ),

  name: "withoutLabel",
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
      <FlexContainer
        style={{
          padding: "3rem",
        }}
      >
        <CheckboxGroup name="gnui-checkbox-group">
          {names.map((item, index) => (
            <CheckmarkCheckbox
              key={item[index]}
              id={item[index]}
              labelText={labels[index]}
              onChange={() => handleCheckbox(index)}
            />
          ))}
        </CheckboxGroup>
      </FlexContainer>
    );
  },

  name: "group",
};
