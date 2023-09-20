import { Radio, RadioGroup } from ".";

export default {
  title: "Forms/Radiobutton",
  component: Radio,
};

export const Simple = {
  render: () => <Radio id="radiobutton" labelText="GNUI Radio button" />,
  name: "simple",
};

export const Group = {
  render: () => (
    <RadioGroup name="radiogroup">
      <Radio id="button1" labelText="New York" value="ny" />
      <Radio id="button2" labelText="San Francisco" value="sf" />
      <Radio id="button3" labelText="Los Angeles" value="la" />
    </RadioGroup>
  ),

  name: "group",
};
