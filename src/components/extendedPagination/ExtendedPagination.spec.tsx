import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { ExtendedPaginationBox } from "./ExtendedPagination";

const setSize = vi.fn();
const setPage = vi.fn();

const getComponent = ({
  from,
  count,
  size,
  firstPage,
}: {
  from: number;
  count: number;
  size: number;
  firstPage?: number;
}) =>
  render(
    <ExtendedPaginationBox
      count={count}
      from={from}
      setPage={setPage}
      setSize={setSize}
      size={size}
      firstPage={firstPage}
    />
  );

const getParams = (firstPage = 0, from = 0, count = 200) => ({
  from,
  count,
  firstPage,
  size: 20,
});

test("shows current number of results", async () => {
  const params = getParams();
  getComponent(params);
  await screen.findByText(`1 -${params.size} of ${params.count}`);
});

test("shows current number of results for start index 1", async () => {
  const params = getParams(1);
  getComponent(params);
  await screen.findByText(`1 -${params.size} of ${params.count}`);
});

test("shows `per page` component", async () => {
  getComponent(getParams());
  await screen.findByText(/show/i);
});

test("shows `per page` component for start index 1", async () => {
  getComponent(getParams(1));
  await screen.findByText(/show/i);
});

test("shows last page button on 1st page", () => {
  getComponent(getParams());

  expect(screen.getByTestId("last-page")).toBeInTheDocument();
  expect(screen.getByTestId("last-page-dots")).toBeInTheDocument();

  expect(screen.queryByTestId("first-page")).not.toBeInTheDocument();
  expect(screen.queryByTestId("first-page-dots")).not.toBeInTheDocument();
});

test("shows last page button on 1st page for start index 1", () => {
  getComponent(getParams(1));

  expect(screen.getByTestId("last-page")).toBeInTheDocument();
  expect(screen.getByTestId("last-page-dots")).toBeInTheDocument();

  expect(screen.queryByTestId("first-page")).not.toBeInTheDocument();
  expect(screen.queryByTestId("first-page-dots")).not.toBeInTheDocument();
});

test("shows first page button on last page", () => {
  getComponent(getParams(0, 180));

  expect(screen.queryByTestId("last-page")).not.toBeInTheDocument();
  expect(screen.queryByTestId("last-page-dots")).not.toBeInTheDocument();

  expect(screen.getByTestId("first-page")).toBeInTheDocument();
  expect(screen.getByTestId("first-page-dots")).toBeInTheDocument();
});

test("shows first page button on last page for start index 1", () => {
  getComponent(getParams(1, 180));

  expect(screen.queryByTestId("last-page")).not.toBeInTheDocument();
  expect(screen.queryByTestId("last-page-dots")).not.toBeInTheDocument();

  expect(screen.getByTestId("first-page")).toBeInTheDocument();
  expect(screen.getByTestId("first-page-dots")).toBeInTheDocument();
});

test("shows 1st and last page buttons in the middle", () => {
  getComponent(getParams(0, 100, 400));

  expect(screen.getByTestId("last-page")).toBeInTheDocument();
  expect(screen.getByTestId("last-page-dots")).toBeInTheDocument();

  expect(screen.getByTestId("first-page")).toBeInTheDocument();
  expect(screen.getByTestId("first-page-dots")).toBeInTheDocument();
});

test("shows 1st and last page buttons in the middle for start index 1", () => {
  getComponent(getParams(1, 100, 400));

  expect(screen.getByTestId("last-page")).toBeInTheDocument();
  expect(screen.getByTestId("last-page-dots")).toBeInTheDocument();

  expect(screen.getByTestId("first-page")).toBeInTheDocument();
  expect(screen.getByTestId("first-page-dots")).toBeInTheDocument();
});

test("shows only `next` button", () => {
  getComponent(getParams());
  expect(screen.getByTestId("next-page")).toBeInTheDocument();
  expect(screen.queryByTestId("prev-page")).not.toBeInTheDocument();
});

test("shows only `next` button for start index 1", () => {
  getComponent(getParams(1));
  expect(screen.getByTestId("next-page")).toBeInTheDocument();
  expect(screen.queryByTestId("prev-page")).not.toBeInTheDocument();
});

test("shows only `prev` button", () => {
  getComponent(getParams(0, 180));
  expect(screen.queryByTestId("next-page")).not.toBeInTheDocument();
  expect(screen.getByTestId("prev-page")).toBeInTheDocument();
});

test("shows only `prev` button for start index 1", () => {
  getComponent(getParams(1, 190));
  expect(screen.queryByTestId("next-page")).not.toBeInTheDocument();
  expect(screen.getByTestId("prev-page")).toBeInTheDocument();
});

test("shows `prev` and 'next' button", () => {
  getComponent(getParams(0, 100));
  expect(screen.getByTestId("next-page")).toBeInTheDocument();
  expect(screen.getByTestId("prev-page")).toBeInTheDocument();
});

test("shows `prev` and 'next' button for start index 1", () => {
  getComponent(getParams(1, 100));
  expect(screen.getByTestId("next-page")).toBeInTheDocument();
  expect(screen.getByTestId("prev-page")).toBeInTheDocument();
});

test("notifies about changing page", () => {
  getComponent(getParams());
  const button = screen.getByTestId("button-1");
  userEvent.click(button);
  expect(setPage).toHaveBeenCalledWith(expect.anything());
});

test("notifies about changing page for start index 1", () => {
  getComponent(getParams(1));
  const button = screen.getByTestId("button-1");
  userEvent.click(button);
  expect(setPage).toHaveBeenCalledWith(expect.anything());
});

test("renders without number of results and `per page` for small screens", () => {
  const params = getParams();
  render(
    <ExtendedPaginationBox
      small
      count={params.count}
      from={params.from}
      setPage={setPage}
      setSize={setSize}
      size={params.size}
    />
  );

  expect(screen.queryByText(/show/i)).not.toBeInTheDocument();
  expect(
    screen.queryByText(`1 -${params.size} of ${params.count}`)
  ).not.toBeInTheDocument();
});

test("renders without number of results and `per page` for small screens for start index 1", () => {
  const params = getParams(1);
  render(
    <ExtendedPaginationBox
      small
      count={params.count}
      from={params.from}
      setPage={setPage}
      setSize={setSize}
      size={params.size}
      firstPage={params.firstPage}
    />
  );

  expect(screen.queryByText(/show/i)).not.toBeInTheDocument();
  expect(
    screen.queryByText(`1 -${params.size} of ${params.count}`)
  ).not.toBeInTheDocument();
});
