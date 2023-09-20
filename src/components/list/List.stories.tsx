import { List } from ".";

export default {
  title: "Components/List",
  component: List,
};

export const Default = {
  render: () => <List items={["List item", "Second list item"]} />,
  name: "default",
};

export const Spacing = {
  render: () => (
    <List spacing="0 0 1.15rem 0" items={["List item", "Second list item"]} />
  ),
  name: "spacing",
};

export const Horizontal = {
  render: () => <List horizontal items={["List item", "Second list item"]} />,
  name: "horizontal",
};

export const Unordered = {
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

export const HasDescription = {
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
