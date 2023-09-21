import { Meta, StoryObj } from "@storybook/react";
import { PaginationBox } from "./Pagination";

const meta: Meta = {
  title: "Components/Pagination",
  component: PaginationBox,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <PaginationBox count={400} from={0} size={20} setPage={0} setSize={20} />
  ),
  name: "default",
};

export const Small = {
  render: () => (
    <PaginationBox
      small
      count={400}
      from={0}
      size={20}
      setPage={0}
      setSize={20}
    />
  ),
  name: "small",
};
