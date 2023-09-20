import { PageTitle, PageTitleBreadcrumbs } from ".";

export default {
  title: "Patterns/PageTitleBreadcrumbs",
  component: PageTitleBreadcrumbs,
};

export const Pagetitle = {
  render: () => <PageTitle title="Page Heading" />,
  name: "pagetitle",
};

export const Breadcrumbs = {
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
