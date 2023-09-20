import { Spacer } from ".";
import { GnuiContainer, FlexContainer } from "../container";
import { Text } from "../text";
import theme from "../../theme";

export default {
  title: "Foundation/Spacing",
  component: Spacer,
};

export const Default = {
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

export const Margin = {
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
