import { CheckboxTree } from "./CheckboxTree.js";

export default {
  title: "Forms/CheckboxTree",
  component: CheckboxTree,
};

export const Simple = {
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
