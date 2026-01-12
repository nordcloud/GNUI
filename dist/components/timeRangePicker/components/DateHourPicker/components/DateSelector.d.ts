import { Matcher } from "react-day-picker";
import { DateOption } from "../../../types";
type Props = {
    dateOptions: DateOption[];
    disabledDays: Matcher[];
    loading: boolean;
    selectedDate: Date;
    onSelect: (date: Date) => void;
};
export declare function DateSelector({ dateOptions, selectedDate, disabledDays, loading, onSelect, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
