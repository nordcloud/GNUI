import { Tag } from ".";
import { Heading } from "../heading";
import { Flex } from "../container";
import { Breadcrumbs } from "../breadcrumbs";

export default {
  title: "Components/Tag",
  component: Tag,
};

export const Tag = {
  render: () => <Tag text="Default tag" />,
  name: "tag",
};

export const CloseButton = {
  render: () => (
    <Tag
      color="success"
      text="Success"
      showClose
      onClick={() => alert("clicked")}
    />
  ),
  name: "close button",
};

export const TagWithIcon = {
  render: () => <Tag color="success" text="Success" icon="success" />,
  name: "tag with icon",
};
