import styled from "styled-components";
import { BrickLoader } from ".";
import { Spacer } from "../spacer";
import { GnuiContainer, Flex } from "../container";
import theme from "../../theme";

export default {
  title: "Components/BrickLoader",
  component: BrickLoader,
};

export const Default = {
  render: () => (
    <GnuiContainer>
      <BrickLoader />
    </GnuiContainer>
  ),

  name: "default",
};

export const Height = {
  render: () => (
    <GnuiContainer>
      <BrickLoader height="30rem" />
    </GnuiContainer>
  ),

  name: "height",
};

export const ViewBox = {
  render: () => (
    <GnuiContainer>
      <BrickLoader viewBox="0 0 10 1" />
    </GnuiContainer>
  ),

  name: "viewBox",
};
