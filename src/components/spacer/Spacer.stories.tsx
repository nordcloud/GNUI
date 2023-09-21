import { Meta, StoryObj } from "@storybook/react";
import theme from "../../theme";
import { GnuiContainer, FlexContainer } from "../container";
import { Text } from "../text";
import { Spacer } from "./Spacer";

const meta: Meta = {
  title: "Foundation/Spacing",
  component: Spacer,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <FlexContainer>
      <GnuiContainer
        style={{
          background: theme.color.background.ui05,
          textAlign: "center",
          width: "100%",
          borderRadius: theme.radius.default,
        }}
      >
        <Text color="white">GnuiContainer</Text>
      </GnuiContainer>
      <Spacer width="2.5rem" bgColor={theme.color.background.ui05} />
      <GnuiContainer
        style={{
          background: theme.color.background.ui05,
          textAlign: "center",
          width: "100%",
          borderRadius: theme.radius.default,
        }}
      >
        <Text color="white">GnuiContainer</Text>
      </GnuiContainer>
    </FlexContainer>
  ),

  name: "default",
};

export const Margin: StoryObj = {
  render: () => (
    <GnuiContainer>
      <GnuiContainer
        style={{
          background: theme.color.background.ui05,
          textAlign: "center",
          width: "100%",
          borderRadius: theme.radius.default,
          padding: "0.25rem",
        }}
      >
        <Text color="white">GnuiContainer</Text>
      </GnuiContainer>
      <Spacer height="25px" />
      <GnuiContainer
        style={{
          background: theme.color.background.ui05,
          textAlign: "center",
          width: "100%",
          borderRadius: theme.radius.default,
          padding: "0.25rem",
        }}
      >
        <Text color="white">GnuiContainer</Text>
      </GnuiContainer>
    </GnuiContainer>
  ),

  name: "margin",
};
