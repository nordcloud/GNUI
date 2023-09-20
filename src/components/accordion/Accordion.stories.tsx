import { Accordion, AccordionHeader, AccordionItem } from ".";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

export const AccordionDefault = {
  render: () => (
    <Accordion>
      <AccordionHeader
        children={null}
        title="Header 1"
        description="description..."
      />
      <AccordionHeader
        children={null}
        title="Header 2"
        description="description..."
      />
    </Accordion>
  ),

  name: "accordion",
};

export const AccordionHeaderDefault = {
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
