import { Meta, StoryObj } from "@storybook/react";
import { FlexContainer } from "../container";
import { SVGIcon } from "../svgicon";
import { Text } from "../text";
import { PieChart } from "./PieChart";

const meta: Meta = {
  title: "Components/PieChart",
  component: PieChart,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <PieChart progress={33} size={96} strokeWidth={15}>
      <Text className="chartValue" size="lg" tag="span" weight="medium">
        33%
      </Text>
      <Text className="chartCaption" size="xs" tag="span">
        progress
      </Text>
    </PieChart>
  ),

  name: "default",
};

export const StrokeWidth: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <PieChart progress={33} size={96} strokeWidth={5}>
        <Text className="chartValue" size="lg" tag="span" weight="medium">
          33%
        </Text>
        <Text className="chartCaption" size="xs" tag="span">
          progress
        </Text>
      </PieChart>
      <PieChart progress={33} size={96} strokeWidth={15}>
        <Text className="chartValue" size="lg" tag="span" weight="medium">
          33%
        </Text>
        <Text className="chartCaption" size="xs" tag="span">
          progress
        </Text>
      </PieChart>
    </FlexContainer>
  ),

  name: "strokeWidth",
};

export const Color: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <PieChart progress={13} size={96} strokeWidth={15} color="danger">
        <Text className="chartValue" size="lg" tag="span" weight="medium">
          13%
        </Text>
        <Text className="chartCaption" size="xs" tag="span">
          progress
        </Text>
      </PieChart>
      <PieChart progress={26} size={96} strokeWidth={15} color="warning">
        <Text className="chartValue" size="lg" tag="span" weight="medium">
          26%
        </Text>
        <Text className="chartCaption" size="xs" tag="span">
          progress
        </Text>
      </PieChart>
      <PieChart progress={65} size={96} strokeWidth={15} color="success">
        <Text className="chartValue" size="lg" tag="span" weight="medium">
          65%
        </Text>
        <Text className="chartCaption" size="xs" tag="span">
          progress
        </Text>
      </PieChart>
      <PieChart progress={75} size={96} strokeWidth={15} color="notification">
        <Text className="chartValue" size="lg" tag="span" weight="medium">
          75%
        </Text>
        <Text className="chartCaption" size="xs" tag="span">
          progress
        </Text>
      </PieChart>
      <PieChart progress={100} size={96} strokeWidth={15} color="success">
        <SVGIcon name="success" color="success" size="md" />
        <Text className="chartCaption" size="xs" tag="span">
          progress
        </Text>
      </PieChart>
    </FlexContainer>
  ),

  name: "color",
};
