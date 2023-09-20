import { BarChart } from ".";
import theme from "../../theme";

export default {
  title: "Components/BarChart",
  component: BarChart,
};

export const Default = {
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
