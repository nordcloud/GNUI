import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExtendedPaginationBox } from "./ExtendedPagination";

const setSize = jest.fn();
const setPage = jest.fn();

const getComponent = ({
  from,
  count,
  size,
}: {
  from: number;
  count: number;
  size: number;
}) =>
  render(
    <ExtendedPaginationBox
      count={count}
      from={from}
      setPage={setPage}
      setSize={setSize}
      size={size}
    />
  );

const getParams = (from = 0, count = 200, size = 20) => ({ from, count, size });

test("shows current number of results", async () => {
  const params = getParams();
  getComponent(params);
  await screen.findByText(`1 -${params.size} of ${params.count}`);
});

test("shows `per page` component", async () => {
  getComponent(getParams());
  await screen.findByText(/show/i);
});

test("shows last page button on 1st page", () => {
  getComponent(getParams());

  expect(screen.getByTestId("last-page")).toBeInTheDocument();
  expect(screen.getByTestId("last-page-dots")).toBeInTheDocument();

  expect(screen.queryByTestId("first-page")).not.toBeInTheDocument();
  expect(screen.queryByTestId("first-page-dots")).not.toBeInTheDocument();
});

test("shows first page button on last page", () => {
  getComponent(getParams(180));

  expect(screen.queryByTestId("last-page")).not.toBeInTheDocument();
  expect(screen.queryByTestId("last-page-dots")).not.toBeInTheDocument();

  expect(screen.getByTestId("first-page")).toBeInTheDocument();
  expect(screen.getByTestId("first-page-dots")).toBeInTheDocument();
});

test("shows 1st and last page buttons in the middle", () => {
  getComponent(getParams(100, 400));

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

test("shows only `prev` button", () => {
  getComponent(getParams(180));
  expect(screen.queryByTestId("next-page")).not.toBeInTheDocument();
  expect(screen.getByTestId("prev-page")).toBeInTheDocument();
});

test("shows `prev` and 'next' button", () => {
  getComponent(getParams(100));
  expect(screen.queryByTestId("next-page")).toBeInTheDocument();
  expect(screen.getByTestId("prev-page")).toBeInTheDocument();
});

test("notifies about changing page", () => {
  getComponent(getParams());
  const button = screen.getByTestId("button-1");
  userEvent.click(button);
  expect(setPage).toHaveBeenCalledWith(expect.anything());
});

test("renders without number of results and `per page` for small screens", async () => {
  const params = getParams();
  render(
    <ExtendedPaginationBox
      count={params.count}
      from={params.from}
      setPage={setPage}
      setSize={setSize}
      size={params.size}
      small
    />
  );

  expect(screen.queryByText(/show/i)).toBeNull();
  expect(screen.queryByText(`1 -${params.size} of ${params.count}`)).toBeNull();
});
