import { useCallback, useState } from "react";

import { OnChangeEvent } from "src/types";

import { SetErrors } from "../useErrors/useErrors.types";

import { UseForm } from "./useForm.types";
import { reduceByType } from "./useForm.utils";

const useForm = <T>(initialValues: T, setErrors?: SetErrors): UseForm<T> => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChangeValues = useCallback(
    (newValues: Partial<T>) => {
      setValues((prevState) => ({
        ...prevState,
        ...newValues,
      }));
    },
    [setValues]
  );

  const onChange = useCallback(
    (event: OnChangeEvent) => {
      event.persist();

      if (setErrors) {
        setErrors({ [event.target.name]: "" });
      }

      setValues((prevState) => ({
        ...prevState,
        ...reduceByType(event),
      }));
    },
    [setErrors]
  );

  return { onChange, setValues: handleChangeValues, values };
};

export default useForm;
