import { NavigationBar } from "./NavigationBar";
import { MenuItem } from "./MenuItem";
import { ItemsContainer, ItemsSection } from "./styles";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
};

export const Default = {
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
              <a href="https://www.nordcloud.com" target="_blank">
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
  height: "450px",
};

export const NonExpandable = {
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
  height: "450px",
};

export const MultipleSectionsWithStickToBottom = {
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
  height: "55px",
};

export const Scrollable = {
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
  height: "450px",
};
