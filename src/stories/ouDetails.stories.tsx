import { Meta, StoryObj } from "@storybook/react";
import { Col, Row } from "react-awesome-styled-grid";
import { Box } from "../components/box";
import { FlexContainer } from "../components/container";
import { Spacer } from "../components/spacer";
import { SVGIcon } from "../components/svgicon";
import { Table } from "../components/table";
import { Text } from "../components/text";
import theme from "../theme";

const meta: Meta = {
  title: "Pages/OU Details",
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box
      spacing="spacing02"
      style={{
        maxWidth: "1440px",
      }}
    >
      <Text weight="medium">Environments attached to Organization Unit</Text>
      <Box boxStyle="lightGrey" spacing="spacing02">
        <Row>
          <Col>
            <FlexContainer>
              <SVGIcon name="chevronRight" />
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
                    2/4 environments attached to this OU
                  </Text>
                </FlexContainer>
              </div>
            </FlexContainer>
          </Col>
        </Row>
      </Box>
      <Box boxStyle="lightGrey">
        <Row>
          <Col>
            <FlexContainer>
              <SVGIcon name="chevronDown" />
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
                    3/4 environments attached to this OU
                  </Text>
                </FlexContainer>
              </div>
            </FlexContainer>
          </Col>
        </Row>
        <Row>
          <Col>
            <Spacer height="1rem" />
            <Table small>
              <Table.thead>
                <Table.tr>
                  <Table.th width="50%">Environment</Table.th>
                  <Table.th>Estate Records</Table.th>
                  <Table.th>Monthly cost</Table.th>
                  <Table.th>Monthly Forecast</Table.th>
                  <Table.th>Monthly Budget</Table.th>
                </Table.tr>
              </Table.thead>
              <Table.tbody>
                <Table.tr>
                  <Table.td>CREATED-AUTOMATICALLY-BY-ITO-POLICY</Table.td>
                  <Table.td>498</Table.td>
                  <Table.td hasLeftBorder>$ 114.25</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                </Table.tr>
                <Table.tr>
                  <Table.td>experimental</Table.td>
                  <Table.td>498</Table.td>
                  <Table.td hasLeftBorder>$ 114.25</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                  <Table.td hasLeftBorder>$ 191.42</Table.td>
                </Table.tr>
                <Table.tr>
                  <Table.td>production</Table.td>
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
    </Box>
  ),

  name: "default",
};
