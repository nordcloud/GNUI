import { Tag } from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
};

export const TagDefault = {
  render: () => <Tag text="Default tag" />,
  name: "tag",
};

export const CloseButton = {
  render: () => (
    <Tag
      showClose
      color="success"
      text="Success"
      onClick={() => alert("clicked")}
    />
  ),
  name: "close button",
};

export const TagWithIcon = {
  render: () => <Tag color="success" text="Success" icon="success" />,
  name: "tag with icon",
};
