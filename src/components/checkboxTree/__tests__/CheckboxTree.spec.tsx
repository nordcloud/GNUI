/* Copyright (c) 2020-2021 Nordcloud Oy or its affiliates. All Rights Reserved. */

import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { CheckboxTree } from "../CheckboxTree";
import { CheckboxTreeProps } from "../types";

const data = [
  {
    uid: "meat",
    label: "Meat",
    children: [
      {
        uid: "pork",
        label: "Pork",
        children: [
          {
            uid: "ham",
            label: "Ham",
          },
          {
            uid: "bacon",
            label: "Bacon",
            children: [
              {
                uid: "15%",
                label: "15%",
              },
            ],
          },
        ],
      },
      {
        uid: "chicken",
        label: "Chicken",
        children: [
          {
            uid: "cbreast",
            label: "Breast",
          },
        ],
      },
      {
        uid: "turkey",
        label: "Turkey",
        children: [
          {
            uid: "tbreast",
            label: "Breast",
          },
        ],
      },
    ],
  },
];

const renderComponent = ({
  composition,
  selected,
  expanded,
}: CheckboxTreeProps) =>
  render(
    <CheckboxTree
      composition={composition}
      selected={selected}
      expanded={expanded}
    />
  );

test("setting pre-selected items", async () => {
  const component = renderComponent({
    composition: data,
    selected: ["meat"],
  });
  const checkbox = component.container.querySelector("#meat");

  expect(checkbox).toHaveProperty("checked", true);
});

test("setting pre-expanded items", async () => {
  renderComponent({
    composition: data,
    expanded: ["meat", "meat->pork"],
  });

  await screen.findByText("Pork");
  await screen.findByText("Ham");
});
