import { Text } from ".";
import { GnuiContainer } from "../container";

export default {
  title: "Typography/Text",
  component: Text,
};

export const Simple = {
  render: () => <Text>Default paragraph.</Text>,
  name: "simple",
};

export const Size = {
  render: () => (
    <GnuiContainer>
      <Text size="xs">(xs) Extra Small size (10px)</Text>
      <Text size="sm">(sm) Small size (12px)</Text>
      <Text size="md">(md) Regular size (16px)</Text>
      <Text size="lg">(lg) Big size (20px)</Text>
      <Text size="xl">(xl) Large size (24px)</Text>
      <Text size="xxl">(xxl) Extra Large size (32px)</Text>
    </GnuiContainer>
  ),

  name: "size",
};

export const Tag = {
  render: () => (
    <GnuiContainer>
      <Text tag="div">
        This is div.<Text tag="span">This is span.</Text>
      </Text>
    </GnuiContainer>
  ),

  name: "tag",
};

export const Weight = {
  render: () => (
    <GnuiContainer>
      <Text weight="regular">Lorem ipsum solor domet.</Text>
      <Text weight="medium">Lorem ipsum solor domet.</Text>
      <Text weight="bold">Lorem ipsum solor domet.</Text>
    </GnuiContainer>
  ),

  name: "weight",
};

export const Color = {
  render: () => (
    <GnuiContainer>
      <Text color="danger">Lorem ipsum solor domet.</Text>
      <Text color="success">Lorem ipsum solor domet.</Text>
      <Text color="warning">Lorem ipsum solor domet.</Text>
      <Text color="notification">Lorem ipsum solor domet.</Text>
      <Text color="#ccc">Lorem ipsum solor domet.</Text>
    </GnuiContainer>
  ),

  name: "color",
};

export const TextStyle = {
  render: () => (
    <GnuiContainer>
      <Text textStyle="normal">Lorem ipsum solor domet.</Text>
      <Text textStyle="italic">Lorem ipsum solor domet.</Text>
    </GnuiContainer>
  ),

  name: "textStyle",
};

export const Align = {
  render: () => (
    <GnuiContainer>
      <Text align="left">Lorem ipsum solor domet.</Text>
      <Text align="center">Lorem ipsum solor domet.</Text>
      <Text align="right">Lorem ipsum solor domet.</Text>
    </GnuiContainer>
  ),

  name: "align",
};

export const IsTitle = {
  render: () => (
    <GnuiContainer>
      <Text isTitle="true">Lorem ipsum solor domet.</Text>
    </GnuiContainer>
  ),

  name: "isTitle",
};
