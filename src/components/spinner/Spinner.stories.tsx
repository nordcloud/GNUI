import { Meta, StoryObj } from "@storybook/react";
import { FlexContainer } from "../container";
import { Spinner } from "./Spinner";

const meta: Meta = {
  title: "Components/Spinner",
  component: Spinner,
};

export default meta;

export const Default: StoryObj = {
  render: () => <Spinner />,
  name: "default",
};

export const Ninja: StoryObj = {
  render: () => <Spinner ninja />,
  name: "ninja",
};

export const Color: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Spinner color="success" />
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="notification" />
    </FlexContainer>
  ),

  name: "color",
};

export const Size: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner size="xxl" />
    </FlexContainer>
  ),

  name: "size",
};

export const SizeNinja: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Spinner ninja size="sm" />
      <Spinner ninja size="md" />
      <Spinner ninja size="lg" />
      <Spinner ninja size="xl" />
      <Spinner ninja size="xxl" />
    </FlexContainer>
  ),

  name: "sizeNinja",
};
