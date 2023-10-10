import { Meta, StoryObj } from "@storybook/react";
import { Col, Row, Hidden } from "react-awesome-styled-grid";
import { Box } from "../components/box";
import { Button } from "../components/button";
import { FlexContainer } from "../components/container";
import { Navigation } from "../components/navigation/Navigation";
import { PieChart } from "../components/piechart";
import { Popover } from "../components/popover/Popover";
import { Spacer } from "../components/spacer/Spacer";
import { SVGIcon } from "../components/svgicon";
import Table from "../components/table/Table";
import { Text } from "../components/text";
import { Tooltip } from "../components/tooltip";
import theme from "../theme";

const meta: Meta = {
  title: "Pages/Applications",
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <>
      <Box spacing="spacing04" style={{ maxWidth: "1440px" }}>
        <Box boxStyle="lightGrey">
          <Row>
            <Col sm={5} md={4} lg={7}>
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
                    size="lg"
                    weight="medium"
                    tag="div"
                    mb={theme.spacing.spacing01}
                    ml={theme.spacing.spacing04}
                    color={theme.color.text.error}
                  >
                    Unallocated Costs
                  </Text>
                  <FlexContainer>
                    <Text
                      size="sm"
                      tag="span"
                      ml={theme.spacing.spacing04}
                      color={theme.color.text.error}
                    >
                      86 estate records
                    </Text>
                  </FlexContainer>
                </div>
              </FlexContainer>
            </Col>
            <Col sm={3} md={4} lg={5}>
              <FlexContainer justifyContent="flex-end">
                <div
                  style={{
                    width: "13rem",
                    paddingLeft: theme.spacing.spacing04,
                    borderLeft: theme.borders.grey,
                  }}
                >
                  <Text
                    size="sm"
                    tag="div"
                    mb={theme.spacing.spacing01}
                    color={theme.color.text.error}
                  >
                    Monthly Costs:
                  </Text>
                  <Text
                    size="lg"
                    weight="medium"
                    tag="div"
                    color={theme.color.text.error}
                  >
                    $ 604.19
                  </Text>
                </div>
                <Hidden xs sm>
                  <div
                    style={{
                      width: "13rem",
                      paddingLeft: theme.spacing.spacing04,
                      borderLeft: theme.borders.grey,
                      marginRight: "3rem",
                    }}
                  >
                    <FlexContainer py={theme.spacing.spacing01}>
                      <Text
                        size="sm"
                        tag="div"
                        width="7rem"
                        color={theme.color.text.error}
                      >
                        Monthly Forecast:
                      </Text>
                      <Text
                        size="sm"
                        tag="div"
                        ml={theme.spacing.spacing02}
                        weight="medium"
                        color={theme.color.text.error}
                      >
                        $ 1,846.71
                      </Text>
                    </FlexContainer>
                    <FlexContainer py={theme.spacing.spacing01}>
                      <Text
                        size="sm"
                        tag="div"
                        width="7rem"
                        color={theme.color.text.error}
                      >
                        Previous Month:
                      </Text>
                      <Text
                        size="sm"
                        tag="div"
                        ml={theme.spacing.spacing02}
                        weight="medium"
                        color={theme.color.text.error}
                      >
                        $ 2,146.71
                      </Text>
                    </FlexContainer>
                  </div>
                </Hidden>
              </FlexContainer>
            </Col>
          </Row>
        </Box>
      </Box>
      <Box spacing="spacing02" style={{ maxWidth: "1440px" }}>
        <Row>
          <Col sm={5} md={4} lg={7}>
            <FlexContainer>
              <SVGIcon name="chevronRight" />
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
                    ml={theme.spacing.spacing03}
                  >
                    <SVGIcon name="forecastUp" color="danger" />
                  </PieChart>
                </Tooltip>
              </Hidden>
              <div>
                <Text
                  size="lg"
                  weight="medium"
                  tag="div"
                  mb={theme.spacing.spacing01}
                  ml={theme.spacing.spacing04}
                >
                  ApplicationName
                </Text>
                <FlexContainer>
                  <Text size="sm" tag="span" ml={theme.spacing.spacing04}>
                    3 environments
                  </Text>
                  <Text size="sm" tag="span" ml={theme.spacing.spacing04}>
                    86 estate records
                  </Text>
                </FlexContainer>
              </div>
            </FlexContainer>
          </Col>
          <Col sm={3} md={4} lg={5}>
            <FlexContainer justifyContent="flex-end">
              <div
                style={{
                  width: "13rem",
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
                    width: "13rem",
                    paddingLeft: theme.spacing.spacing04,
                    borderLeft: theme.borders.grey,
                    marginRight: theme.spacing.spacing07,
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
                      $ 1,846.71
                    </Text>
                  </FlexContainer>
                  <FlexContainer py={theme.spacing.spacing01}>
                    <Text size="sm" tag="div" width="7rem">
                      Previous Month:
                    </Text>
                    <Text
                      size="sm"
                      tag="div"
                      ml={theme.spacing.spacing02}
                      weight="medium"
                    >
                      $ 2,146.71
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
                    <Text tag="span">Edit Application</Text>
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
      <Box spacing="spacing02" style={{ maxWidth: "1440px" }}>
        <Row>
          <Col sm={5} md={4} lg={7}>
            <FlexContainer>
              <SVGIcon name="chevronDown" />
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
                    ml={theme.spacing.spacing03}
                  >
                    <SVGIcon name="forecastUp" color="danger" />
                  </PieChart>
                </Tooltip>
              </Hidden>
              <div>
                <Text
                  size="lg"
                  weight="medium"
                  tag="div"
                  mb={theme.spacing.spacing01}
                  ml={theme.spacing.spacing04}
                >
                  ApplicationName
                </Text>
                <FlexContainer>
                  <Text size="sm" tag="span" ml={theme.spacing.spacing04}>
                    3 environments
                  </Text>
                  <Text size="sm" tag="span" ml={theme.spacing.spacing04}>
                    86 estate records
                  </Text>
                </FlexContainer>
              </div>
            </FlexContainer>
          </Col>
          <Col sm={3} md={4} lg={5}>
            <FlexContainer justifyContent="flex-end">
              <div
                style={{
                  width: "13rem",
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
                    width: "13rem",
                    paddingLeft: theme.spacing.spacing04,
                    borderLeft: theme.borders.grey,
                    marginRight: theme.spacing.spacing07,
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
                      $ 1,846.71
                    </Text>
                  </FlexContainer>
                  <FlexContainer py={theme.spacing.spacing01}>
                    <Text size="sm" tag="div" width="7rem">
                      Previous Month:
                    </Text>
                    <Text
                      size="sm"
                      tag="div"
                      ml={theme.spacing.spacing02}
                      weight="medium"
                    >
                      $ 2,146.71
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
                    <Text tag="span">Edit Application</Text>
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
        <Row>
          <Col>
            <Spacer height="1rem" />
            <Table small>
              <Table.thead>
                <Table.tr>
                  <Table.th>Environment</Table.th>
                  <Table.th width="40%">Organization Units</Table.th>
                  <Table.th>Estate Records</Table.th>
                  <Table.th>Monthly cost</Table.th>
                  <Table.th>Monthly Forecast</Table.th>
                  <Table.th>Previous month</Table.th>
                </Table.tr>
              </Table.thead>
              <Table.tbody>
                <Table.tr>
                  <Table.td>development</Table.td>
                  <Table.td> </Table.td>
                  <Table.td>498</Table.td>
                  <Table.td hasLeftBorder>$ 114.25</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                </Table.tr>
                <Table.tr>
                  <Table.td>experimental</Table.td>
                  <Table.td> </Table.td>
                  <Table.td>498</Table.td>
                  <Table.td hasLeftBorder>$ 114.25</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                </Table.tr>
                <Table.tr>
                  <Table.td>production</Table.td>
                  <Table.td> </Table.td>
                  <Table.td>498</Table.td>
                  <Table.td hasLeftBorder>$ 114.25</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                </Table.tr>
              </Table.tbody>
            </Table>
          </Col>
        </Row>
      </Box>
    </>
  ),

  name: "default",
};
