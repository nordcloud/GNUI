import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Breadcrumbs
      list={[
        {
          label: "Home",
          uri: `#`,
        },
        {
          label: "Hosts",
          uri: `#`,
        },
        {
          label: "Disabled",
          uri: `#`,
          isDisabled: true,
        },
        {
          label: "Hosts 2",
          uri: `#`,
        },
        {
          label: "Host Details",
          uri: `#`,
        },
      ]}
    />
  ),

  name: "default",
};

export const CustomComponent: StoryObj = {
  render: () => (
    <Breadcrumbs
      renderCustom={({ breadcrumb }) => (
        <Button as="a" linkTo={breadcrumb.uri}>
          test123
        </Button>
      )}
      list={[
        {
          label: "Home",
          uri: `#`,
        },
        {
          label: "Hosts",
          uri: `#`,
        },
        {
          label: "Disabled",
          uri: `#`,
          isDisabled: true,
        },
        {
          label: "Hosts 2",
          uri: `#`,
        },
        {
          label: "Host Details",
          uri: `#`,
        },
      ]}
    />
  ),

  name: "customComponent",
};
