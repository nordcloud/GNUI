import { Form, FormButtons, SubmitButton, CancelButton } from ".";
import { Input, Label, Description } from "../input";
import { Heading } from "../heading";

export default {
  title: "Forms/Form",
  component: Form,
};

export const Form = {
  render: () => (
    <Form>
      <Heading level={3} marginBottom="spacing04">
        Personal informations
      </Heading>
      <Label name="Name" htmlFor="name-id" />
      <Input name="Name" id="name-id" placeholder="Name" />
      <Description>Enter your full name.</Description>
      <Label name="Email" htmlFor="email-id" />
      <Input
        name="Email"
        id="email-id"
        type="email"
        placeholder="json@example.com"
      />
      <Description>Enter your email.</Description>
      <Label name="Password" htmlFor="password-id" />
      <Input
        name="Password"
        id="password-id"
        type="password"
        placeholder="Password"
      />
      <Description>Enter your password.</Description>
      <FormButtons>
        <CancelButton
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        />
        <SubmitButton
          onClick={(e) => {
            e.preventDefault();
            window.alert("Clicked!");
          }}
        />
      </FormButtons>
    </Form>
  ),

  name: "form",
};
