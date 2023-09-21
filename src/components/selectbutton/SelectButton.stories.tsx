import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../text";
import { MultipleSelect, SelectButton } from "./SelectButton";

const meta: Meta = {
  title: "Forms/SelectButton",
  component: MultipleSelect,
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState();

    return (
      <MultipleSelect>
        <SelectButton
          name="button1"
          value="button1"
          labelText="Button 1"
          isActive={value === "button1"}
          onClick={setValue}
        />
        <SelectButton
          name="button2"
          value="button2"
          labelText="Button 2"
          isActive={value === "button2"}
          onClick={setValue}
        />
        <SelectButton
          name="button3"
          value="button3"
          labelText="Button 3"
          isActive={value === "button3"}
          onClick={setValue}
        />
      </MultipleSelect>
    );
  },

  name: "default",
};

export const Disabled: StoryObj = {
  render: () => {
    const [value, setValue] = useState();

    return (
      <MultipleSelect>
        <SelectButton
          disabled
          name="button1"
          value="button1"
          labelText="Disabled"
          isActive={value === "button1"}
          onClick={setValue}
        />
        <SelectButton
          name="button2"
          value="button2"
          labelText="Button 2"
          isActive={value === "button2"}
          onClick={setValue}
        />
        <SelectButton
          name="button3"
          value="button3"
          labelText="Button 3"
          isActive={value === "button3"}
          onClick={setValue}
        />
      </MultipleSelect>
    );
  },

  name: "disabled",
};

export const Small: StoryObj = {
  render: () => {
    const [value, setValue] = useState();

    return (
      <MultipleSelect size="small">
        <SelectButton
          name="button1"
          value="button1"
          labelText="Button 1"
          isActive={value === "button1"}
          onClick={setValue}
        />
        <SelectButton
          name="button2"
          value="button2"
          labelText="Button 2"
          isActive={value === "button2"}
          onClick={setValue}
        />
        <SelectButton
          name="button3"
          value="button3"
          labelText="Button 3"
          isActive={value === "button3"}
          onClick={setValue}
        />
      </MultipleSelect>
    );
  },

  name: "small",
};

export const Status: StoryObj = {
  render: () => {
    const [value, setValue] = useState();

    return (
      <div>
        <Text>Success</Text>
        <MultipleSelect status="success">
          <SelectButton
            name="button1"
            value="button1"
            labelText="Button 1"
            isActive={value === "button1"}
            onClick={setValue}
          />
          <SelectButton
            name="button2"
            value="button2"
            labelText="Button 2"
            isActive={value === "button2"}
            onClick={setValue}
          />
          <SelectButton
            name="button3"
            value="button3"
            labelText="Button 3"
            isActive={value === "button3"}
            onClick={setValue}
          />
        </MultipleSelect>
        <Text marginTop="1rem">Danger</Text>
        <MultipleSelect status="danger">
          <SelectButton
            name="danger-button1"
            value="danger-button1"
            labelText="Button 1"
            isActive={value === "danger-button1"}
            onClick={setValue}
          />
          <SelectButton
            name="danger-button2"
            value="danger-button2"
            labelText="Button 2"
            isActive={value === "danger-button2"}
            onClick={setValue}
          />
          <SelectButton
            name="danger-button3"
            value="danger-button3"
            labelText="Button 3"
            isActive={value === "danger-button3"}
            onClick={setValue}
          />
        </MultipleSelect>
        <Text marginTop="1rem">Warning</Text>
        <MultipleSelect status="warning">
          <SelectButton
            name="warning-button1"
            value="warning-button1"
            labelText="Button 1"
            isActive={value === "warning-button1"}
            onClick={setValue}
          />
          <SelectButton
            name="warning-button2"
            value="warning-button2"
            labelText="Button 2"
            isActive={value === "warning-button2"}
            onClick={setValue}
          />
          <SelectButton
            name="warning-button3"
            value="warning-button3"
            labelText="Button 3"
            isActive={value === "warning-button3"}
            onClick={setValue}
          />
        </MultipleSelect>
        <Text marginTop="1rem">Notification</Text>
        <MultipleSelect status="notification">
          <SelectButton
            name="notification-button1"
            value="notification-button1"
            labelText="Button 1"
            isActive={value === "notification-button1"}
            onClick={setValue}
          />
          <SelectButton
            name="notification-button2"
            value="notification-button2"
            labelText="Button 2"
            isActive={value === "notification-button2"}
            onClick={setValue}
          />
          <SelectButton
            name="notification-button3"
            value="notification-button3"
            labelText="Button 3"
            isActive={value === "notification-button3"}
            onClick={setValue}
          />
        </MultipleSelect>
      </div>
    );
  },

  name: "status",
};
