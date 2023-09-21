import { Meta, StoryObj } from "@storybook/react";
import theme from "../../theme";
import { Box } from "../box";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { SVGIcon } from "../svgicon";
import { Text } from "../text";
import { Decos } from "./decos";
import { Navigation } from "./Navigation";

const meta: Meta = {
  title: "Components/Navigation",
  component: Navigation.Item,
};

export default meta;

export const Primary: StoryObj = {
  render: () => {
    return (
      <Navigation.Container>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          Google
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          Google
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          Google
        </Navigation.Item>
      </Navigation.Container>
    );
  },

  name: "primary",
};

export const Secondary: StoryObj = {
  render: () => {
    return (
      <Box boxStyle="lightGrey">
        <Text
          size="sm"
          color={theme.color.text.text02}
          mb={theme.spacing.spacing03}
        >
          Settings
        </Text>
        <Navigation.Container secondary>
          <Navigation.Item
            as="a"
            href="http://google.com"
            target="_blank"
            className="hasBg active"
          >
            Employees
            <SVGIcon name="arrowRight" />
          </Navigation.Item>
          <Navigation.Item
            as="a"
            href="http://google.com"
            target="_blank"
            className="hasBg"
          >
            Cost Splitting Rules
            <SVGIcon name="arrowRight" />
          </Navigation.Item>
          <Navigation.Item
            as="a"
            href="http://google.com"
            target="_blank"
            className="hasBg"
          >
            Mapping Rules
            <SVGIcon name="arrowRight" />
          </Navigation.Item>
        </Navigation.Container>
      </Box>
    );
  },

  name: "secondary",
};

export const BusinessContext: StoryObj = {
  render: () => {
    return (
      <Box boxStyle="lightGrey">
        <Text
          size="sm"
          color={theme.color.text.text02}
          mb={theme.spacing.spacing03}
        >
          Business Contexts
        </Text>
        <Navigation.Container secondary>
          <Navigation.Item
            as="a"
            href="http://google.com"
            target="_blank"
            className="hasBg active"
          >
            <div
              style={{
                width: "0.75rem",
                height: "1.5rem",
                backgroundColor: `${theme.color.support.purple}`,
                borderRadius: "2px",
              }}
            />
            Cost Center
            <SVGIcon name="arrowRight" />
          </Navigation.Item>
          <Navigation.Item
            as="a"
            href="http://google.com"
            target="_blank"
            className="hasBg"
          >
            <div
              style={{
                width: "0.75rem",
                height: "1.5rem",
                backgroundColor: `${theme.color.support.indigo}`,
                borderRadius: "2px",
              }}
            />
            Charging Units
            <SVGIcon name="arrowRight" />
          </Navigation.Item>
        </Navigation.Container>
        <FlexContainer justifyContent="center">
          <Button severity="low" mt={theme.spacing.spacing04} icon="plus">
            Add new Business Context
          </Button>
        </FlexContainer>
      </Box>
    );
  },

  name: "business context",
};

export const Popover: StoryObj = {
  render: () => {
    return (
      <Navigation.Container popoverMenu>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <SVGIcon name="edit" />
          Edit Environment
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <SVGIcon name="target" />
          Discovery Rules
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <SVGIcon name="trash" />
          Delete
        </Navigation.Item>
      </Navigation.Container>
    );
  },

  name: "popover",
};

export const Sidebar: StoryObj = {
  render: () => {
    return (
      <Navigation.Container secondary>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Dashboard />
          Dashboard
        </Navigation.Item>
        <Navigation.Item className="separator">
          Applications and Environments
        </Navigation.Item>
        <Navigation.Item
          as="a"
          href="http://google.com"
          target="_blank"
          className="active"
        >
          <Decos.Applications />
          Applications
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Accounts />
          Accounts
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Estate />
          Estate Records
        </Navigation.Item>
        <Navigation.Item className="separator">Organization</Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Orgs />
          Organizational Structures
        </Navigation.Item>
        <Navigation.Item className="separator">Settings</Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Contacts />
          Contact personas
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Users />
          Users
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Orgs2 />
          Organization
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Costs />
          Cost split rules
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Mappings />
          Discovery rules
        </Navigation.Item>
        <Navigation.Item className="separator">Audit</Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.ActionLog />
          Action Log<Navigation.Info>2</Navigation.Info>
        </Navigation.Item>
        <Navigation.Item as="a" href="http://google.com" target="_blank">
          <Decos.Reports />
          Reports
        </Navigation.Item>
      </Navigation.Container>
    );
  },

  name: "sidebar",
};
