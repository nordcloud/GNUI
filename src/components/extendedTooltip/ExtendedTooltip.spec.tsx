import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../button";
import { ExtendedTooltip } from "./ExtendedTooltip";

const caption =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin.";

const getComponent = () =>
  render(
    <ExtendedTooltip caption={caption} position="start">
      <Button>Hover Me!</Button>
    </ExtendedTooltip>
  );

test("shows on hover", async () => {
  getComponent();
  expect(screen.queryByText(caption)).toBeNull();
  const button = screen.getByRole("button");
  userEvent.hover(button);
  await screen.findByText(caption);
});
