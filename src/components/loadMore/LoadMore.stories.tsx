import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { LoadMore } from "./LoadMore";
import { LoadMoreList } from "./LoadMoreList";
import { LoadMoreProps } from "./types";

export default {
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
} as Meta;

// Create a template
const Template: Story<LoadMoreProps> = (args) => <LoadMore {...args} />;

// Basic example (with count)
export const Basic = Template.bind({});
Basic.args = {
  currentCount: 5,
  total: 15,
  onLoadMore: () => console.log("Load more clicked"),
  isLoading: false,
  hideCount: false,
};

// Without count example
export const WithoutCount = Template.bind({});
WithoutCount.args = {
  currentCount: 5,
  total: 15,
  onLoadMore: () => console.log("Load more clicked"),
  isLoading: false,
  hideCount: true,
};

// Mid-list example
export const MidList = Template.bind({});
MidList.args = {
  currentCount: 10,
  total: 15,
  onLoadMore: () => console.log("Load more clicked"),
  isLoading: false,
};

// End of list example (no "Show More" button)
export const EndOfList = Template.bind({});
EndOfList.args = {
  currentCount: 15,
  total: 15,
  onLoadMore: () => console.log("Load more clicked"),
  isLoading: false,
};

// Loading state example
export const Loading = Template.bind({});
Loading.args = {
  currentCount: 5,
  total: 15,
  onLoadMore: () => console.log("Load more clicked"),
  isLoading: true,
};

// Example with list
export function WithList() {
  return <LoadMoreList />
}
