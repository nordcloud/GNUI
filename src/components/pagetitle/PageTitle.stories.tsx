import { Meta, StoryObj } from "@storybook/react";
import { PageTitle, PageTitleBreadcrumbs } from "./Pagetitle";

const meta: Meta = {
  title: "Patterns/PageTitleBreadcrumbs",
  component: PageTitleBreadcrumbs,
};

export default meta;

export const Pagetitle: StoryObj = {
  render: () => <PageTitle title="Page Heading" />,
  name: "pagetitle",
};

export const Breadcrumbs: StoryObj = {
  render: () => (
    <PageTitleBreadcrumbs
      title="Page Heading"
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
          label: "Host Details",
          uri: `#`,
        },
      ]}
    />
  ),

  name: "breadcrumbs",
};
