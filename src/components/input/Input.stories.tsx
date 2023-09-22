import { useState, ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { GnuiContainer } from "../container";
import { Spacer } from "../spacer";
import { Description } from "./Description";
import { Input } from "./Input";
import { InputPassword } from "./InputPassword";
import { InputSearch } from "./InputSearch";
import { Upload } from "./InputUpload";
import { Label } from "./Label";

const meta: Meta = {
  title: "Forms/Input",
  component: Input,
};

export default meta;

export const InputDefault: StoryObj = {
  render: () => <Input name="input" placeholder="Placeholder" title="Title" />,
  name: "input",
};

export const Name: StoryObj = {
  render: () => <Input name="Thats my name" title="That's my title" />,
  name: "name",
};

export const Type: StoryObj = {
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

export const Disabled: StoryObj = {
  render: () => (
    <Input disabled name="disabled-input" placeholder="Disabled input" />
  ),
  name: "disabled",
};

export const Required: StoryObj = {
  render: () => (
    <>
      <Label required name="Label" htmlFor="required-id" />
      <Input
        name="required-input"
        id="required-id"
        placeholder="Required input"
      />
    </>
  ),

  name: "required",
};

export const Small: StoryObj = {
  render: () => (
    <>
      <Label required name="Label" htmlFor="small-id" />
      <Input small name="required-input" id="small-id" placeholder="Small" />
    </>
  ),

  name: "small",
};

export const UploadDefault: StoryObj = {
  render: () => (
    <>
      <Upload name="upload" placeholder="Select a file to upload" />
    </>
  ),

  name: "upload",
};

export const Icon: StoryObj = {
  render: () => (
    <>
      <Label required name="Label" htmlFor="icon-id" />
      <Input name="required-input" id="icon-id" placeholder="" icon="sidebar" />
    </>
  ),

  name: "icon",
};

export const Status: StoryObj = {
  render: () => {
    const [status, setStatus] =
      useState<ComponentProps<typeof Input>["status"]>("success");

    return (
      <GnuiContainer>
        <GnuiContainer>
          <Input
            readOnly
            name="validation-input"
            value={status === "success" ? "Success!" : "Error!"}
            status={status}
          />
        </GnuiContainer>
        <Spacer height="2rem" />
        <GnuiContainer>
          <Button
            size="sm"
            color={status === "danger" ? "danger" : "success"}
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

export const LabelDescription: StoryObj = {
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

export const Clear: StoryObj = {
  render: () => (
    <>
      <Label required name="Label" htmlFor="clear-id" />
      <Input
        showClearButton
        id="clear-id"
        placeholder=""
        icon="sidebar"
        name="testName"
        onClick={() => alert("click")}
        onClear={() => alert("clear")}
      />
    </>
  ),

  name: "clear",
};

export const Password: StoryObj = {
  render: () => (
    <>
      <InputPassword id="password" name="password" value="password123" />
    </>
  ),

  name: "password",
};

export const Search: StoryObj = {
  render: () => (
    <>
      <InputSearch
        placeholder="Search"
        name="search"
        onSearch={() => alert("search")}
      />
    </>
  ),

  name: "search",
};

export const Date: StoryObj = {
  render: () => (
    <>
      <Label required name="Date" htmlFor="date-id" />
      <Input type="date" value="" placeholder="MM/DD/YYYY" />
    </>
  ),

  name: "date",
};
