import { MultipleSelect, SelectButton } from ".";
import { Text } from "../text";

export default {
  title: "Forms/SelectButton",
  component: MultipleSelect,
};

export const Default = {
  render: () => {
    const [value, setValue] = React.useState();

    return (
      <MultipleSelect>
        <SelectButton
          name="button1"
          value="button1"
          labelText="Button 1"
          onClick={setValue}
          isActive={value === "button1"}
        />
        <SelectButton
          name="button2"
          value="button2"
          labelText="Button 2"
          onClick={setValue}
          isActive={value === "button2"}
        />
        <SelectButton
          name="button3"
          value="button3"
          labelText="Button 3"
          onClick={setValue}
          isActive={value === "button3"}
        />
      </MultipleSelect>
    );
  },

  name: "default",
};

export const Disabled = {
  render: () => {
    const [value, setValue] = React.useState();

    return (
      <MultipleSelect>
        <SelectButton
          name="button1"
          value="button1"
          labelText="Disabled"
          onClick={setValue}
          isActive={value === "button1"}
          disabled
        />
        <SelectButton
          name="button2"
          value="button2"
          labelText="Button 2"
          onClick={setValue}
          isActive={value === "button2"}
        />
        <SelectButton
          name="button3"
          value="button3"
          labelText="Button 3"
          onClick={setValue}
          isActive={value === "button3"}
        />
      </MultipleSelect>
    );
  },

  name: "disabled",
};

export const Small = {
  render: () => {
    const [value, setValue] = React.useState();

    return (
      <MultipleSelect size="small">
        <SelectButton
          name="button1"
          value="button1"
          labelText="Button 1"
          onClick={setValue}
          isActive={value === "button1"}
        />
        <SelectButton
          name="button2"
          value="button2"
          labelText="Button 2"
          onClick={setValue}
          isActive={value === "button2"}
        />
        <SelectButton
          name="button3"
          value="button3"
          labelText="Button 3"
          onClick={setValue}
          isActive={value === "button3"}
        />
      </MultipleSelect>
    );
  },

  name: "small",
};

export const Status = {
  render: () => {
    const [value, setValue] = React.useState();

    return (
      <div>
        <Text>Success</Text>
        <MultipleSelect status="success">
          <SelectButton
            name="button1"
            value="button1"
            labelText="Button 1"
            onClick={setValue}
            isActive={value === "button1"}
          />
          <SelectButton
            name="button2"
            value="button2"
            labelText="Button 2"
            onClick={setValue}
            isActive={value === "button2"}
          />
          <SelectButton
            name="button3"
            value="button3"
            labelText="Button 3"
            onClick={setValue}
            isActive={value === "button3"}
          />
        </MultipleSelect>
        <Text marginTop="1rem">Danger</Text>
        <MultipleSelect status="danger">
          <SelectButton
            name="danger-button1"
            value="danger-button1"
            labelText="Button 1"
            onClick={setValue}
            isActive={value === "danger-button1"}
          />
          <SelectButton
            name="danger-button2"
            value="danger-button2"
            labelText="Button 2"
            onClick={setValue}
            isActive={value === "danger-button2"}
          />
          <SelectButton
            name="danger-button3"
            value="danger-button3"
            labelText="Button 3"
            onClick={setValue}
            isActive={value === "danger-button3"}
          />
        </MultipleSelect>
        <Text marginTop="1rem">Warning</Text>
        <MultipleSelect status="warning">
          <SelectButton
            name="warning-button1"
            value="warning-button1"
            labelText="Button 1"
            onClick={setValue}
            isActive={value === "warning-button1"}
          />
          <SelectButton
            name="warning-button2"
            value="warning-button2"
            labelText="Button 2"
            onClick={setValue}
            isActive={value === "warning-button2"}
          />
          <SelectButton
            name="warning-button3"
            value="warning-button3"
            labelText="Button 3"
            onClick={setValue}
            isActive={value === "warning-button3"}
          />
        </MultipleSelect>
        <Text marginTop="1rem">Notification</Text>
        <MultipleSelect status="notification">
          <SelectButton
            name="notification-button1"
            value="notification-button1"
            labelText="Button 1"
            onClick={setValue}
            isActive={value === "notification-button1"}
          />
          <SelectButton
            name="notification-button2"
            value="notification-button2"
            labelText="Button 2"
            onClick={setValue}
            isActive={value === "notification-button2"}
          />
          <SelectButton
            name="notification-button3"
            value="notification-button3"
            labelText="Button 3"
            onClick={setValue}
            isActive={value === "notification-button3"}
          />
        </MultipleSelect>
      </div>
    );
  },

  name: "status",
};
