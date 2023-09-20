import { Breadcrumbs } from ".";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
};

export const Default = {
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
