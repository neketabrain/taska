import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ERRORS } from "../constants";

export interface UseErrorsState {
  [name: string]: string;
}

export type AddError = (code: string) => void;
export type GetError = (name: string) => string;
export type ClearError = (name: string) => void;
export type ClearAllErrors = () => void;

export interface UseErrors {
  errors: UseErrorsState;
  addError: AddError;
  getError: GetError;
  clearError: ClearError;
  clearAllErrors: ClearAllErrors;
}

function useErrors(): UseErrors {
  const { t } = useTranslation("errors");
  const [errors, setErrors] = useState<UseErrorsState>({});

  function addError(code: string): void {
    const errorName = ERRORS[code];

    if (errorName) {
      setErrors((prevState) => ({
        ...prevState,
        [errorName]: code,
      }));
    } else {
      alert(code); //TODO: Change to toast
    }
  }

  function getError(name: string): string {
    const error = errors[name];
    return error ? t(error) : "";
  }

  function clearError(name: string): void {
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  }

  function clearAllErrors(): void {
    setErrors({});
  }

  return { errors, addError, getError, clearError, clearAllErrors };
}

export default useErrors;