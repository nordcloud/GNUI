import { useDisclosure } from "../../hooks";
import { Switch } from ".";
import { GnuiContainer } from "../container";
import { Spacer } from "../spacer";
import theme from "../../theme";

export default {
  title: "Forms/Switch",
  component: Switch,
};

export const Default = {
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

export const Severity = {
  render: () => {
    const { isOpen: checked, toggle } = useDisclosure(true);

    return (
      <GnuiContainer>
        <Switch
          name="label1"
          severity="warning"
          labelText="My Switch Button Warning"
          onClick={toggle}
          checked={checked}
          readOnly
        />
        <Spacer height="1rem" />
        <Switch
          name="label2"
          severity="danger"
          labelText="My Switch Button Danger"
          onClick={toggle}
          checked={checked}
          readOnly
        />
        <Spacer height="1rem" />
        <Switch
          name="label3"
          severity="success"
          labelText="My Switch Button Success"
          onClick={toggle}
          checked={checked}
          readOnly
        />
        <Spacer height="1rem" />
        <Switch
          name="label4"
          severity="notification"
          labelText="My Switch Button Notification"
          onClick={toggle}
          checked={checked}
          readOnly
        />
        <Spacer height="1rem" />
        <Switch
          name="label4"
          severity="primary"
          labelText="My Switch Button Notification"
          onClick={toggle}
          checked={checked}
          readOnly
        />
      </GnuiContainer>
    );
  },

  name: "severity",
};
