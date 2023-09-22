import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../box";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { Input } from "../input";
import { SVGIcon } from "../svgicon";
import Table from "./Table";

const meta: Meta = {
  title: "Components/Table",
  component: Table,
};

export default meta;

export const Simple: StoryObj = {
  render: () => (
    <Table>
      <Table.thead>
        <Table.tr>
          <Table.th />
          <Table.th>Name</Table.th>
          <Table.th>Title</Table.th>
          <Table.th>Phone</Table.th>
        </Table.tr>
      </Table.thead>
      <Table.tbody>
        <Table.tr>
          <Table.td>
            <SVGIcon name="user" />
          </Table.td>
          <Table.td>Kathy C. Do</Table.td>
          <Table.td>Director</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>
            <SVGIcon name="user" />
          </Table.td>
          <Table.td>James D. Washington</Table.td>
          <Table.td>Developer</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>
            <SVGIcon name="user" />
          </Table.td>
          <Table.td>Elaine R. Bean</Table.td>
          <Table.td>Product Owner</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
      </Table.tbody>
    </Table>
  ),

  name: "Simple",
};

export const Striped: StoryObj = {
  render: () => (
    <Table striped>
      <Table.thead>
        <Table.tr>
          <Table.th>Name</Table.th>
          <Table.th>Title</Table.th>
          <Table.th>Phone</Table.th>
        </Table.tr>
      </Table.thead>
      <Table.tbody>
        <Table.tr>
          <Table.td>Kathy C. Do</Table.td>
          <Table.td>Director</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>James D. Washington</Table.td>
          <Table.td>Developer</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>Elaine R. Bean</Table.td>
          <Table.td>Product Owner</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
      </Table.tbody>
    </Table>
  ),

  name: "Striped",
};

export const Small: StoryObj = {
  render: () => (
    <Table small>
      <Table.thead>
        <Table.tr>
          <Table.th>Name</Table.th>
          <Table.th>Title</Table.th>
          <Table.th>Phone</Table.th>
        </Table.tr>
      </Table.thead>
      <Table.tbody>
        <Table.tr>
          <Table.td>Kathy C. Do</Table.td>
          <Table.td>Director</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>James D. Washington</Table.td>
          <Table.td>Developer</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>Elaine R. Bean</Table.td>
          <Table.td>Product Owner</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
      </Table.tbody>
    </Table>
  ),

  name: "Small",
};

export const SmallFontTiny: StoryObj = {
  render: () => (
    <Table tiny>
      <Table.thead>
        <Table.tr>
          <Table.th>Name</Table.th>
          <Table.th>Title</Table.th>
          <Table.th>Phone</Table.th>
        </Table.tr>
      </Table.thead>
      <Table.tbody>
        <Table.tr>
          <Table.td>Kathy C. Do</Table.td>
          <Table.td>Director</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>James D. Washington</Table.td>
          <Table.td>Developer</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>Elaine R. Bean</Table.td>
          <Table.td>Product Owner</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
      </Table.tbody>
    </Table>
  ),

  name: "Small font (tiny)",
};

export const Hoverline: StoryObj = {
  render: () => (
    <Table hoverline>
      <Table.thead>
        <Table.tr>
          <Table.th>Name</Table.th>
          <Table.th>Title</Table.th>
          <Table.th>Phone</Table.th>
        </Table.tr>
      </Table.thead>
      <Table.tbody>
        <Table.tr>
          <Table.td>Kathy C. Do</Table.td>
          <Table.td>Director</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>James D. Washington</Table.td>
          <Table.td>Developer</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>Elaine R. Bean</Table.td>
          <Table.td>Product Owner</Table.td>
          <Table.td>+48 XXX-XXX-XXX</Table.td>
        </Table.tr>
      </Table.tbody>
    </Table>
  ),

  name: "Hoverline",
};

export const TableWithHeader: StoryObj = {
  render: () => (
    <Box boxStyle="lightGrey" innerSpacing="spacing03" spacing="spacing04">
      <FlexContainer>
        <Input
          name="input"
          placeholder="Tag, application name, environment name, description etc"
          title="Title"
        />
        <FlexContainer justifyContent="flex-end">
          <Button severity="low" size="md" icon="filter" mr="1rem">
            Show Filters
          </Button>
          <Button severity="low" size="md" icon="download">
            Download CSV
          </Button>
        </FlexContainer>
      </FlexContainer>
    </Box>
  ),

  name: "table-with-header",
};
