import { useDisclosure } from "../../hooks";
import { Toggle } from ".";
import { Spacer } from "../spacer";

export default {
  title: "Forms/Toggle",
  component: Toggle,
};

export const Default = {
  render: () => {
    const { isOpen: value, toggle } = useDisclosure();

    return <Toggle labelText="Default" value={value} onChange={toggle} />;
  },

  name: "default",
};

export const Small = {
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

export const Status = {
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
