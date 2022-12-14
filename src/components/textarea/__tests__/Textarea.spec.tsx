import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
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
