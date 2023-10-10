import { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionHeader, AccordionItem } from "./Accordion";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

export const AccordionDefault: StoryObj = {
  render: () => (
    <Accordion>
      <AccordionHeader title="Header 1" description="description...">
        {null}
      </AccordionHeader>
      <AccordionHeader title="Header 2" description="description...">
        {null}
      </AccordionHeader>
    </Accordion>
  ),

  name: "accordion",
};

export const AccordionHeaderDefault: StoryObj = {
  render: () => (
    <Accordion>
      <AccordionHeader title="Header 1" description="description...">
        <AccordionItem>1234</AccordionItem>
      </AccordionHeader>
      <AccordionHeader title="Header 2" description="description...">
        <AccordionItem>1234</AccordionItem>
      </AccordionHeader>
      <AccordionHeader title="Header 3" description="description...">
        <AccordionItem>1234</AccordionItem>
      </AccordionHeader>
    </Accordion>
  ),

  name: "accordion header",
};
