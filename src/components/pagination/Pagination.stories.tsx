import { Meta, StoryObj } from "@storybook/react";
import { PaginationBox } from "./Pagination";

const meta: Meta = {
  title: "Components/Pagination",
  component: PaginationBox,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <PaginationBox
      count={400}
      from={0}
      size={20}
      setPage={() => ({})}
      setSize={() => ({})}
    />
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
      setPage={() => ({})}
      setSize={() => ({})}
    />
  ),
  name: "small",
};
