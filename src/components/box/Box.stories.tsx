import theme from "../../theme";
import { GnuiContainer, FlexContainer } from "../container";
import { Spacer } from "../spacer";
import { Box } from "./Box";

export default {
  title: "Components/Box",
  component: Box,
};

export const BoxDefault = {
  render: () => <Box>Default box</Box>,
  name: "box",
};

export const BoxStyle = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Box boxStyle="lightGrey">Light grey box</Box>
    </FlexContainer>
  ),

  name: "boxStyle",
};

export const Dark = {
  render: () => <Box dark>Dark box</Box>,
  name: "dark",
};

export const Border = {
  render: () => (
    <GnuiContainer>
      <Box border="default">Default border</Box>
      <Spacer height="1rem" />
      <Box border="disabled">Bold border</Box>
      <Spacer height="1rem" />
      <Box border="danger">Danger border</Box>
      <Spacer height="1rem" />
      <Box border="notification">Notification border</Box>
      <Spacer height="1rem" />
      <Box border="1px solid violet">Custom border</Box>
    </GnuiContainer>
  ),

  name: "border",
};

export const Radius = {
  render: () => (
    <GnuiContainer>
      <Box radius="small" border="disabled">
        Box with small border radius prop
      </Box>
      <Spacer height="1rem" />
      <Box radius="default" border="disabled">
        Box with default border radius prop
      </Box>
      <Spacer height="1rem" />
      <Box radius="large" border="disabled">
        Box with large border radius prop
      </Box>
    </GnuiContainer>
  ),

  name: "radius",
};

export const InnerSpacing = {
  render: () => (
    <GnuiContainer>
      <Box innerSpacing="spacing04">Box with spacing04 innerSpacing prop</Box>
      <Spacer height="1rem" />
      <Box innerSpacing="spacing07">Box with spacing07 innerSpacing prop</Box>
    </GnuiContainer>
  ),

  name: "innerSpacing",
};

export const Shadow = {
  render: () => (
    <GnuiContainer>
      <Box shadow="shadow01">Box with shadow01 shadow prop</Box>
      <Spacer height="1rem" />
      <Box shadow="shadow02">Box with shadow02 shadow prop</Box>
      <Spacer height="1rem" />
      <Box shadow="shadow03">Box with shadow03 shadow prop</Box>
      <Spacer height="1rem" />
      <Box shadow="shadow04">Box with shadow04 shadow prop</Box>
    </GnuiContainer>
  ),

  name: "shadow",
};

export const Color = {
  render: () => (
    <GnuiContainer>
      <Box color={theme.color.text.error}>Danger color (from theme)</Box>
      <Spacer height="1rem" />
      <Box color={theme.color.text.info}>Notification color (from theme)</Box>
      <Spacer height="1rem" />
      <Box color="palevioletred">
        Palevioletred box (not exististing in theme)
      </Box>
      <Spacer height="1rem" />
      <Box color="#5ead9d">#5ead9d color</Box>
    </GnuiContainer>
  ),

  name: "color",
};

export const Background = {
  render: () => (
    <GnuiContainer>
      <Box backgroundColor={theme.color.background.error} color="white">
        Danger color
      </Box>
      <Spacer height="1rem" />
      <Box backgroundColor={theme.color.background.info} color="white">
        Notification color
      </Box>
      <Spacer height="1rem" />
      <Box backgroundColor="palevioletred" color="white">
        Palevioletred box
      </Box>
      <Spacer height="1rem" />
      <Box backgroundColor="#5ead9d" color="white">
        \#5ead9d color
      </Box>
    </GnuiContainer>
  ),

  name: "background",
};
