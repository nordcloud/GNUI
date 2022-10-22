import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "./Dropdown";

const TEST_LABEL = "Option 1";
const SEARCH_VALUE = "Option";

const getSearchComponentAndReturnSearchBox = () => {
  const options = [
    { value: "test", label: TEST_LABEL },
    { value: "Option 2" },
    "Option 3",
    "Option 4",
  ];

  render(
    <Dropdown
      name="Select an option"
      options={options}
      width="15rem"
      minNumOfOptionsToShowSearchBox={4}
      onChange={() => {}}
      title="Example title"
    />
  );

  userEvent.click(screen.getByRole("button"));
  return screen.getByRole("searchbox");
};

test("selects option and displays it", async () => {
  const TEST_VALUE = "test";
  let value = "";

  const options = [{ value: TEST_VALUE, label: TEST_LABEL }];

  render(
    <Dropdown
      name="Select an option"
      options={options}
      value={value}
      width="15rem"
      minNumOfOptionsToShowSearchBox={4}
      onChange={(val) => {
        value = val;
      }}
      title="Example title"
    />
  );

  userEvent.click(screen.getByRole("button"));
  userEvent.click(screen.getAllByText(TEST_LABEL, { selector: "button" })[0]);
  expect(value).toBe(TEST_VALUE);
});

test("shows no options if no option matches", async () => {
  const filterInput = getSearchComponentAndReturnSearchBox();

  userEvent.type(filterInput, "randomgibberishvalue");
  expect(screen.queryByText(TEST_LABEL)).not.toBeInTheDocument();
  expect(screen.queryAllByRole("button")).toHaveLength(1);
});

test("shows all possible matching options", async () => {
  const filterInput = getSearchComponentAndReturnSearchBox();

  userEvent.type(filterInput, SEARCH_VALUE);
  expect(
    screen.queryAllByText((content) => content.startsWith(SEARCH_VALUE))
  ).toHaveLength(4);
});

test("filters options properly by value", async () => {
  const filterInput = getSearchComponentAndReturnSearchBox();

  userEvent.type(filterInput, "test");
  expect(screen.queryByText(TEST_LABEL)).toBeInTheDocument();
  expect(
    screen.queryAllByText((content) => content.startsWith(SEARCH_VALUE))
  ).toHaveLength(1);
});
