import { Meta, StoryObj } from "@storybook/react";
import { GnuiContainer } from "../container";
import { ListLoader } from "./ListLoader";

const meta: Meta = {
  title: "Components/ListLoader",
  component: ListLoader,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <GnuiContainer>
      <ListLoader />
    </GnuiContainer>
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

export const ItemsNumber: StoryObj = {
  render: () => (
    <GnuiContainer>
      1 row:
      <ListLoader itemsNumber={1} />3 rows:
      <ListLoader itemsNumber={3} />
    </GnuiContainer>
  ),

  name: "itemsNumber",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};

export const Children: StoryObj = {
  render: () => (
    <GnuiContainer>
      <ListLoader>
        <rect x="1%" y="23" rx="0" ry="0" width="1%" height="15" />
        <rect x="3%" y="10" rx="0" ry="0" width="3%" height="40" />
        <rect x="7%" y="10" rx="0" ry="0" width="3%" height="40" />
        <rect x="11%" y="15" rx="5" ry="5" width="33%" height="15" />
        <rect x="11%" y="39" rx="5" ry="5" width="30%" height="9" />
        <rect x="45%" y="15" rx="5" ry="5" width="23%" height="15" />
        <rect x="69%" y="15" rx="5" ry="5" width="13%" height="15" />
        <rect x="83%" y="15" rx="5" ry="5" width="12%" height="15" />
        <rect x="97%" y="10" rx="0" ry="0" width="3%" height="40" />
      </ListLoader>
    </GnuiContainer>
  ),

  name: "children",
};
