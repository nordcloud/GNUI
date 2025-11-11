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
      hideCount
      currentCount={5}
      total={15}
      onLoadMore={() => console.log("Load more clicked")}
    />
  ),
  name: "basic",
};

export const WithCount: Story = {
  render: () => (
    <LoadMore
      currentCount={5}
      total={15}
      onLoadMore={() => console.log("Load more clicked")}
    />
  ),
  name: "with-count",
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

export const WithShowAll: Story = {
  render: () => (
    <LoadMore
      currentCount={5}
      total={15}
      onLoadMore={() => console.log("Load more clicked")}
      onShowAll={() => console.log("Show all clicked")}
    />
  ),
  name: "with-show-all",
};

export const WithList: Story = {
  render: () => <LoadMoreList />,
  name: "with-list",
};

export const WithListAndShowAll: Story = {
  render: () => <LoadMoreList withShowAll />,
  name: "with-list-and-show-all",
};

export const WithShowLess: Story = {
  render: () => (
    <LoadMoreList
      totalItems={15}
      batchSize={5}
      initialItems={Array.from(
        { length: 15 },
        (_, index) => `Item ${index + 1}`
      )}
    />
  ),
  name: "with-show-less",
};
