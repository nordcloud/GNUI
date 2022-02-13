import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavigationBar } from "./NavigationBar";
import { MenuItem } from "./MenuItem";

test("renders hamburger for expanding", () => {
  const { container } = renderDummyNavBar();

  expect(container.querySelector("svg")).toBeInTheDocument();
});

test("doesn't render hamburger when expanding is disabled", () => {
  const { container } = renderDummyNavBar(false);

  expect(container.querySelector("svg")).not.toBeInTheDocument();  
});

test("renders MenuItems as icons without text", () => {
  const { container } = renderNavBarWithItems();
  
  expect(container.querySelectorAll("svg")).toHaveLength(3);
  expect(screen.queryByText("Dashboard")).toBe(null);
});

// To be refined, onAnimationEnd is not triggered
test("renders MenutItems as icons with text (when unfolded)", async () => {
  const { container } = renderNavBarWithItems();

  expect(screen.queryByText("Dashboard")).toBe(null);

  const hamburger = container.querySelector("svg");
  
  if (hamburger) {
    userEvent.click(hamburger);
    fireEvent.transitionEnd(container);
  }

  const text = await waitFor(() => screen.queryByText("Dashboard"));
  expect(text).not.toBeInTheDocument();
});

function renderDummyNavBar(showHamburger: boolean = true) {
  return render(<NavigationBar expandable={showHamburger}>
    <a href="https://www.nordcloud.com" target="_blank">Link</a>
  </NavigationBar>);
}

function renderNavBarWithItems(showHamburger: boolean = true) {
  return render(<NavigationBar expandable={showHamburger}>
    <MenuItem caption="Dashboard" icon="dashboard" />
    <MenuItem caption="Cloud" icon="cloud" />
  </NavigationBar>)
}
