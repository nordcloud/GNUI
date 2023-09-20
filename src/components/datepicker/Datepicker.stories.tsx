import { DayPicker } from "react-day-picker";
import { Datepicker } from "./Datepicker";

export default {
  title: "Forms/Datepicker",
  component: Datepicker,
};

export const DatepickerDefault = {
  render: () => {
    const handleSelect = (date) => {
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
