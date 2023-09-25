import { Meta, StoryObj } from "@storybook/react";
import { ExtendedPaginationBox } from "./ExtendedPagination";

const meta: Meta = {
  title: "Components/ExtendedPagination",
  component: ExtendedPaginationBox,
};

export default meta;

export const FirstPage: StoryObj = {
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

export const SecondPage: StoryObj = {
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

export const Middle: StoryObj = {
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

export const SecondToLastPage: StoryObj = {
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

export const LastPage: StoryObj = {
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

export const EdgeCases: StoryObj = {
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

export const Short: StoryObj = {
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

export const Small: StoryObj = {
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
