import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components";

const meta: Meta = {
  title: "Foundation/Colors",
};
export default meta;

export const Backgrounds: StoryObj = {
  render: () => <Text weight="medium">Default page background</Text>,
  name: "Backgrounds",
};

export const TextColors: StoryObj = {
  render: () => <Text weight="medium">Text copy colors</Text>,
  name: "Text colors",
};

export const FieldBackgrounds: StoryObj = {
  render: () => <Text weight="medium">Fields background colors</Text>,
  name: "Field backgrounds",
};

export const BorderColors: StoryObj = {
  render: () => <Text weight="medium">Border colors</Text>,
  name: "Border colors",
};

export const InteractiveColors: StoryObj = {
  render: () => (
    <Text weight="medium">Primary interactive (primary buttons)</Text>
  ),
  name: "Interactive colors",
};

export const SupportColors: StoryObj = {
  render: () => (
    <Text weight="medium">Colors for using on charts with some status</Text>
  ),
  name: "Support colors",
};
