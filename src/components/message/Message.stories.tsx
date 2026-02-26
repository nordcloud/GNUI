import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import theme from "../../theme";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { Spacer } from "../spacer";
import { Text } from "../text";
import { Message } from "./Message";

const meta: Meta = {
  title: "Components/Message",
  component: Message,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Message>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </Message>
  ),

  name: "default",
};

export const ExpandableUncontrolled: StoryObj = {
  render: () => (
    <Message
      expandable
      defaultExpanded
      image="info"
      status="notification"
      expandedContent={
        <Text color={theme.color.text.text02}>
          This section is rendered from the dedicated expanded content slot.
        </Text>
      }
    >
      Expandable message (uncontrolled)
    </Message>
  ),
  name: "expandable uncontrolled",
};

export const ExpandableControlled: StoryObj = {
  render: () => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const controlledExpandedContent = (
      <Text color={theme.color.text.text02}>
        This message uses controlled expanded state.
      </Text>
    );

    return (
      <FlexContainer direction="column" alignItems="start">
        <Button size="sm" onClick={() => setIsExpanded((current) => !current)}>
          {isExpanded ? "Collapse from parent" : "Expand from parent"}
        </Button>
        <Spacer height="0.5rem" />
        <Message
          expandable
          expanded={isExpanded}
          status="discovery"
          image="help"
          expandedContent={controlledExpandedContent}
          onExpandedChange={setIsExpanded}
        >
          Expandable message (controlled)
        </Message>
      </FlexContainer>
    );
  },
  name: "expandable controlled",
};

export const ExpandableCustomContent: StoryObj = {
  render: () => (
    <Message
      expandable
      image="success"
      status="success"
      expandedContent={
        <div>
          <Text mb={theme.spacing.spacing02}>Arbitrary JSX content:</Text>
          <a href="https://www.nordcloud.com" target="_blank" rel="noreferrer">
            Open link
          </a>
          <table
            style={{
              marginTop: theme.spacing.spacing02,
              width: "100%",
              tableLayout: "fixed",
            }}
          >
            <thead>
              <tr>
                <th align="left">Region</th>
                <th align="left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>eu-west-1</td>
                <td>Healthy</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    >
      Expandable message with custom content
    </Message>
  ),
  name: "expandable custom content",
};

export const Status: StoryObj = {
  render: () => (
    <>
      <Message status="discovery" image="help">
        status: discovery
      </Message>
      <Spacer height="1rem" />
      <Message status="notification" image="info">
        status: notification
      </Message>
      <Spacer height="1rem" />
      <Message status="warning" image="warning">
        status: warning
      </Message>
      <Spacer height="1rem" />
      <Message status="success" image="success">
        status: success
      </Message>
      <Spacer height="1rem" />
      <Message status="danger" image="danger">
        status: danger
      </Message>
    </>
  ),

  name: "status",
};

export const Custom: StoryObj = {
  render: () => (
    <>
      <Message
        color={theme.color.support.purple}
        borderColor={theme.color.support.purple}
        image="target"
      >
        custom border color, text color and icon
      </Message>
    </>
  ),

  name: "custom",
};

export const Discovery: StoryObj = {
  render: () => (
    <>
      <Message status="discovery" image="help">
        <FlexContainer direction="column" alignItems="start">
          <Text
            weight="medium"
            color={theme.color.text.text01}
            mb={theme.spacing.spacing00}
          >
            Discovery status with additional description and button
          </Text>
          <Text
            mt={theme.spacing.spacing02}
            mb={theme.spacing.spacing00}
            color={theme.color.text.text02}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
          <FlexContainer>
            <Button size="md" mt={theme.spacing.spacing04}>
              Action Button
            </Button>
            <Button
              size="md"
              mt={theme.spacing.spacing04}
              ml={theme.spacing.spacing04}
            >
              Action Button 2
            </Button>
          </FlexContainer>
        </FlexContainer>
        <Button size="sm" severity="low" icon="close" />
      </Message>
    </>
  ),

  name: "Discovery",
};

export const Notification: StoryObj = {
  render: () => (
    <>
      <Message status="notification" image="info">
        <FlexContainer direction="column" alignItems="start">
          <Text
            weight="medium"
            color={theme.color.text.info}
            mb={theme.spacing.spacing00}
          >
            Info status with additional description and button
          </Text>
          <Text
            mt={theme.spacing.spacing02}
            mb={theme.spacing.spacing00}
            color={theme.color.text.text02}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
          <FlexContainer>
            <Button
              size="md"
              mt={theme.spacing.spacing04}
              status="notification"
            >
              Action Button
            </Button>
            <Button
              size="md"
              mt={theme.spacing.spacing04}
              ml={theme.spacing.spacing04}
              status="notification"
            >
              Action Button 2
            </Button>
          </FlexContainer>
        </FlexContainer>
        <Button size="sm" severity="low" icon="close" />
      </Message>
    </>
  ),

  name: "Notification",
};

export const Warning: StoryObj = {
  render: () => (
    <>
      <Message status="warning" image="warning">
        <FlexContainer direction="column" alignItems="start">
          <Text
            weight="medium"
            color={theme.color.text.warning}
            mb={theme.spacing.spacing00}
          >
            Warning status with additional description and button
          </Text>
          <Text
            mt={theme.spacing.spacing02}
            mb={theme.spacing.spacing00}
            color={theme.color.text.text02}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
          <FlexContainer>
            <Button size="md" mt={theme.spacing.spacing04} status="warning">
              Action Button
            </Button>
            <Button
              size="md"
              mt={theme.spacing.spacing04}
              ml={theme.spacing.spacing04}
              status="warning"
            >
              Action Button 2
            </Button>
          </FlexContainer>
        </FlexContainer>
        <Button size="sm" severity="low" icon="close" />
      </Message>
    </>
  ),

  name: "Warning",
};

export const Success: StoryObj = {
  render: () => (
    <>
      <Message status="success" image="success">
        <FlexContainer direction="column" alignItems="start">
          <Text
            weight="medium"
            color={theme.color.text.success}
            mb={theme.spacing.spacing00}
          >
            Success status with additional description and button
          </Text>
          <Text
            mt={theme.spacing.spacing02}
            mb={theme.spacing.spacing00}
            color={theme.color.text.text02}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
          <FlexContainer>
            <Button size="md" mt={theme.spacing.spacing04} status="success">
              Action Button
            </Button>
            <Button
              size="md"
              mt={theme.spacing.spacing04}
              ml={theme.spacing.spacing04}
              status="success"
            >
              Action Button 2
            </Button>
          </FlexContainer>
        </FlexContainer>
        <Button size="sm" severity="low" icon="close" />
      </Message>
    </>
  ),

  name: "Success",
};

export const Danger: StoryObj = {
  render: () => (
    <>
      <Message status="danger" image="danger">
        <FlexContainer direction="column" alignItems="start">
          <Text
            weight="medium"
            color={theme.color.text.error}
            mb={theme.spacing.spacing00}
          >
            Danger status with additional description and button
          </Text>
          <Text
            mt={theme.spacing.spacing02}
            mb={theme.spacing.spacing00}
            color={theme.color.text.text02}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
          <FlexContainer>
            <Button size="md" mt={theme.spacing.spacing04} status="danger">
              Action Button
            </Button>
            <Button
              size="md"
              mt={theme.spacing.spacing04}
              ml={theme.spacing.spacing04}
              status="danger"
            >
              Action Button 2
            </Button>
          </FlexContainer>
        </FlexContainer>
        <Button size="sm" severity="low" icon="close" />
      </Message>
    </>
  ),

  name: "Danger",
};
