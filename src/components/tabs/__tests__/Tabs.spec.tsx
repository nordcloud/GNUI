import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../../button";
import { Tab, Tabs } from "../Tabs";
import {
  ACTIVE_TAB_CLASSNAME,
  INACTIVE_TAB_CLASSNAME,
  NEXT_BUTTON_LABEL,
  PREVIOUS_BUTTON_LABEL,
  TAB1_CAPTION,
  TAB1_CONTENT,
  TAB1_LABEL,
  TAB2_CAPTION,
  TAB2_CONTENT,
  TAB2_LABEL,
  TAB3_CONTENT,
  TAB3_LABEL,
} from "../testConstants";

function TabsTestComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  return (
    <Tabs step={currentStep} handleTab={setCurrentStep} wizard>
      <Tab heading={TAB1_LABEL} caption={TAB1_CAPTION}>
        {TAB1_CONTENT}
      </Tab>
      <Tab heading={TAB2_LABEL} caption={TAB2_CAPTION}>
        {TAB2_CONTENT}
      </Tab>
      <Tab heading={TAB3_LABEL} disabled>
        {TAB3_CONTENT}
      </Tab>
    </Tabs>
  );
}

test("active styles are applied via classname on click", () => {
  render(<TabsTestComponent />);

  const firstTab = screen.getByText(TAB1_LABEL);
  const secondTab = screen.getByText(TAB2_LABEL);
  const firstTabContainer = firstTab.parentElement;
  const secondTabContainer = secondTab.parentElement;

  expect(firstTabContainer).toHaveClass(ACTIVE_TAB_CLASSNAME);
  expect(firstTabContainer).not.toHaveClass(INACTIVE_TAB_CLASSNAME);

  userEvent.click(secondTab);
  expect(firstTabContainer).not.toHaveClass(ACTIVE_TAB_CLASSNAME);
  expect(secondTabContainer).toHaveClass(ACTIVE_TAB_CLASSNAME);
  expect(firstTabContainer).toHaveClass(INACTIVE_TAB_CLASSNAME);
  expect(secondTabContainer).not.toHaveClass(INACTIVE_TAB_CLASSNAME);
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

test("custom label is rendered properly", () => {
  render(
    <Tabs step={1} handleTab={() => {}}>
      <Tab label={<button>{TAB1_LABEL}</button>} />
    </Tabs>
  );

  const customLabel = screen.queryByText(TAB1_LABEL, { selector: "button" });
  expect(customLabel).toBeInTheDocument();
});

test("captions are rendered inside label", () => {
  render(<TabsTestComponent />);

  const captionContainer1 = screen.getByText(TAB1_CAPTION, { selector: "p" });
  expect(captionContainer1.parentElement).toHaveClass(ACTIVE_TAB_CLASSNAME);

  const captionContainer2 = screen.getByText(TAB2_CAPTION, { selector: "p" });
  expect(captionContainer2.parentElement).toHaveClass(INACTIVE_TAB_CLASSNAME);
});

test("disabled tabs are not interactive", () => {
  render(<TabsTestComponent />);

  const thirdTab = screen.getByText(TAB3_LABEL);

  expect(screen.queryByText(TAB1_CONTENT)).toBeInTheDocument();

  userEvent.click(thirdTab);
  expect(screen.queryByText(TAB1_CONTENT)).toBeInTheDocument();
  expect(screen.queryByText(TAB3_CONTENT)).toBeNull();

  expect(thirdTab.parentElement).toHaveClass(INACTIVE_TAB_CLASSNAME);
  expect(thirdTab.parentElement).not.toHaveClass(ACTIVE_TAB_CLASSNAME);
});

test("button actions are executed on click", () => {
  const nextStep = jest.fn();
  const previousStep = jest.fn();

  render(
    <Tabs step={1} handleTab={() => {}}>
      <Tab
        heading="Application Details"
        caption="give some general information about your application"
        buttons={
          <>
            <Button onClick={previousStep}>Previous</Button>
            <Button onClick={nextStep}>Next</Button>
          </>
        }
      >
        Tab 1 Content.
      </Tab>
      <Tab
        heading="Application Environments"
        caption="add environments to your application, setup rules for the cost allocation and automate applications discovery"
        buttonsJustify="flex-start"
        buttons={
          <>
            <Button onClick={previousStep}>{PREVIOUS_BUTTON_LABEL}</Button>
            <Button onClick={nextStep}>{NEXT_BUTTON_LABEL}</Button>
          </>
        }
      >
        Tab 2 Content.
      </Tab>
    </Tabs>
  );

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);

  const previousButton = screen.getByRole("button", {
    name: PREVIOUS_BUTTON_LABEL,
  });
  const nextButton = screen.getByRole("button", { name: NEXT_BUTTON_LABEL });

  userEvent.click(previousButton);
  expect(previousStep).toHaveBeenCalledTimes(1);

  userEvent.click(nextButton);
  expect(nextStep).toHaveBeenCalledTimes(1);
});

test("wizard buttons are displayed", () => {
  render(<TabsTestComponent />);

  expect(screen.queryByText("1")).toBeInTheDocument();
  expect(screen.queryByText("2")).toBeInTheDocument();
  expect(screen.queryByText("3")).toBeInTheDocument();
});
