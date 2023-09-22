import { Meta, StoryObj } from "@storybook/react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import { Datepicker } from "./Datepicker";

const meta: Meta = {
  title: "Forms/Datepicker",
  component: Datepicker,
};

export default meta;

export const DatepickerDefault: StoryObj = {
  render: () => {
    const handleSelect: SelectSingleEventHandler = (date) => {
      console.log(date);
    };

    return (
      <Datepicker>
        <DayPicker mode="single" onSelect={handleSelect} />
      </Datepicker>
    );
  },

  name: "datepicker",
};
