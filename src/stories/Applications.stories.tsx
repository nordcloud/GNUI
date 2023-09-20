import type { Meta, StoryObj } from "@storybook/react";
import { Col, Row, Hidden } from "react-awesome-styled-grid";
import { Box } from "../components/box";
import { FlexContainer } from "../components/container";
import { PieChart } from "../components/piechart";
import { SVGIcon } from "../components/svgicon";
import { Text } from "../components/text";
import { Tooltip } from "../components/tooltip";
import theme from "../theme";

const meta: Meta = {
  title: "Pages/Applications",
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
  ),
};
