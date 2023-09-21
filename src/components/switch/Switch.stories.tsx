import { Meta, StoryObj } from "@storybook/react";
import { useDisclosure } from "../../hooks";
import { GnuiContainer } from "../container";
import { Spacer } from "../spacer";
import { Switch } from "./Switch";

const meta: Meta = {
  title: "Forms/Switch",
  component: Switch,
};

export default meta;

export const Default: StoryObj = {
  render: () => <Switch labelText="My Switch Button" />,
  name: "default",
};

export const Position = {
  render: () => (
    <GnuiContainer>
      <Switch name="label-left" position="left" labelText="My Switch Button" />
      <Spacer height="1rem" />
      <Switch
        name="label-right"
        position="right"
        labelText="My Switch Button"
      />
    </GnuiContainer>
  ),

  name: "position",
};

export const Severity: StoryObj = {
  render: () => {
    const { isOpen: checked, toggle } = useDisclosure(true);

    return (
      <GnuiContainer>
        <Switch
          readOnly
          name="label1"
          severity="warning"
          labelText="My Switch Button Warning"
          checked={checked}
          onClick={toggle}
        />
        <Spacer height="1rem" />
        <Switch
          readOnly
          name="label2"
          severity="danger"
          labelText="My Switch Button Danger"
          checked={checked}
          onClick={toggle}
        />
        <Spacer height="1rem" />
        <Switch
          readOnly
          name="label3"
          severity="success"
          labelText="My Switch Button Success"
          checked={checked}
          onClick={toggle}
        />
        <Spacer height="1rem" />
        <Switch
          readOnly
          name="label4"
          severity="notification"
          labelText="My Switch Button Notification"
          checked={checked}
          onClick={toggle}
        />
        <Spacer height="1rem" />
        <Switch
          readOnly
          name="label4"
          severity="primary"
          labelText="My Switch Button Notification"
          checked={checked}
          onClick={toggle}
        />
      </GnuiContainer>
    );
  },

  name: "severity",
};
