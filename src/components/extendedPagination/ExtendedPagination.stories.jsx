import { ExtendedPaginationBox } from ".";

export default {
  title: "Components/ExtendedPagination",
  component: ExtendedPaginationBox,
};

export const FirstPage = {
  render: () => (
    <ExtendedPaginationBox
      count={400}
      from={0}
      size={20}
      setPage={() => undefined}
      setSize={() => undefined}
    />
  ),

  name: "first-page",
};

export const SecondPage = {
  render: () => (
    <ExtendedPaginationBox
      count={400}
      from={20}
      size={20}
      setPage={() => undefined}
      setSize={() => undefined}
    />
  ),

  name: "second-page",
};

export const Middle = {
  render: () => (
    <ExtendedPaginationBox
      count={400}
      from={240}
      size={20}
      setPage={() => undefined}
      setSize={() => undefined}
    />
  ),

  name: "middle",
};

export const SecondToLastPage = {
  render: () => (
    <ExtendedPaginationBox
      count={400}
      from={360}
      size={20}
      setPage={() => undefined}
      setSize={() => undefined}
    />
  ),

  name: "second-to-last-page",
};

export const LastPage = {
  render: () => (
    <ExtendedPaginationBox
      count={400}
      from={380}
      size={20}
      setPage={() => undefined}
      setSize={() => undefined}
    />
  ),

  name: "last-page",
};

export const EdgeCases = {
  render: () => (
    <ExtendedPaginationBox
      count={400}
      from={80}
      size={20}
      setPage={() => undefined}
      setSize={() => undefined}
    />
  ),

  name: "edge-cases",
};

export const Short = {
  render: () => (
    <ExtendedPaginationBox
      count={60}
      from={0}
      size={20}
      setPage={() => undefined}
      setSize={() => undefined}
    />
  ),

  name: "short",
};

export const Small = {
  render: () => (
    <ExtendedPaginationBox
      small
      count={400}
      from={0}
      size={20}
      setPage={() => undefined}
      setSize={() => undefined}
    />
  ),

  name: "small",
};
