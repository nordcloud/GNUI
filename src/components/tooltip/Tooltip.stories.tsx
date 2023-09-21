import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { Input } from "../input";
import { SVGIcon } from "../svgicon";
import { Text } from "../text";
import { Tooltip } from ".";

const meta: Meta = {
  title: "Components/Tooltip",
  component: Tooltip,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <FlexContainer
      justifyContent="space-evenly"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <Tooltip caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
        <Text>Tooltip</Text>
      </Tooltip>
    </FlexContainer>
  ),

  name: "default",
};

export const Bottom: StoryObj = {
  render: () => (
    <FlexContainer
      justifyContent="space-evenly"
      css={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <Tooltip
        bottom
        caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      >
        <Text>Tooltip</Text>
      </Tooltip>
    </FlexContainer>
  ),

  name: "bottom",
};

export const Position: StoryObj = {
  render: () => (
    <FlexContainer
      justifyContent="space-evenly"
      css={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div>
        <Tooltip
          position="left"
          caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        >
          <Text>Align to the Left</Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip
          position="right"
          caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        >
          <Text>Align to the Right</Text>
        </Tooltip>
      </div>
    </FlexContainer>
  ),

  name: "position",
};

export const Status: StoryObj = {
  render: () => (
    <FlexContainer
      justifyContent="space-evenly"
      css={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div>
        <Tooltip status="danger" caption="Error tooltip">
          <Text>Danger</Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip status="warning" caption="Warning tooltip">
          <Text>Warning</Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip status="success" caption="Success tooltip">
          <Text>Success</Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip status="notification" caption="Notification tooltip">
          <Text>Notification</Text>
        </Tooltip>
      </div>
    </FlexContainer>
  ),

  name: "status",
};

export const Components: StoryObj = {
  render: () => (
    <FlexContainer
      justifyContent="space-evenly"
      css={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div>
        <Tooltip
          position="left"
          caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        >
          <Button>Button example</Button>
        </Tooltip>
      </div>
      <div>
        <Tooltip caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
          <SVGIcon name="help" />
        </Tooltip>
      </div>
      <div>
        <Tooltip
          position="left"
          caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        >
          <Input name="Name" placeholder="Name" />
        </Tooltip>
      </div>
    </FlexContainer>
  ),

  name: "components",
};
