import { Dropdown } from ".";
import { GnuiContainer } from "../container";
import { Spacer } from "../spacer";
import { Text } from "../text";

export default {
  title: "Forms/Dropdown",
  component: Dropdown,
};

export const Dropdown = {
  render: () => {
    const options = [
      {
        value: "test",
        label: "Option 1",
      },
      {
        value: "Option 2",
      },
      "Option 3",
      "Option 4",
    ];

    const [value, setValue] = React.useState("");
    const [value2, setValue2] = React.useState("");

    return (
      <GnuiContainer>
        <Dropdown
          name="Select an option"
          options={options}
          value={value}
          width="15rem"
          minNumOfOptionsToShowSearchBox={4}
          onChange={(val) => setValue(val)}
          title="Example title"
        />
        <Text>
          Your choice:{" "}
          <Text tag="span" weight="medium">
            {!value ? "nothing" : value}
          </Text>
        </Text>
        <Spacer height="8rem" />
      </GnuiContainer>
    );
  },

  name: "dropdown",
};

export const DropdownWithoutSearch = {
  render: () => {
    const options = [
      {
        value: "test",
        label: "Option 1",
      },
      {
        value: "Option 2",
      },
      "Option 3 with very long name that should be wrapped as option and shortened when selected",
      "Option 4",
    ];

    const [value, setValue] = React.useState("");
    const [value2, setValue2] = React.useState("");

    return (
      <GnuiContainer>
        <Dropdown
          name="Select an option"
          options={options}
          value={value2}
          minNumOfOptionsToShowSearchBox={10}
          width="15rem"
          onChange={(val) => setValue2(val)}
          onClear={() => setValue2("")}
          title="Example title clear option"
        />
        <Text>
          Your choice:{" "}
          <Text tag="span" weight="medium">
            {!value2 ? "nothing" : value2}
          </Text>
        </Text>
        <Spacer height="8rem" />
      </GnuiContainer>
    );
  },

  name: "dropdown without search",
};

export const DropdownOtherSizes = {
  render: () => {
    const options = [
      {
        value: "test",
        label: "Option 1",
      },
      {
        value: "Option 2",
      },
      "Option 3 with very long name that should be wrapped as option and shortened when selected",
      "Option 4",
    ];

    const [value, setValue] = React.useState("");
    const [value2, setValue2] = React.useState("");

    return (
      <GnuiContainer>
        <Text mb="0.25rem">Size sm:</Text>
        <Dropdown
          name="Select an option"
          options={options}
          value={value2}
          minNumOfOptionsToShowSearchBox={10}
          width="15rem"
          onChange={(val) => setValue2(val)}
          onClear={() => setValue2("")}
          title="Example title clear option"
          size="sm"
        />
        <Text mb="0.25rem" mt="1rem">
          Size xs:
        </Text>
        <Dropdown
          name="Select an option"
          options={options}
          value={value}
          minNumOfOptionsToShowSearchBox={10}
          width="15rem"
          onChange={(val) => setValue(val)}
          onClear={() => setValue("")}
          title="Example title clear option"
          size="xs"
        />
        <Spacer height="8rem" />
      </GnuiContainer>
    );
  },

  name: "dropdown other sizes",
};
