import { OnChangeEvent } from "src/types";

export type UseForm<T> = {
  onChange: (event: OnChangeEvent) => void;
  setValues: (newValues: Partial<T>) => void;
  values: T;
};
