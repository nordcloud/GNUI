import { Input, Label, Description, Upload } from ".";
import { GnuiContainer } from "../container";
import { Button } from "../button";
import { Spacer } from "../spacer";
import { InputSearch } from "./InputSearch";
import { InputPassword } from "./InputPassword";

export default {
  title: "Forms/Input",
  component: Input,
};

export const Input = {
  render: () => <Input name="input" placeholder="Placeholder" title="Title" />,
  name: "input",
};

export const Name = {
  render: () => <Input name="Thats my name" title="That's my title" />,
  name: "name",
};

export const Type = {
  render: () => (
    <Input
      name="search-input"
      placeholder="Search input"
      type="search"
      title="Search input"
    />
  ),

  name: "type",
};

export const Disabled = {
  render: () => (
    <Input name="disabled-input" placeholder="Disabled input" disabled />
  ),
  name: "disabled",
};

export const Required = {
  render: () => (
    <>
      <Label name="Label" htmlFor="required-id" required />
      <Input
        name="required-input"
        id="required-id"
        placeholder="Required input"
      />
    </>
  ),

  name: "required",
};

export const Small = {
  render: () => (
    <>
      <Label name="Label" htmlFor="small-id" required />
      <Input name="required-input" id="small-id" placeholder="Small" small />
    </>
  ),

  name: "small",
};

export const Upload = {
  render: () => (
    <>
      <Upload name="upload" placeholder="Select a file to upload" />
    </>
  ),

  name: "upload",
};

export const Icon = {
  render: () => (
    <>
      <Label name="Label" htmlFor="icon-id" required />
      <Input name="required-input" id="icon-id" placeholder="" icon="sidebar" />
    </>
  ),

  name: "icon",
};

export const Status = {
  render: () => {
    const [status, setStatus] = React.useState("success");

    return (
      <GnuiContainer>
        <GnuiContainer>
          <Input
            name="validation-input"
            value={status === "success" ? "Success!" : "Error!"}
            readOnly
            status={status}
          />
        </GnuiContainer>
        <Spacer height="2rem" />
        <GnuiContainer>
          <Button
            size="small"
            color={status === "error" ? "danger" : "success"}
            onClick={() =>
              setStatus(status === "danger" ? "success" : "danger")
            }
          >
            Change status
          </Button>
        </GnuiContainer>
      </GnuiContainer>
    );
  },

  name: "status",
};

export const LabelDescription = {
  render: () => (
    <GnuiContainer>
      <Label name="Label" htmlFor="description-id" />
      <Input
        name="labeled-input"
        id="description-id"
        placeholder="Labeled input"
      />
      <Description>Inputs description</Description>
    </GnuiContainer>
  ),

  name: "label & description",
};

export const Clear = {
  render: () => (
    <>
      <Label name="Label" htmlFor="clear-id" required />
      <Input
        name="required-input"
        id="clear-id"
        placeholder=""
        icon="sidebar"
        name="testName"
        showClearButton
        onClick={() => alert("click")}
        onClear={() => alert("clear")}
      />
    </>
  ),

  name: "clear",
};

export const Password = {
  render: () => (
    <>
      <InputPassword
        name="required-input"
        id="password"
        name="password"
        value="password123"
      />
    </>
  ),

  name: "password",
};

export const Search = {
  render: () => (
    <>
      <InputSearch
        placeholder="Search"
        onSearch={() => alert("search")}
        name="search"
      />
    </>
  ),

  name: "search",
};

export const Date = {
  render: () => (
    <>
      <Label name="Date" htmlFor="date-id" required />
      <Input type="date" value={""} placeholder="MM/DD/YYYY" />
    </>
  ),

  name: "date",
};
