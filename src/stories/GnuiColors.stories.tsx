import { Col, Row } from "react-awesome-styled-grid";
import { Box } from "../components/box";
import { Table } from "../components/table";
import { Text } from "../components/text";
import theme from "../theme";

export default {
  title: "Foundation/Colors",
};

export const Backgrounds = {
  render: () => (
    <>
      <Text weight="medium">Default page background</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.background.body</Table.td>
            <Table.td>
              <ul>
                <li>Default page background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey300
                  </Text>
                  <Text tag="div">#ECECF4</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.body}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">UI backgrounds</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.background.ui01</Table.td>
            <Table.td>
              <ul>
                <li>Default box background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.white
                  </Text>
                  <Text tag="div">#FFFFFF</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.ui01}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.background.ui02</Table.td>
            <Table.td>
              <ul>
                <li>Table striped row</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey100
                  </Text>
                  <Text tag="div">#FCFCFD</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.ui02}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.background.ui03</Table.td>
            <Table.td>
              <ul>
                <li>Box variant: LightGrey;</li>
                <li>Tabs background;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey200
                  </Text>
                  <Text tag="div">#FAFAFC</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.ui03}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.background.ui04</Table.td>
            <Table.td>
              <ul>
                <li>Box variant: Grey</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey300
                  </Text>
                  <Text tag="div">#ECECF4</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.ui04}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.background.ui05</Table.td>
            <Table.td>
              <ul>
                <li>High contrast backgrounds;</li>
                <li>Tooltip backgrounds;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.darkBlue.darkBlue700
                  </Text>
                  <Text tag="div">#161632</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.ui05}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">UI status backgrounds</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.background.error</Table.td>
            <Table.td>
              <ul>
                <li>Error box background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.red.red500
                  </Text>
                  <Text tag="div">#f44336</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.error}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.background.warning</Table.td>
            <Table.td>
              <ul>
                <li>Warning box background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.orange.orange500
                  </Text>
                  <Text tag="div">#ff9800</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.warning}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.background.success</Table.td>
            <Table.td>
              <ul>
                <li>Success box background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.green.green500
                  </Text>
                  <Text tag="div">#4caf50</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.success}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.background.info</Table.td>
            <Table.td>
              <ul>
                <li>Information box background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue600
                  </Text>
                  <Text tag="div">#1e88e5</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.background.info}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
    </>
  ),
  name: "Backgrounds",
};

export const TextColors = {
  render: () => (
    <>
      <Text weight="medium">Text copy colors</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.text.text01</Table.td>
            <Table.td>
              <ul>
                <li>Primary text;</li>
                <li>Body copy;</li>
                <li>Headers;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.darkBlue.darkBlue700
                  </Text>
                  <Text tag="div">#161632</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.text.text01}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.text.text02</Table.td>
            <Table.td>
              <ul>
                <li>Secondary text;</li>
                <li>Input labels;</li>
                <li>Table TH;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey800
                  </Text>
                  <Text tag="div">#676783</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.text.text02}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.text.text03</Table.td>
            <Table.td>
              <ul>
                <li>Placeholder text</li>
                <li>Primary interactive hovered text</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey700
                  </Text>
                  <Text tag="div">#8E8EAC</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.text.text03}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.text.text04</Table.td>
            <Table.td>
              <ul>
                <li>Text on interactive colors</li>
                <li>Text on status box</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.white
                  </Text>
                  <Text tag="div">#FFFFFF</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.text.text04}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">Text status colors</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.text.error</Table.td>
            <Table.td>
              <ul>
                <li>Error message text;</li>
                <li>Danger message text;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.red.red700
                  </Text>
                  <Text tag="div">#d32f2f</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.text.error}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.text.warning</Table.td>
            <Table.td>
              <ul>
                <li>Warning message text</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.orange.orange800
                  </Text>
                  <Text tag="div">#ef6c00</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.text.warning}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.text.success</Table.td>
            <Table.td>
              <ul>
                <li>Success message text</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.green.green700
                  </Text>
                  <Text tag="div">#388e3c</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.text.success}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.text.info</Table.td>
            <Table.td>
              <ul>
                <li>Information message text</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue700
                  </Text>
                  <Text tag="div">#1976d2</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.text.info}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
    </>
  ),
  name: "Text colors",
};

export const FieldBackgrounds = {
  render: () => (
    <>
      <Text weight="medium">Fields background colors</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.field.default</Table.td>
            <Table.td>
              <ul>
                <li>Default input fields;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey100
                  </Text>
                  <Text tag="div">#FCFCFD</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.field.default}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.field.disabled</Table.td>
            <Table.td>
              <ul>
                <li>Disabled input fields;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey300
                  </Text>
                  <Text tag="div">#ECECF4</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.field.disabled}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
    </>
  ),
  name: "Field backgrounds",
};

export const BorderColors = {
  render: () => (
    <>
      <Text weight="medium">Border colors</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.border.border01</Table.td>
            <Table.td>
              <ul>
                <li>Default box border;</li>
                <li>Default table border;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey400
                  </Text>
                  <Text tag="div">#E4E4EE</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.border.border01}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.border.input</Table.td>
            <Table.td>
              <ul>
                <li>Default input border</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey500
                  </Text>
                  <Text tag="div">#DBDBE7</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.border.input}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.border.border02</Table.td>
            <Table.td>
              <ul>
                <li>Hovered border</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey700
                  </Text>
                  <Text tag="div">#8E8EAC</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.border.border02}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.border.focus</Table.td>
            <Table.td>
              <ul>
                <li>Focused border</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey800
                  </Text>
                  <Text tag="div">#676783</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.border.focus}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">Border status colors</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.border.error</Table.td>
            <Table.td>
              <ul>
                <li>Input error</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.red.red700
                  </Text>
                  <Text tag="div">#d32f2f</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.border.error}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
    </>
  ),
  name: "Border colors",
};

export const InteractiveColors = {
  render: () => (
    <>
      <Text weight="medium">Primary interactive (primary buttons)</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.interactive.primary</Table.td>
            <Table.td>
              <ul>
                <li>Primary button;</li>
                <li>Selected main-menu item;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.darkBlue.darkBlue700
                  </Text>
                  <Text tag="div">#161632</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.primary}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.primaryHover</Table.td>
            <Table.td>
              <ul>
                <li>Primary button hovered</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.darkBlue.darkBlue800
                  </Text>
                  <Text tag="div">#06060f</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.primaryHover}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.primaryActive</Table.td>
            <Table.td>
              <ul>
                <li>Primary button active</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.darkBlue.darkBlue800
                  </Text>
                  <Text tag="div">#06060f</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.primaryActive}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">
        Secondary interactive (secondary buttons, menu items)
      </Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.interactive.secondary</Table.td>
            <Table.td>
              <ul>
                <li>Secondary button;</li>
                <li>Sub menu item;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey300
                  </Text>
                  <Text tag="div">#ECECF4</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.secondary}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.secondaryHover</Table.td>
            <Table.td>
              <ul>
                <li>Secondary button hovered;</li>
                <li>Sub-menu item hovered;</li>
                <li>Tab item hovered;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey400
                  </Text>
                  <Text tag="div">#E4E4EE</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.secondaryHover}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.secondaryActive</Table.td>
            <Table.td>
              <ul>
                <li>Secondary button active;</li>
                <li>Sub-menu item active</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey500
                  </Text>
                  <Text tag="div">#DBDBE7</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.secondaryActive}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">Error interactive</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.interactive.error</Table.td>
            <Table.td>
              <ul>
                <li>Error button;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.red.red600
                  </Text>
                  <Text tag="div">#e53935</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.error}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.errorHover</Table.td>
            <Table.td>
              <ul>
                <li>Error button hovered;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.red.red700
                  </Text>
                  <Text tag="div">#d32f2f</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.errorHover}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.errorActive</Table.td>
            <Table.td>
              <ul>
                <li>Error button active;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.red.red800
                  </Text>
                  <Text tag="div">#c62828</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.errorActive}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">Success interactive</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.interactive.success</Table.td>
            <Table.td>
              <ul>
                <li>Success button;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.green.green600
                  </Text>
                  <Text tag="div">#43a047</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.success}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.successHover</Table.td>
            <Table.td>
              <ul>
                <li>SUccess button hovered;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.green.green700
                  </Text>
                  <Text tag="div">#388e3c</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.successHover}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.successActive</Table.td>
            <Table.td>
              <ul>
                <li>Success button active;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.green.green800
                  </Text>
                  <Text tag="div">#1b5e20</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.successActive}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">Information interactive</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.interactive.info</Table.td>
            <Table.td>
              <ul>
                <li>Information button;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue600
                  </Text>
                  <Text tag="div">#1e88e5</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.info}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.infoHover</Table.td>
            <Table.td>
              <ul>
                <li>Information button hovered;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue700
                  </Text>
                  <Text tag="div">#1976d2</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.infoHover}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.infoActive</Table.td>
            <Table.td>
              <ul>
                <li>Information button active;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue800
                  </Text>
                  <Text tag="div">#1565c0</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.infoActive}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">Disabled</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.interactive.disabled</Table.td>
            <Table.td>
              <ul>
                <li>Disabled buttons;</li>
                <li>Disabled input background;</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey300
                  </Text>
                  <Text tag="div">#ECECF4</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.disabled}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">Link colors</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.interactive.link</Table.td>
            <Table.td>
              <ul>
                <li>Primary links</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue800
                  </Text>
                  <Text tag="div">#1565c0</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.link}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.interactive.linkInverse</Table.td>
            <Table.td>
              <ul>
                <li>Links on dark backgrounds</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue200
                  </Text>
                  <Text tag="div">#90caf9</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.interactive.linkInverse}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
    </>
  ),
  name: "Interactive colors",
};

export const SupportColors = {
  render: () => (
    <>
      <Text weight="medium">Colors for using on charts with some status</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.support.red</Table.td>
            <Table.td>
              <ul>
                <li>Chart</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.red.red500
                  </Text>
                  <Text tag="div">#f44336</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.red}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.redInverse</Table.td>
            <Table.td>
              <ul>
                <li>Chart background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.red.red100
                  </Text>
                  <Text tag="div">#ffcdd2</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.redInverse}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.blue</Table.td>
            <Table.td>
              <ul>
                <li>Chart</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue500
                  </Text>
                  <Text tag="div">#2196f3</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.blue}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.blueInverse</Table.td>
            <Table.td>
              <ul>
                <li>Chart background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.blue.blue100
                  </Text>
                  <Text tag="div">#bbdefb</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.blueInverse}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.green</Table.td>
            <Table.td>
              <ul>
                <li>Chart</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.green.green500
                  </Text>
                  <Text tag="div">#4caf50</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.green}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.greenInverse</Table.td>
            <Table.td>
              <ul>
                <li>Chart background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.green.green100
                  </Text>
                  <Text tag="div">#c8e6c9</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.greenInverse}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.orange</Table.td>
            <Table.td>
              <ul>
                <li>Chart</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.orange.orange500
                  </Text>
                  <Text tag="div">#ff9800</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.orange}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.orangeInverse</Table.td>
            <Table.td>
              <ul>
                <li>Chart background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.orange.orange100
                  </Text>
                  <Text tag="div">#ffe0b2</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.orangeInverse}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.grey</Table.td>
            <Table.td>
              <ul>
                <li>Chart</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey600
                  </Text>
                  <Text tag="div">#C8C8D8</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.grey}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.greyInverse</Table.td>
            <Table.td>
              <ul>
                <li>Chart background</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.grey.grey300
                  </Text>
                  <Text tag="div">#ECECF4</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.greyInverse}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
      <Text weight="medium">Colors for using on charts</Text>
      <Table>
        <Table.thead>
          <Table.tr>
            <Table.th width="33%">Name</Table.th>
            <Table.th width="33%">Role</Table.th>
            <Table.th>Value</Table.th>
          </Table.tr>
        </Table.thead>
        <Table.tbody>
          <Table.tr>
            <Table.td>theme.color.support.pink</Table.td>
            <Table.td>
              <ul>
                <li>Charts, badges</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.pink.pink500
                  </Text>
                  <Text tag="div">#e91e63</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.pink}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.purple</Table.td>
            <Table.td>
              <ul>
                <li>Charts, badges</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.purple.purple500
                  </Text>
                  <Text tag="div">#9c27b0</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.purple}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.indigo</Table.td>
            <Table.td>
              <ul>
                <li>Charts, badges</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.indigo.indigo500
                  </Text>
                  <Text tag="div">#3f51b5</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.indigo}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.cyan</Table.td>
            <Table.td>
              <ul>
                <li>Charts, badges</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.cyan.cyan500
                  </Text>
                  <Text tag="div">#00bcd4</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.cyan}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.teal</Table.td>
            <Table.td>
              <ul>
                <li>Charts, badges</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.teal.teal500
                  </Text>
                  <Text tag="div">#009688</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.teal}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.lightGreen</Table.td>
            <Table.td>
              <ul>
                <li>Charts, badges</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.lightGreen.lightGreen500
                  </Text>
                  <Text tag="div">#8bc34a</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.lightGreen}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
          <Table.tr>
            <Table.td>theme.color.support.yellow</Table.td>
            <Table.td>
              <ul>
                <li>Charts, badges</li>
              </ul>
            </Table.td>
            <Table.td>
              <Row>
                <Col>
                  <Text size="sm" tag="div" mb="0.25rem" width="10rem">
                    palette.yellow.yellow600
                  </Text>
                  <Text tag="div">#fdd835</Text>
                </Col>
                <Col>
                  <Box
                    backgroundColor={theme.color.support.yellow}
                    width="100%"
                    minHeight="50px"
                    shadow="shadow00"
                    border={theme.borders.grey}
                  />
                </Col>
              </Row>
            </Table.td>
          </Table.tr>
        </Table.tbody>
      </Table>
    </>
  ),
  name: "Support colors",
};
