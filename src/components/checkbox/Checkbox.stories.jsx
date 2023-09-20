import { Checkbox, CheckboxGroup } from ".";
import { IndeterminateCheckbox } from ".";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
};

export const Simple = {
  render: () => <Checkbox id="checkbox-1" labelText="GNUI Checkbox" />,
  name: "simple",
};

export const WithoutLabel = {
  render: () => <Checkbox withoutLabel id="checkbox-5" />,
  name: "withoutLabel",
};

export const IsIndeterminate = {
  render: () => <IndeterminateCheckbox id="321312" indeterminate={true} />,
  name: "isIndeterminate",
};

export const Group = {
  render: () => {
    const [value, setValue] = React.useState({
      0: false,
      1: false,
      2: false,
    });

    const handleCheckbox = (index) =>
      setValue({
        ...value,
        [index]: !value[index],
      });

    const labels = ["New York", "San Francisco", "Los Angeles"];
    const names = ["checkbox-1", "checkbox-2", "checkbox-3"];

    return (
      <CheckboxGroup name="gnui-checkbox-group">
        {names.map((names, index) => (
          <Checkbox
            id={names[index]}
            onChange={() => handleCheckbox(index)}
            labelText={labels[index]}
          />
        ))}
      </CheckboxGroup>
    );
  },

  name: "group",
};
