import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../button";
import { ExtendedPopover, ExtendedPopoverAction } from "./ExtendedPopover";

const TEST_LABEL = "one";

const getComponent = (
  triggerOn: ExtendedPopoverAction = "hover",
  closeOn: ExtendedPopoverAction = "hover"
) => {
  render(
    <ExtendedPopover
      placement="top"
      position="center"
      triggerOn={triggerOn}
      closeOn={closeOn}
      trigger={<Button type="button">Click Me!</Button>}
      content={
        <ul
          style={{
            backgroundColor: "grey",
            padding: "0.5rem",
            border: "solid 1px black",
          }}
        >
          <li>{TEST_LABEL}</li>
          <li>two</li>
        </ul>
      }
    />
  );
};

const isPopoverShown = (
  triggerOn: ExtendedPopoverAction = "hover",
  closeOn: ExtendedPopoverAction = "hover"
) => {
  getComponent(triggerOn, closeOn);
  expect(screen.queryByText(TEST_LABEL)).not.toBeInTheDocument();
  const button = screen.getByRole("button");
  if (triggerOn === "hover") {
    userEvent.hover(button);
  } else {
    userEvent.click(button);
  }
  expect(screen.queryByText(TEST_LABEL)).toBeInTheDocument();

  return { button };
};

test("shows on hover", () => {
  isPopoverShown();
});

test("shows on click", () => {
  isPopoverShown("click");
});

test("hides on hover outside", () => {
  const { button } = isPopoverShown();
  userEvent.unhover(button);
  expect(screen.queryByText(TEST_LABEL)).not.toBeInTheDocument();
});

test("hides on click outside", () => {
  isPopoverShown("click", "click");
  userEvent.click(document.body);
  expect(screen.queryByText(TEST_LABEL)).not.toBeInTheDocument();
});
