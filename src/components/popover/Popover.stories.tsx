import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { Popover } from "./Popover";

const meta: Meta = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Popover trigger={<Button severity="low" icon="menu" size="md" />}>
      <Button mb="0.25rem" severity="low" icon="plus" size="md">
        Add new
      </Button>
      <Button severity="low" icon="edit" size="md">
        Edit
      </Button>
    </Popover>
  ),

  name: "default",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};

export const AlignRight: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="flex-end">
      <Popover
        alignRight
        trigger={<Button severity="low" icon="menu" size="md" />}
      >
        <Button mb="0.25rem" severity="low" icon="plus" size="md">
          Add new
        </Button>
        <Button severity="low" icon="edit" size="md">
          Edit
        </Button>
      </Popover>
    </FlexContainer>
  ),

  name: "alignRight",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};
