import type { Meta, StoryObj } from "@storybook/react";
import { Col, Row, Hidden } from "react-awesome-styled-grid";
import { Box } from "../components/box";
import { Button } from "../components/button";
import { FlexContainer } from "../components/container";
import { Navigation } from "../components/navigation";
import { PieChart } from "../components/piechart";
import { Popover } from "../components/popover";
import { SVGIcon } from "../components/svgicon";
import { Tag } from "../components/tag";
import { Text } from "../components/text";
import { Tooltip } from "../components/tooltip";
import theme from "../theme";

const meta: Meta = {
  title: "Pages/appDetails",
};
export default meta;

type Story = StoryObj;

export const AppDetails: Story = {
  render: () => (
    <Box
      spacing="spacing04"
      style={{
        maxWidth: "1440px",
      }}
    >
      <Box boxStyle="lightGrey" spacing="spacing02">
        <Row>
          <Col sm={5} md={4} lg={6}>
            <FlexContainer>
              <Hidden xs>
                <Tooltip
                  status="danger"
                  caption="13% more than AUG, 2020"
                  position="left"
                >
                  <PieChart
                    progress={13}
                    size={52}
                    strokeWidth={8}
                    color="danger"
                  >
                    <SVGIcon name="forecastUp" color="danger" />
                  </PieChart>
                </Tooltip>
              </Hidden>
              <div>
                <Text
                  nowrap
                  size="lg"
                  weight="medium"
                  tag="div"
                  width="12rem"
                  mb={theme.spacing.spacing01}
                  ml={theme.spacing.spacing04}
                >
                  CREATED-AUTOMATICALLY-BY-KONE-ITO-POLICY
                </Text>
                <FlexContainer>
                  <Text size="sm" tag="span" ml={theme.spacing.spacing04}>
                    development
                  </Text>
                </FlexContainer>
              </div>
              <div
                style={{
                  paddingLeft: theme.spacing.spacing04,
                  borderLeft: theme.borders.grey,
                }}
              >
                <Text size="sm" tag="div" mb={theme.spacing.spacing02}>
                  Environment belongs to Organization Units:
                </Text>
                <div>
                  <Tag color="#d35400" text="AUTO_2019_4_16_11_13_6_8731999" />
                  <Tag color="#95a5a6" text="AUTO345" />
                  <Tag icon="edit" />
                </div>
              </div>
            </FlexContainer>
          </Col>
          <Col sm={3} md={4} lg={6}>
            <FlexContainer justifyContent="flex-end">
              <Hidden xs sm>
                <div
                  style={{
                    width: "9rem",
                    paddingLeft: theme.spacing.spacing04,
                    borderLeft: theme.borders.grey,
                  }}
                >
                  <Text size="sm" tag="div" mb={theme.spacing.spacing01}>
                    Estate Records:
                  </Text>
                  <Text size="lg" tag="div">
                    1851
                  </Text>
                </div>
              </Hidden>
              <div
                style={{
                  width: "9rem",
                  paddingLeft: theme.spacing.spacing04,
                  borderLeft: theme.borders.grey,
                }}
              >
                <Text size="sm" tag="div" mb={theme.spacing.spacing01}>
                  Monthly Costs:
                </Text>
                <Text size="lg" weight="medium" tag="div">
                  $ 604.19
                </Text>
              </div>
              <Hidden xs sm>
                <div
                  style={{
                    width: "14rem",
                    paddingLeft: theme.spacing.spacing04,
                    borderLeft: theme.borders.grey,
                    marginRight: "1rem",
                  }}
                >
                  <FlexContainer py={theme.spacing.spacing01}>
                    <Text size="sm" tag="div" width="7rem">
                      Monthly Forecast:
                    </Text>
                    <Text
                      size="sm"
                      tag="div"
                      ml={theme.spacing.spacing02}
                      weight="medium"
                    >
                      $ 2,544.20
                    </Text>
                  </FlexContainer>
                  <FlexContainer py={theme.spacing.spacing01}>
                    <Text size="sm" tag="div" width="7rem">
                      Monthly Budget:
                    </Text>
                    <Text
                      size="sm"
                      tag="div"
                      ml={theme.spacing.spacing02}
                      weight="medium"
                    >
                      $ 2,000.00
                    </Text>
                  </FlexContainer>
                </div>
              </Hidden>
              <Popover
                alignRight
                trigger={<Button severity="low" icon="menu" size="md" />}
              >
                <Navigation.Container popoverMenu>
                  <Navigation.Item
                    as="a"
                    href="http://google.com"
                    target="_blank"
                  >
                    <SVGIcon name="edit" />
                    <Text tag="span">Edit Environment</Text>
                  </Navigation.Item>
                  <Navigation.Item
                    as="a"
                    href="http://google.com"
                    target="_blank"
                  >
                    <SVGIcon name="target" />
                    <Text tag="span">Discovery Rules</Text>
                  </Navigation.Item>
                  <Navigation.Item
                    as="a"
                    href="http://google.com"
                    target="_blank"
                  >
                    <SVGIcon name="trash" />
                    <Text tag="span">Delete</Text>
                  </Navigation.Item>
                </Navigation.Container>
              </Popover>
            </FlexContainer>
          </Col>
        </Row>
      </Box>
      <Box boxStyle="lightGrey" spacing="spacing02">
        <Row>
          <Col sm={5} md={4} lg={6}>
            <FlexContainer>
              <Hidden xs>
                <Tooltip
                  status="danger"
                  caption="13% more than AUG, 2020"
                  position="left"
                >
                  <PieChart
                    progress={13}
                    size={52}
                    strokeWidth={8}
                    color="danger"
                  >
                    <SVGIcon name="forecastUp" color="danger" />
                  </PieChart>
                </Tooltip>
              </Hidden>
              <div>
                <Text
                  nowrap
                  size="lg"
                  weight="medium"
                  tag="div"
                  width="12rem"
                  mb={theme.spacing.spacing01}
                  ml={theme.spacing.spacing04}
                >
                  experimental
                </Text>
                <FlexContainer>
                  <Text size="sm" tag="span" ml={theme.spacing.spacing04}>
                    other
                  </Text>
                </FlexContainer>
              </div>
              <div
                style={{
                  paddingLeft: theme.spacing.spacing04,
                  borderLeft: theme.borders.grey,
                }}
              >
                <Text size="sm" tag="div" mb={theme.spacing.spacing02}>
                  Environment belongs to Organization Units:
                </Text>
                <div>
                  <Tag color="#d35400" text="AUTO_2019_4_16_11_13_6_8731999" />
                  <Tag color="#95a5a6" text="AUTO345" />
                  <Tag icon="edit" />
                </div>
              </div>
            </FlexContainer>
          </Col>
          <Col sm={3} md={4} lg={6}>
            <FlexContainer justifyContent="flex-end">
              <Hidden xs sm>
                <div
                  style={{
                    width: "9rem",
                    paddingLeft: theme.spacing.spacing04,
                    borderLeft: theme.borders.grey,
                  }}
                >
                  <Text size="sm" tag="div" mb={theme.spacing.spacing01}>
                    Estate Records:
                  </Text>
                  <Text size="lg" tag="div">
                    1851
                  </Text>
                </div>
              </Hidden>
              <div
                style={{
                  width: "9rem",
                  paddingLeft: theme.spacing.spacing04,
                  borderLeft: theme.borders.grey,
                }}
              >
                <Text size="sm" tag="div" mb={theme.spacing.spacing01}>
                  Monthly Costs:
                </Text>
                <Text size="lg" weight="medium" tag="div">
                  $ 604.19
                </Text>
              </div>
              <Hidden xs sm>
                <div
                  style={{
                    width: "14rem",
                    paddingLeft: theme.spacing.spacing04,
                    borderLeft: theme.borders.grey,
                    marginRight: "1rem",
                  }}
                >
                  <FlexContainer py={theme.spacing.spacing01}>
                    <Text size="sm" tag="div" width="7rem">
                      Monthly Forecast:
                    </Text>
                    <Text
                      size="sm"
                      tag="div"
                      ml={theme.spacing.spacing02}
                      weight="medium"
                    >
                      $ 2,544.20
                    </Text>
                  </FlexContainer>
                  <FlexContainer py={theme.spacing.spacing01}>
                    <Text size="sm" tag="div" width="7rem">
                      Monthly Budget:
                    </Text>
                    <Text
                      size="sm"
                      tag="div"
                      ml={theme.spacing.spacing02}
                      weight="medium"
                    >
                      $ 2,000.00
                    </Text>
                  </FlexContainer>
                </div>
              </Hidden>
              <Popover
                alignRight
                trigger={<Button severity="low" icon="menu" size="md" />}
              >
                <Navigation.Container popoverMenu>
                  <Navigation.Item
                    as="a"
                    href="http://google.com"
                    target="_blank"
                  >
                    <SVGIcon name="edit" />
                    <Text tag="span">Edit Environment</Text>
                  </Navigation.Item>
                  <Navigation.Item
                    as="a"
                    href="http://google.com"
                    target="_blank"
                  >
                    <SVGIcon name="target" />
                    <Text tag="span">Discovery Rules</Text>
                  </Navigation.Item>
                  <Navigation.Item
                    as="a"
                    href="http://google.com"
                    target="_blank"
                  >
                    <SVGIcon name="trash" />
                    <Text tag="span">Delete</Text>
                  </Navigation.Item>
                </Navigation.Container>
              </Popover>
            </FlexContainer>
          </Col>
        </Row>
      </Box>
    </Box>
  ),
};
