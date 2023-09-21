import { Meta, StoryObj } from "@storybook/react";
import theme from "../../theme";
import { BarChart } from "./BarChart";

const meta: Meta = {
  title: "Components/BarChart",
  component: BarChart,
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const values = [
      {
        value: 4629.75,
        color: theme.color.support.red,
      },
      {
        value: 2006.28,
        color: theme.color.support.blue,
      },
      {
        value: 599.66,
        color: theme.color.support.orange,
      },
    ];

    return <BarChart values={values} />;
  },

  name: "default",
};
