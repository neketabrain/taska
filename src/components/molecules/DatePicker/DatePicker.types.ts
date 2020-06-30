import { ReactDatePickerProps } from "react-datepicker";

export type DatePickerProps = ReactDatePickerProps & {
  name: string;

  className?: string;
  time?: boolean;
};
