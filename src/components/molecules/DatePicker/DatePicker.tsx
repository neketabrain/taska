import { ru } from "date-fns/esm/locale";
import i18next from "i18next";
import React, { useMemo, FC } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { useTranslation } from "react-i18next";

import "react-datepicker/dist/react-datepicker.css";

import { Wrapper } from "./DatePicker.styles";
import { DatePickerProps } from "./DatePicker.types";

registerLocale("ru", ru);
registerLocale("ru-RU", ru);

const DatePicker: FC<DatePickerProps> = (props) => {
  const { className, time, timeIntervals, ...rest } = props;

  const { t } = useTranslation("common");

  const dateFormat = useMemo(() => (time ? "p" : "P"), [time]);
  const interval = useMemo(() => timeIntervals || 10, [timeIntervals]);
  const locale = useMemo(
    () => window.localStorage.getItem("i18nextLng") || i18next.language || "en",
    []
  );
  const timeCaption = useMemo(() => (time ? t("datePicker.time") : undefined), [
    t,
    time,
  ]);
  const todayButton = useMemo(
    () => (time ? undefined : t("datePicker.today")),
    [t, time]
  );

  return (
    <Wrapper className={className}>
      <ReactDatePicker
        {...rest}
        dateFormat={dateFormat}
        locale={locale}
        popperPlacement="bottom"
        timeCaption={timeCaption}
        timeIntervals={interval}
        todayButton={todayButton}
        showTimeSelect={time}
        showTimeSelectOnly={time}
      />
    </Wrapper>
  );
};

export default DatePicker;
