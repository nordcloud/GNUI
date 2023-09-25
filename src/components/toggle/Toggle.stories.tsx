import { Meta, StoryObj } from "@storybook/react";
import { useDisclosure } from "../../hooks";
import { Spacer } from "../spacer";
import { Toggle } from "./Toggle";

const meta: Meta = {
  title: "Forms/Toggle",
  component: Toggle,
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const { isOpen: value, toggle } = useDisclosure();

    return (
      <Toggle labelText="Default" value={value} onChange={() => toggle()} />
    );
  },

  name: "default",
};

export const Small: StoryObj = {
  render: () => {
    const { isOpen: value, toggle } = useDisclosure();

    return (
      <Toggle
        size="small"
        labelText="Small"
        name="small"
        value={value}
        onChange={toggle}
      />
    );
  },

  name: "small",
};

export const Status: StoryObj = {
  render: () => {
    const { isOpen: value, toggle } = useDisclosure();

    return (
      <div>
        <p>
          <Toggle
            status="success"
            labelText="Success!"
            name="success"
            value={value}
            onChange={toggle}
          />
        </p>
        <Spacer height="1rem" />
        <p>
          <Toggle
            status="danger"
            labelText="Danger"
            name="danger"
            value={value}
            onChange={toggle}
          />
        </p>
        <Spacer height="1rem" />
        <p>
          <Toggle
            status="warning"
            labelText="Warning"
            name="warning"
            value={value}
            onChange={toggle}
          />
        </p>
        <Spacer height="1rem" />
        <p>
          <Toggle
            status="notification"
            labelText="Notification"
            name="notification"
            value={value}
            onChange={toggle}
          />
        </p>
      </div>
    );
  },

  name: "status",
};
