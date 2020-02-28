import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "../components/form";
import { Label, Input, Description } from "../components/input";

const stories = storiesOf("Form/Form", module);
stories.add("form", () => (
  <Form>
    <h1>Personal information</h1>
    <Label name="Name" />
    <Input name="Name" placeholder="Name" />
    <Description>Lorem ipsum solor domet</Description>
    <Label name="Email" />
    <Input name="Email" type="email" placeholder="json@example.com" />
    <Description>Lorem ipsum solor domet</Description>
    <Label name="Password" />
    <Input name="Password" type="password" placeholder="Password" />
    <Description>Lorem ipsum solor domet</Description>
  </Form>
));
