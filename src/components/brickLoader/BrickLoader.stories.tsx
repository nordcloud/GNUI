import { Meta, StoryObj } from "@storybook/react";
import { GnuiContainer } from "../container";
import { BrickLoader } from "./BrickLoader";

const meta: Meta = {
  title: "Components/BrickLoader",
  component: BrickLoader,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <GnuiContainer>
      <BrickLoader />
    </GnuiContainer>
  ),

  name: "default",
};

export const Height: StoryObj = {
  render: () => (
    <GnuiContainer>
      <BrickLoader height="30rem" />
    </GnuiContainer>
  ),

  name: "height",
};

export const ViewBox: StoryObj = {
  render: () => (
    <GnuiContainer>
      <BrickLoader viewBox="0 0 10 1" />
    </GnuiContainer>
  ),

  name: "viewBox",
};
