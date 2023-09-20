import { Table } from ".";
import { Box } from "../box";
import { Input } from "../input";
import { Button } from "../button";
import { SVGIcon } from "../svgicon";
import { FlexContainer } from "../container";

export default {
  title: "Components/Table",
  component: Table,
};

export const Simple = {
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

export const Striped = {
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

export const Small = {
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

export const SmallFontTiny = {
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

export const Hoverline = {
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

export const TableWithHeader = {
  render: () => (
    <Box boxStyle="lightGrey" innerSpacing="spacing03" spacing="spacing04">
      <FlexContainer>
        <Input
          name="input"
          placeholder="Tag, application name, environment name, description etc"
          title="Title"
          size="md"
        />
        <FlexContainer justifyContent="flex-end">
          <Button severity="low" size="md" icon="filter" mr={"1rem"}>
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
