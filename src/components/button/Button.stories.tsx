import { Meta, StoryObj } from "@storybook/react";
import { GnuiContainer, FlexContainer } from "../container";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

export const Default: StoryObj = {
  render: () => <Button>Default button</Button>,
  name: "default",
};

export const ButtonSeverity: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Button severity="medium">Secondary button</Button>
      <Button severity="low">Button for use as an icon</Button>
    </FlexContainer>
  ),

  name: "button/severity",
};

export const Size: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Button size="sm">Size SM</Button>
      <Button size="md">Size MD</Button>
      <Button>Size Default</Button>
    </FlexContainer>
  ),

  name: "size",
};

export const Icons: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Button icon="plus" severity="low">
        Label
      </Button>
      <Button icon="plus" severity="low" />
    </FlexContainer>
  ),

  name: "icons",
};

export const IconRight: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Button iconRight severity="low" icon="trash">
        Delete Item
      </Button>
    </FlexContainer>
  ),

  name: "iconRight",
};

export const InitialState = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Button initialState="loading">Save changes</Button>
      <Button initialState="success">Save changes</Button>
      <Button initialState="error">Save changes</Button>
      <Button initialState="loading" />
      <Button initialState="success" />
      <Button initialState="error" />
    </FlexContainer>
  ),

  name: "initialState",
};

export const Status: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Button status="danger">danger</Button>
      <Button status="warning">warning</Button>
      <Button status="success">success</Button>
      <Button status="notification">notification</Button>
      <Button status="discovery">discovery</Button>
      <Button status="accent">accent</Button>
    </FlexContainer>
  ),

  name: "status",
};

export const Disabled: StoryObj = {
  render: () => (
    <Button disabled icon="save">
      Disabled button
    </Button>
  ),
  name: "disabled",
};

export const CustomSpacing: StoryObj = {
  render: () => (
    <GnuiContainer>
      <p>
        <Button ml="3rem" mb="10rem" innerSpacing="0">
          Button with custom spacing
        </Button>
      </p>
    </GnuiContainer>
  ),

  name: "custom-spacing",
};

export const ButtonLink: StoryObj = {
  render: () => (
    <Button linkTo="http://google.com" target="_blank">
      Link to
    </Button>
  ),
  name: "button link",
};

export const ButtonLinkFlex: StoryObj = {
  render: () => (
    <>
      <Button display="flex" linkTo="http://google.com" target="_blank">
        Button
      </Button>
      <Button
        mt="1rem"
        display="inline-flex"
        linkTo="http://google.com"
        target="_blank"
      >
        Button
      </Button>
    </>
  ),
  name: "button link flex",
};

export const As: StoryObj = {
  render: () => (
    <Button as="a" href="http://google.com" target="_blank">
      Link to
    </Button>
  ),
  name: "as",
};

export const Color: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <Button color="danger" icon="danger">
        Danger color
      </Button>
      <Button color="danger" icon="danger" severity="medium">
        Danger color
      </Button>
      <Button color="success">Success color</Button>
      <Button color="warning">Warning color</Button>
      <Button color="notification">Notification color</Button>
      <Button color="#FF1493">HEX color</Button>
    </FlexContainer>
  ),

  name: "color",
};
