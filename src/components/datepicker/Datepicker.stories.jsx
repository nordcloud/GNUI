import { addDays } from "date-fns";
import { Datepicker } from ".";
import { DayPicker } from "react-day-picker";

export default {
  title: "Forms/Datepicker",
  component: Datepicker,
};

export const Datepicker = {
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
