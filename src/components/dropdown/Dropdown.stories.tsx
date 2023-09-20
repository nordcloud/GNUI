import { useState } from "react";
import { GnuiContainer } from "../container";
import { Spacer } from "../spacer";
import { Text } from "../text";
import { Dropdown } from "./Dropdown";

export default {
  title: "Forms/Dropdown",
  component: Dropdown,
};

export const DropdownDefault = {
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

    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");

    return (
      <GnuiContainer>
        <Dropdown
          name="Select an option"
          options={options}
          value={value}
          width="15rem"
          minNumOfOptionsToShowSearchBox={4}
          title="Example title"
          onChange={(value_) => setValue(value_)}
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

    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");

    return (
      <GnuiContainer>
        <Dropdown
          name="Select an option"
          options={options}
          value={value2}
          minNumOfOptionsToShowSearchBox={10}
          width="15rem"
          title="Example title clear option"
          onChange={(value_) => setValue2(value_)}
          onClear={() => setValue2("")}
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

    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");

    return (
      <GnuiContainer>
        <Text mb="0.25rem">Size sm:</Text>
        <Dropdown
          name="Select an option"
          options={options}
          value={value2}
          minNumOfOptionsToShowSearchBox={10}
          width="15rem"
          title="Example title clear option"
          size="sm"
          onChange={(value_) => setValue2(value_)}
          onClear={() => setValue2("")}
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
          title="Example title clear option"
          size="xs"
          onChange={(value_) => setValue(value_)}
          onClear={() => setValue("")}
        />
        <Spacer height="8rem" />
      </GnuiContainer>
    );
  },

  name: "dropdown other sizes",
};
