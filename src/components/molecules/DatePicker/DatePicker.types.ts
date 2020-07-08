import { ReactDatePickerProps } from "react-datepicker";

import { ClassName } from "src/types";

export type DatePickerProps = ReactDatePickerProps &
  ClassName & {
    name: string;

    time?: boolean;
  };
