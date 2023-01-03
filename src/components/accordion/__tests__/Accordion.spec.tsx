import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion, AccordionHeader, AccordionItem } from "../Accordion";

const data = {
  title: "Restricted users",
  description: "List of users with read-only access",
  username: "Steve",
};

test("accordion shows and hides content", () => {
  render(
    <Accordion>
      <AccordionHeader title={data.title} description={data.description}>
        <AccordionItem>{data.username}</AccordionItem>
      </AccordionHeader>
    </Accordion>
  );

  userEvent.click(screen.getByText(data.title));
  expect(screen.getByText(data.username)).toBeInTheDocument();

  userEvent.click(screen.getByText(data.description));
  expect(screen.queryByText(data.username)).not.toBeInTheDocument();
});
