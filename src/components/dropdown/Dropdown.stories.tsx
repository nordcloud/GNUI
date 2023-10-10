import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GnuiContainer } from "../container";
import { Spacer } from "../spacer";
import { Text } from "../text";
import { Dropdown } from "./Dropdown";

const meta: Meta = {
  title: "Forms/Dropdown",
  component: Dropdown,
};

export default meta;

export const DropdownDefault: StoryObj = {
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

    return (
      <GnuiContainer>
        <Dropdown
          name="Select an option"
          options={options}
          value={value}
          width="15rem"
          minNumOfOptionsToShowSearchBox={4}
          title="Example title"
          onChange={(newValue) => setValue(newValue)}
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

export const DropdownWithoutSearch: StoryObj = {
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

    return (
      <GnuiContainer>
        <Dropdown
          name="Select an option"
          options={options}
          value={value}
          minNumOfOptionsToShowSearchBox={10}
          width="15rem"
          title="Example title clear option"
          onChange={(newValue) => setValue(newValue)}
          onClear={() => setValue("")}
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

  name: "dropdown without search",
};

export const DropdownOtherSizes: StoryObj = {
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
          onChange={(newValue) => setValue2(newValue)}
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
          onChange={(newValue) => setValue(newValue)}
          onClear={() => setValue("")}
        />
        <Spacer height="8rem" />
      </GnuiContainer>
    );
  },

  name: "dropdown other sizes",
};
