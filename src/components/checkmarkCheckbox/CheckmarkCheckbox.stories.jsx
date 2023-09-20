import { CheckmarkCheckbox, CheckmarkCheckboxGroup } from ".";
import { FlexContainer } from "../container";

export default {
  title: "Forms/CheckmarkCheckbox",
  component: CheckmarkCheckbox,
};

export const Simple = {
  render: () => (
    <FlexContainer
      style={{
        padding: "3rem",
      }}
    >
      <CheckmarkCheckbox
        id="checkbox-1"
        labelText="GNUI Checkbox"
        tooltipProps={{
          showTimeout: 400,
        }}
      />
    </FlexContainer>
  ),

  name: "simple",
};

export const Double = {
  render: () => (
    <FlexContainer
      style={{
        padding: "3rem",
      }}
    >
      <CheckmarkCheckbox
        id="checkbox-2"
        labelText="GNUI Checkbox"
        double
        tooltipProps={{
          showTimeout: 400,
        }}
      />
    </FlexContainer>
  ),

  name: "double",
};

export const WithoutLabel = {
  render: () => (
    <FlexContainer
      style={{
        padding: "3rem",
      }}
    >
      <CheckmarkCheckbox
        withoutLabel
        id="checkbox-5"
        tooltipProps={{
          showTimeout: 400,
        }}
      />
    </FlexContainer>
  ),

  name: "withoutLabel",
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
      <FlexContainer
        just
        style={{
          padding: "3rem",
        }}
      >
        <CheckboxGroup name="gnui-checkbox-group">
          {names.map((names, index) => (
            <CheckmarkCheckbox
              id={names[index]}
              onChange={() => handleCheckbox(index)}
              labelText={labels[index]}
            />
          ))}
        </CheckboxGroup>
      </FlexContainer>
    );
  },

  name: "group",
};
