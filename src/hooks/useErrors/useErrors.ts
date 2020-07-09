import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { ERRORS } from "src/constants";

import { UseErrors, UseErrorsState } from "./useErrors.types";

const useErrors = (): UseErrors => {
  const { t } = useTranslation("errors");

  const [errors, setErrors] = useState<UseErrorsState>({});

  const addError = useCallback(
    (error: string, name?: string) => {
      const errorName = ERRORS[error];

      if (name) {
        setErrors((prevState) => ({
          ...prevState,
          [name]: error,
        }));
      } else if (errorName) {
        setErrors((prevState) => ({
          ...prevState,
          [errorName]: error,
        }));
      } else {
        toast.error(error);
      }
    },
    [setErrors]
  );

  const getError = useCallback(
    (name: string) => {
      const error = errors[name];
      return error ? t(errors[name]) : "";
    },
    [errors, t]
  );

  const handleChangeErrors = useCallback(
    (newErrors: UseErrorsState, rewrite?: boolean) => {
      if (rewrite) {
        setErrors(newErrors);
      } else {
        setErrors((prevState) => ({
          ...prevState,
          ...newErrors,
        }));
      }
    },
    [setErrors]
  );

  return { addError, errors, getError, setErrors: handleChangeErrors };
};

export default useErrors;
