import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../components/box";
import { FlexContainer } from "../components/container";
import { PieChart } from "../components/piechart";
import { Text } from "../components/text";
import theme from "../theme";

const meta: Meta = {
  title: "Widgets/TotalSpend",
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <FlexContainer>
      <div>
        <PieChart
          progress={88}
          size={96}
          strokeWidth={15}
          color="success"
          mr="1rem"
        >
          <Text className="chartValue" size="lg" tag="span" weight="medium">
            12%
          </Text>
          <Text className="chartCaption" size="xs" tag="span">
            less
          </Text>
        </PieChart>
      </div>
      <Box shadow="shadow00" p={0}>
        <Text size="sm" tag="div" color={theme.color.text.text02}>
          SEP 1 - SEP 7, 2020
        </Text>
        <Text size="xxl" tag="div" weight="medium">
          $ 3,034.68
        </Text>
        <Text tag="div">
          $ 500.00
          <Text size="sm" tag="span" px=".5rem">
            less than
          </Text>
          <Text size="sm" tag="span">
            AUG 1 - AUG 7, 2020
          </Text>
        </Text>
      </Box>
    </FlexContainer>
  ),

  name: "default",
};
