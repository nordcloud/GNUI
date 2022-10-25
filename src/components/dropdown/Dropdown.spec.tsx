import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "./Dropdown";

const TEST_LABEL = "Option 1";
const SEARCH_VALUE = "Option";

function DropdownTestComponent() {
  const options = [
    { value: "test", label: TEST_LABEL },
    { value: "Option 2" },
    "Option 3",
    "Option 4",
  ];
  const [value, setValue] = React.useState("");

  return (
    <Dropdown
      name="Select an option"
      options={options}
      value={value}
      width="15rem"
      minNumOfOptionsToShowSearchBox={4}
      onChange={(val) => setValue(val)}
      title="Example title"
    />
  );
}
const getSearchComponentAndReturnSearchBox = () => {
  render(<DropdownTestComponent />);
  userEvent.click(screen.getByRole("button"));
  return screen.getByRole("searchbox");
};

test("selects option and displays it", async () => {
  render(<DropdownTestComponent />);

  userEvent.click(screen.getByRole("button"));
  userEvent.click(screen.getAllByText(TEST_LABEL, { selector: "button" })[0]);
  expect(screen.queryByText(TEST_LABEL)).toBeInTheDocument();
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
