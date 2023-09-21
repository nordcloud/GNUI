import { useState, Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab, ButtonPrevious, ButtonNext } from "../components/tabs";
import { Text } from "../components/text";

const meta: Meta = {
  title: "Components/Wizard",
  component: Tabs,
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [isCurrentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
      setCurrentStep(isCurrentStep + 1);
    };

    const previousStep = () => {
      setCurrentStep(isCurrentStep - 1);
    };

    const handleSteps = (key) => {
      setCurrentStep(key);
    };

    const buttonsStep1 = (
      <Fragment>
        <ButtonNext onClick={() => nextStep()}>Next Step</ButtonNext>
      </Fragment>
    );

    const buttonsStep2 = (
      <Fragment>
        <ButtonPrevious onClick={() => previousStep()}>
          Previous Step
        </ButtonPrevious>
        <ButtonNext onClick={() => nextStep()}>Next Step</ButtonNext>
      </Fragment>
    );

    const buttonsStep3 = (
      <Fragment>
        <ButtonPrevious onClick={() => previousStep()}>
          Previous Step
        </ButtonPrevious>
        <ButtonNext onClick={() => {}}>Submit</ButtonNext>
      </Fragment>
    );

    return (
      <Tabs wizard step={isCurrentStep} handleTab={handleSteps}>
        <Tab
          heading="Tab 1"
          caption="Small caption for Tab 1"
          buttons={buttonsStep1}
        >
          <Text>
            Lorem ipsum for Tab 1. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </Tab>
        <Tab
          heading="Tab 2"
          caption="Lorem ipsum for Tab 3. Lorem Ipsum is simply dummy text of\n            the printing and typesetting industry."
          buttons={buttonsStep2}
        >
          <Text>
            Lorem ipsum for Tab 2. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </Tab>
        <Tab
          heading="Tab 3"
          caption="Lorem ipsum for Tab 3. Lorem Ipsum is simply dummy text of the\n            printing and typesetting industry. Lorem Ipsum has been the\n            industry's standard dummy text ever since the 1500s."
          buttons={buttonsStep3}
        >
          <Text>
            Lorem ipsum for Tab 3. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </Tab>
      </Tabs>
    );
  },

  name: "default",
};

export const Disabled: StoryObj = {
  render: () => {
    const [isCurrentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
      setCurrentStep(isCurrentStep + 1);
    };

    const previousStep = () => {
      setCurrentStep(isCurrentStep - 1);
    };

    const handleSteps = (key) => {
      setCurrentStep(key);
    };

    const buttonsStep1 = (
      <Fragment>
        <ButtonNext onClick={() => nextStep()}>Next Step</ButtonNext>
      </Fragment>
    );

    const buttonsStep2 = (
      <Fragment>
        <ButtonPrevious onClick={() => previousStep()}>
          Previous Step
        </ButtonPrevious>
        <ButtonNext onClick={() => nextStep()}>Next Step</ButtonNext>
      </Fragment>
    );

    const buttonsStep3 = (
      <Fragment>
        <ButtonPrevious onClick={() => previousStep()}>
          Previous Step
        </ButtonPrevious>
        <ButtonNext onClick={() => {}}>Submit</ButtonNext>
      </Fragment>
    );

    return (
      <Tabs wizard step={isCurrentStep} handleTab={handleSteps}>
        <Tab
          heading="Tab 1"
          caption="Small caption for Tab 1"
          buttons={buttonsStep1}
        >
          <Text>
            Lorem ipsum for Tab 1. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </Tab>
        <Tab
          disabled
          heading="Tab 2"
          caption="Small caption for Tab 2"
          buttons={buttonsStep2}
        >
          <Text>
            Lorem ipsum for Tab 2. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </Tab>
        <Tab
          disabled
          heading="Tab 3"
          caption="Small caption for Tab 3"
          buttons={buttonsStep3}
        >
          <Text>
            Lorem ipsum for Tab 3. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </Tab>
      </Tabs>
    );
  },

  name: "disabled",
};
