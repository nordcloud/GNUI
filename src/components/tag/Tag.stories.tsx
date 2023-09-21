import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta = {
  title: "Components/Tag",
  component: Tag,
};

export default meta;

export const TagDefault: StoryObj = {
  render: () => (
    <>
      <Tag text="Default tag" />
      <Tag
        showClose
        text="Tag with close button"
        onClick={() => alert("clicked")}
      />
      <Tag
        showClose
        text="Tag with close button and icon"
        icon="plus"
        onClick={() => alert("clicked")}
      />
      <Tag icon="edit" onClick={() => alert("clicked")} />
      <Tag isTransparent icon="edit" onClick={() => alert("clicked")} />
      <Tag icon="plus" onClick={() => alert("clicked")} />
      <Tag text="Theme color" color="purple" colorText="white" />
    </>
  ),
  name: "tag",
};

export const CloseButton: StoryObj = {
  render: () => (
    <>
      <Tag
        showClose
        color="success"
        text="Success"
        onClick={() => alert("clicked")}
      />
      <Tag
        showClose
        color="warning"
        text="Warning"
        onClick={() => alert("clicked")}
      />
      <Tag
        showClose
        color="danger"
        text="Error"
        onClick={() => alert("clicked")}
      />
      <Tag
        showClose
        color="notification"
        text="Help"
        onClick={() => alert("clicked")}
        onCloseClick={() => alert("clicked close")}
      />
      <Tag
        showClose
        color="purple"
        text="Purple"
        onClick={() => alert("clicked")}
      />
      <Tag
        showClose
        color="indigo"
        text="Indigo"
        onClick={() => alert("clicked")}
      />
    </>
  ),
  name: "close button",
};

export const TagWithIcon: StoryObj = {
  render: () => (
    <>
      <Tag color="success" text="Success" icon="success" />
      <Tag color="warning" text="Warning" icon="info" />
      <Tag color="danger" text="Error" icon="danger" />
      <Tag color="notification" text="Help" icon="help" />
      <Tag text="Add" icon="plus" />
      <Tag text="Edit" icon="edit" />
    </>
  ),
  name: "tag with icon",
};
