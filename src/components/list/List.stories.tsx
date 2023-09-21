import { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";

const meta: Meta = {
  title: "Components/List",
  component: List,
};

export default meta;

export const Default: StoryObj = {
  render: () => <List items={["List item", "Second list item"]} />,
  name: "default",
};

export const Spacing: StoryObj = {
  render: () => (
    <List spacing="0 0 1.15rem 0" items={["List item", "Second list item"]} />
  ),
  name: "spacing",
};

export const Horizontal: StoryObj = {
  render: () => <List horizontal items={["List item", "Second list item"]} />,
  name: "horizontal",
};

export const Unordered: StoryObj = {
  render: () => (
    <List
      unordered
      items={[
        {
          title: "List item",

          rowChildren: [
            {
              title: "List item sub row",
            },
          ],
        },
        {
          title: "Second list item",
        },
      ]}
    />
  ),

  name: "unordered",
};

export const HasDescription: StoryObj = {
  render: () => (
    <List
      hasDescription
      items={[
        {
          title: "List item",
          description: "List item description",
        },
        {
          title: "Second list item",
          description: "Second list item description",
        },
      ]}
    />
  ),

  name: "hasDescription",
};
