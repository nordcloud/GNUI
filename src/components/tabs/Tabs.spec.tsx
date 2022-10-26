import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tab, Tabs } from "./Tabs";

const TAB1_LABEL = "Tab 1";
const TAB2_LABEL = "Tab 2";
const TAB1_CONTENT = "This is dummy tab 1 content";
const TAB2_CONTENT = "Dummy content for tab number 2";
const ACTIVE_TAB_CLASSNAME = "tab-active";

function TabsTestComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  return (
    <Tabs step={currentStep} handleTab={setCurrentStep}>
      <Tab heading="Tab 1">{TAB1_CONTENT}</Tab>
      <Tab heading="Tab 2">{TAB2_CONTENT}</Tab>
    </Tabs>
  );
}

test("active styles are applied via classname on click", () => {
  render(<TabsTestComponent />);

  const firstTab = screen.getByText(TAB1_LABEL);
  const secondTab = screen.getByText(TAB2_LABEL);

  expect(firstTab.parentElement).toHaveClass(ACTIVE_TAB_CLASSNAME);

  userEvent.click(secondTab);
  expect(firstTab.parentElement).not.toHaveClass(ACTIVE_TAB_CLASSNAME);
  expect(secondTab.parentElement).toHaveClass(ACTIVE_TAB_CLASSNAME);
});

test("tab content is rendered according to active tab", () => {
  render(<TabsTestComponent />);

  const firstTab = screen.getByText(TAB1_LABEL);
  const secondTab = screen.getByText(TAB2_LABEL);

  expect(screen.queryByText(TAB1_CONTENT)).toBeInTheDocument();

  userEvent.click(secondTab);
  expect(screen.queryByText(TAB1_CONTENT)).toBeNull();
  expect(screen.queryByText(TAB2_CONTENT)).toBeInTheDocument();

  userEvent.click(firstTab);
  expect(screen.queryByText(TAB1_CONTENT)).toBeInTheDocument();
  expect(screen.queryByText(TAB2_CONTENT)).toBeNull();
});
