import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../box";
import { Spacer } from "../spacer";
import { StickyBar } from ".";

const meta: Meta = {
  title: "Components/StickyBar",
  component: StickyBar,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div
      style={{
        maxHeight: "400px",
        overflowY: "scroll",
      }}
    >
      <StickyBar>
        Some description text<a href="#">link text</a>
      </StickyBar>
      <Spacer height="5rem" />
      <Box border="default">Sample content</Box>
      <Spacer height="5rem" />
      <Box border="disabled">Sample content</Box>
      <Spacer height="5rem" />
      <Box border="danger">Sample content</Box>
      <div
        style={{
          minHeight: "100vh",
        }}
      />
    </div>
  ),

  name: "default",
};
