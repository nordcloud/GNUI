import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "../Textarea";

test("displays correct character count", () => {
  render(<Textarea maxCharCount={20} />);

  expect(screen.getByText("20 / 20")).toBeInTheDocument();

  userEvent.type(screen.getByRole("textbox"), "Strawberry");
  expect(screen.getByText("10 / 20")).toBeInTheDocument();
});

// https://github.com/testing-library/user-event/issues/591#issuecomment-517816296
test("maxCharCount sets maxLength property", () => {
  render(<Textarea maxCharCount={10} />);

  expect(screen.getByRole("textbox")).toHaveProperty("maxLength");
});

test("set char count as the length of value attribute", () => {
  render(<Textarea value="Strawberry" maxCharCount={20} />);

  expect(screen.getByText("10 / 20")).toBeInTheDocument();
});

test("set char count when the value attribute changes", () => {
  function Component() {
    const [value, setValue] = React.useState("");

    return (
      <>
        <button type="button" onClick={() => setValue("Strawberry")} />
        <Textarea value={value} maxCharCount={20} />
      </>
    );
  }

  render(<Component />);

  userEvent.click(screen.getByRole("button"));
  expect(screen.getByText("10 / 20")).toBeInTheDocument();
});
