import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { LoadMore } from "./LoadMore";
import { LoadMoreList } from "./LoadMoreList";

const meta: Meta<typeof LoadMore> = {
  title: "Components/LoadMore",
  component: LoadMore,
  parameters: {
    docs: {
      description: {
        component:
          'A component that shows a "Show More" button to load additional items, optionally with a count indicator.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoadMore>;

export const Basic: Story = {
  render: () => (
    <LoadMore
      currentCount={5}
      total={15}
      onLoadMore={() => console.log("Load more clicked")}
    />
  ),
  name: "basic",
};

export const WithoutCount: Story = {
  render: () => (
    <LoadMore
      hideCount
      currentCount={5}
      total={15}
      onLoadMore={() => console.log("Load more clicked")}
    />
  ),
  name: "without-count",
};

export const MidList: Story = {
  render: () => (
    <LoadMore
      currentCount={10}
      total={15}
      onLoadMore={() => console.log("Load more clicked")}
    />
  ),
  name: "mid-list",
};

export const EndOfList: Story = {
  render: () => (
    <LoadMore
      currentCount={15}
      total={15}
      onLoadMore={() => console.log("Load more clicked")}
    />
  ),
  name: "end-of-list",
};

export const Loading: Story = {
  render: () => (
    <LoadMore
      isLoading
      currentCount={5}
      total={15}
      onLoadMore={() => console.log("Load more clicked")}
    />
  ),
  name: "loading",
};

export const WithList: Story = {
  render: () => <LoadMoreList />,
  name: "with-list",
};
