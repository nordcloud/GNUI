import styled from "styled-components";
import { StickyBar } from ".";
import { Spacer } from "../spacer";
import { Box } from "../box";
import theme from "../../theme";

export default {
  title: "Components/StickyBar",
  component: StickyBar,
};

export const Default = {
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
