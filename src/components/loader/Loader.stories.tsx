import { Meta, StoryObj } from "@storybook/react";
import { GnuiContainer } from "../container";
import { Loader } from "./Loader";

const meta: Meta = {
  title: "Components/Loader",
  component: Loader,
};

export default meta;

export const Default: StoryObj = {
  render: () => <Loader />,
  name: "default",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};

export const Position: StoryObj = {
  render: () => (
    <GnuiContainer>
      <Loader position="top-left" />
      <Loader />
      <Loader position="top-right" />
      <Loader position="bottom-right" />
      <Loader position="bottom-center" />
      <Loader position="bottom-left" />
    </GnuiContainer>
  ),

  name: "position",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};

export const InContent: StoryObj = {
  render: () => (
    <GnuiContainer>
      <Loader inContent />
    </GnuiContainer>
  ),

  name: "inContent",
};

export const IsBackground: StoryObj = {
  render: () => (
    <GnuiContainer>
      <Loader isBackground />
    </GnuiContainer>
  ),

  name: "isBackground",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};
