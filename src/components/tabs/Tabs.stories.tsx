import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { SVGIcon } from "../svgicon";
import { Text } from "../text";
import { Tabs, Tab } from "./Tabs";

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
      <Tabs step={currentStep} handleTab={setCurrentStep}>
        <Tab
          heading="Tab 1"
          caption="Lorem ipsum for Tab 1. Lorem Ipsum is simply dummy text"
        >
          <Text>Tab 1 Content.</Text>
        </Tab>
        <Tab
          heading="Tab 2"
          caption="Lorem ipsum for Tab 1. Lorem Ipsum is simply dummy text"
        >
          <Text>Tab 2 Content.</Text>
        </Tab>
        <Tab
          heading="Tab 3"
          caption="Lorem ipsum for Tab 1. Lorem Ipsum is simply dummy text"
        >
          <Text>Tab 3 Content.</Text>
        </Tab>
      </Tabs>
    );
  },

  name: "default",
};

export const Nocaption: StoryObj = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
      <Tabs step={currentStep} handleTab={setCurrentStep}>
        <Tab heading="Tab 1">
          <Text>Tab 1 Content.</Text>
        </Tab>
        <Tab heading="Tab 2">
          <Text>Tab 2 Content.</Text>
        </Tab>
        <Tab heading="Tab 3">
          <Text>Tab 3 Content.</Text>
        </Tab>
      </Tabs>
    );
  },

  name: "nocaption",
};

export const CustomLabel: StoryObj = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
      <Tabs step={currentStep} handleTab={setCurrentStep}>
        <Tab
          label={
            <FlexContainer as="span">
              <SVGIcon name="aws" />
              <Text mb={0} ml="0.5rem">
                AWS resources
              </Text>
            </FlexContainer>
          }
        >
          <Text>Tab 1 Content.</Text>
        </Tab>
        <Tab heading="Tab 2">
          <Text>Tab 2 Content.</Text>
        </Tab>
        <Tab heading="Tab 3">
          <Text>Tab 3 Content.</Text>
        </Tab>
      </Tabs>
    );
  },

  name: "Custom Label",
};

export const WithButtons: StoryObj = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
      setCurrentStep((prevStep) => prevStep + 1);
    };

    const previousStep = () => {
      setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
      <Tabs wizard step={currentStep} handleTab={setCurrentStep}>
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
          <Text>Tab 1 Content.</Text>
        </Tab>
        <Tab
          heading="Application Environments"
          caption="add environments to your application, setup rules for the cost allocation and automate applications discovery"
          buttonsJustify="flex-start"
          buttons={
            <>
              <Button onClick={previousStep}>Previous</Button>
              <Button onClick={nextStep}>Next</Button>
            </>
          }
        >
          <Text>Tab 2 Content.</Text>
        </Tab>
        <Tab
          heading="Summary"
          caption="great, your application is ready"
          buttonsJustify="center"
          buttons={
            <>
              <Button onClick={previousStep}>Previous</Button>
              <Button onClick={nextStep}>Next</Button>
            </>
          }
        >
          <Text>Tab 3 Content.</Text>
        </Tab>
      </Tabs>
    );
  },

  name: "With Buttons",
};

export const DisabledTab: StoryObj = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
      setCurrentStep((prevStep) => prevStep + 1);
    };

    const previousStep = () => {
      setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
      <Tabs wizard step={currentStep} handleTab={setCurrentStep}>
        <Tab
          disabled
          heading="Tab 1"
          caption="Lorem ipsum for Tab 1. Lorem Ipsum is simply dummy text"
          buttons={
            <>
              <Button onClick={previousStep}>Previous</Button>
              <Button onClick={nextStep}>Next</Button>
            </>
          }
        >
          <Text>Tab 1 Content.</Text>
        </Tab>
        <Tab
          disabled
          heading="Tab 2"
          caption="Lorem ipsum for Tab 2. Lorem Ipsum is simply dummy text"
          buttons={
            <>
              <Button onClick={previousStep}>Previous</Button>
              <Button onClick={nextStep}>Next</Button>
            </>
          }
        >
          <Text>Tab 2 Content.</Text>
        </Tab>
      </Tabs>
    );
  },

  name: "disabled tab",
};

export const Width: StoryObj = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
      <Tabs step={currentStep} handleTab={setCurrentStep}>
        <Tab
          width="auto"
          heading="Tab 1 with very long title to show. (Lorem Ipsum is simply dummy text)"
          caption="Lorem ipsum for Tab 1. Lorem Ipsum is simply dummy text"
        >
          <Text>Tab 1 Content.</Text>
        </Tab>
        <Tab
          width="5rem"
          heading="Tab 2"
          caption="Lorem ipsum for Tab 1. Lorem Ipsum is simply dummy text"
        >
          <Text>Tab 2 Content.</Text>
        </Tab>
      </Tabs>
    );
  },

  name: "width",
};
