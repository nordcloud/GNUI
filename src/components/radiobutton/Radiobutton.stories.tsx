import { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radiobutton";

const meta: Meta = {
  title: "Forms/Radiobutton",
  component: Radio,
};

export default meta;

export const Simple: StoryObj = {
  render: () => <Radio id="radiobutton" labelText="GNUI Radio button" />,
  name: "simple",
};

export const Group: StoryObj = {
  render: () => (
    <RadioGroup name="radiogroup">
      <Radio id="button1" labelText="New York" value="ny" />
      <Radio id="button2" labelText="San Francisco" value="sf" />
      <Radio id="button3" labelText="Los Angeles" value="la" />
    </RadioGroup>
  ),

  name: "group",
};
