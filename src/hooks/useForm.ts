import { ChangeEvent, useState } from "react";

import { ClearError } from "./useErrors";

type Event = ChangeEvent<HTMLInputElement>;

interface UseForm<T> {
  values: T;
  onChange: (event: Event) => void;
}

function reduceByType<T>(event: Event): { [name: string]: boolean | string } {
  const { name, type, value, checked } = event.target;

  if (type === "checkbox") {
    return { [name]: checked };
  }

  return { [name]: value };
}

function useForm<T>(initialValues: T, clearError?: ClearError): UseForm<T> {
  const [values, setValues] = useState(initialValues);

  function onChange(event: Event): void {
    if (clearError) {
      clearError(event.target.name);
    }

    const changedValue = reduceByType(event);
    setValues((prevState) => ({
      ...prevState,
      ...changedValue,
    }));
  }

  return { values, onChange };
}

export default useForm;
