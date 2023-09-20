import { Text } from "../components/text";

export default {
  title: "Foundation/Colors",
};

export const Backgrounds = {
  render: () => <Text weight="medium">Default page background</Text>,
  name: "Backgrounds",
};

export const TextColors = {
  render: () => <Text weight="medium">Text copy colors</Text>,
  name: "Text colors",
};

export const FieldBackgrounds = {
  render: () => <Text weight="medium">Fields background colors</Text>,
  name: "Field backgrounds",
};

export const BorderColors = {
  render: () => <Text weight="medium">Border colors</Text>,
  name: "Border colors",
};

export const InteractiveColors = {
  render: () => (
    <Text weight="medium">Primary interactive (primary buttons)</Text>
  ),
  name: "Interactive colors",
};

export const SupportColors = {
  render: () => (
    <Text weight="medium">Colors for using on charts with some status</Text>
  ),
  name: "Support colors",
};
