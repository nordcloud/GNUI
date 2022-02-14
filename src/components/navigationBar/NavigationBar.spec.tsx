import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MenuItem } from "./MenuItem";
import { NavigationBar } from "./NavigationBar";

test("renders hamburger for expanding", () => {
  const { container } = renderDummyNavBar();

  expect(container.querySelector("svg")).toBeInTheDocument();
});

test("doesn't render hamburger when expanding is disabled", () => {
  const { container } = renderDummyNavBar(false);

  expect(container.querySelector("svg")).not.toBeInTheDocument();
});

test("renders MenuItems as icons without text when folded", () => {
  const { container } = renderNavBarWithItems();

  expect(container.querySelectorAll("svg")).toHaveLength(3);
  expect(screen.queryByText("Dashboard")).toBeNull();
});

test("renders MenutItems as icons with text when unfolded", async () => {
  const { container } = renderNavBarWithItems();

  expect(screen.queryByText("Dashboard")).toBeNull();

  const hamburger = container.querySelector("svg");

  if (hamburger) {
    userEvent.click(hamburger);
  }

  if (container.firstChild) {
    fireEvent.transitionEnd(container.firstChild);
  }

  const text = await screen.findByText("Dashboard");
  expect(text).toBeInTheDocument();
});

function renderDummyNavBar(showHamburger = true) {
  return render(
    <NavigationBar
      expandable={showHamburger}
      expandableConfig={{ duration: "0" }}
    >
      <a href="https://www.nordcloud.com" target="_blank" rel="noreferrer">
        Link
      </a>
    </NavigationBar>
  );
}

function renderNavBarWithItems(showHamburger = true) {
  return render(
    <NavigationBar expandable={showHamburger}>
      <MenuItem caption="Dashboard" icon="dashboard" />
      <MenuItem caption="Cloud" icon="cloud" />
    </NavigationBar>
  );
}
