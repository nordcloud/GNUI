import { Meta, StoryObj } from "@storybook/react";
import { CheckboxTree } from "./CheckboxTree.js";

const meta: Meta = {
  title: "Forms/CheckboxTree",
  component: CheckboxTree,
};

export default meta;

export const Simple: StoryObj = {
  render: () => (
    <CheckboxTree
      expanded={["meat", "meat->pork"]}
      selected={["meat"]}
      composition={[
        {
          uid: "fish",
          label: "Fish",
        },
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
      ]}
    />
  ),

  name: "simple",
};
