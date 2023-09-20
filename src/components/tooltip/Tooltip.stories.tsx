import { Tooltip } from ".";
import { Text } from "../text";
import { FlexContainer, Flex } from "../container";
import { Button } from "../button";
import { SVGIcon } from "../svgicon";
import { Input } from "../input";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

export const Default = {
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

export const Bottom = {
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

export const Position = {
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

export const Status = {
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

export const Components = {
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
