import { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./MenuItem";
import { NavigationBar } from "./NavigationBar";
import { ItemsContainer, ItemsSection } from "./styles";

const meta: Meta = {
  title: "Components/NavigationBar",
  component: NavigationBar,
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          height: "400px",
          position: "relative",
        }}
      >
        <NavigationBar position="absolute" height="100%">
          <ItemsContainer>
            <ItemsSection>
              <a
                href="https://www.nordcloud.com"
                target="_blank"
                rel="noreferrer"
              >
                <MenuItem caption="Go to Nordcloud.com" icon="externalLink" />
              </a>
              <MenuItem caption="Dashboard" icon="dashboard" />
              <MenuItem caption="Applications" icon="application" />
              <MenuItem caption="Settings" icon="settings">
                <ul
                  style={{
                    backgroundColor: "green",
                    padding: "0.5rem 1rem",
                    border: "solid 1px black",
                  }}
                >
                  <li>User settings</li>
                  <li>Application settings</li>
                </ul>
              </MenuItem>
              <MenuItem caption="Archive" icon="archive" />
            </ItemsSection>
          </ItemsContainer>
        </NavigationBar>
      </div>
    );
  },

  name: "default",
  parameters: {
    docs: {
      story: {
        height: "450px",
      },
    },
  },
};

export const NonExpandable: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          height: "400px",
          position: "relative",
        }}
      >
        <NavigationBar position="absolute" height="100%" expandable={false}>
          <ItemsContainer>
            <ItemsSection>
              <MenuItem caption="Dashboard" icon="dashboard" />
              <MenuItem caption="Applications" icon="application" />
              <MenuItem caption="Settings" icon="settings">
                <ul
                  style={{
                    backgroundColor: "green",
                    padding: "0.5rem 1rem",
                    border: "solid 1px black",
                  }}
                >
                  <li>User settings</li>
                  <li>Application settings</li>
                </ul>
              </MenuItem>
              <MenuItem caption="Archive" icon="archive" />
            </ItemsSection>
          </ItemsContainer>
        </NavigationBar>
      </div>
    );
  },

  name: "non-expandable",
  parameters: {
    docs: {
      story: {
        height: "450px",
      },
    },
  },
};

export const MultipleSectionsWithStickToBottom: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          height: "550px",
          position: "relative",
        }}
      >
        <NavigationBar position="absolute" height="100%">
          <ItemsContainer>
            <ItemsSection>
              <MenuItem caption="Dashboard" icon="dashboard" />
              <MenuItem caption="Applications" icon="application" />
              <MenuItem caption="Settings" icon="settings">
                <ul
                  style={{
                    backgroundColor: "green",
                    padding: "0.5rem 1rem",
                    border: "solid 1px black",
                  }}
                >
                  <li>User settings</li>
                  <li>Application settings</li>
                </ul>
              </MenuItem>
            </ItemsSection>
            <ItemsSection>
              <MenuItem caption="KPIs" icon="chartAscending" />
              <MenuItem caption="Reserved Instances" icon="reservedInstances" />
              <MenuItem caption="Estate Records" icon="resource" />
            </ItemsSection>
            <ItemsSection stickToBottom>
              <MenuItem caption="Archive" icon="archive" />
            </ItemsSection>
          </ItemsContainer>
        </NavigationBar>
      </div>
    );
  },

  name: "multiple-sections-with-stick-to-bottom",
  parameters: {
    docs: {
      story: {
        height: "55px",
      },
    },
  },
};

export const Scrollable: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          height: "400px",
          position: "relative",
        }}
      >
        <NavigationBar position="absolute" height="100%">
          <ItemsContainer>
            <ItemsSection>
              <MenuItem caption="Dashboard" icon="dashboard" />
              <MenuItem caption="Applications" icon="application" />
              <MenuItem caption="Settings" icon="settings">
                <ul
                  style={{
                    backgroundColor: "green",
                    padding: "0.5rem 1rem",
                    border: "solid 1px black",
                  }}
                >
                  <li>User settings</li>
                  <li>Application settings</li>
                </ul>
              </MenuItem>
              <MenuItem caption="KPIs" icon="chartAscending" />
              <MenuItem caption="Reserved Instances" icon="reservedInstances" />
              <MenuItem caption="Estate Records" icon="resource" />
              <MenuItem caption="Cloud Accounts" icon="cloud" />
            </ItemsSection>
            <ItemsSection stickToBottom>
              <MenuItem caption="Archive" icon="archive" />
            </ItemsSection>
          </ItemsContainer>
        </NavigationBar>
      </div>
    );
  },

  name: "scrollable",
  parameters: {
    docs: {
      story: {
        height: "450px",
      },
    },
  },
};
