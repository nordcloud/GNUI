import styled from "styled-components";
import { Loader } from ".";
import { Spacer } from "../spacer";
import { GnuiContainer, Flex } from "../container";
import theme from "../../theme";

export default {
  title: "Components/Loader",
  component: Loader,
};

export const Default = {
  render: () => <Loader />,
  name: "default",
  height: "300px",
};

export const Position = {
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
  height: "300px",
};

export const InContent = {
  render: () => (
    <GnuiContainer>
      <Loader inContent />
    </GnuiContainer>
  ),

  name: "inContent",
};

export const IsBackground = {
  render: () => (
    <GnuiContainer>
      <Loader isBackground />
    </GnuiContainer>
  ),

  name: "isBackground",
  height: "300px",
};
