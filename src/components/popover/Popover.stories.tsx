import { Popover } from ".";
import { Button } from "../button";
import { Spacer } from "../spacer";
import { FlexContainer } from "../container";

export default {
  title: "Components/Popover",
  component: Popover,
};

export const Default = {
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
};

export const AlignRight = {
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
};
