import styled from "styled-components";
import { Spinner } from ".";
import { Spacer } from "../spacer";
import { FlexContainer } from "../container";
import theme from "../../theme";

export default {
  title: "Components/Spinner",
  component: Spinner,
};

export const Default = {
  render: () => <Spinner />,
  name: "default",
};

export const Ninja = {
  render: () => <Spinner ninja />,
  name: "ninja",
};

export const Color = {
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

export const Size = {
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

export const SizeNinja = {
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
