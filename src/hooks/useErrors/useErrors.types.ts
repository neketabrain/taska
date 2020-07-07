export type UseErrorsState = Record<string, string>;

export type AddError = (code: string, name?: string) => void;
export type GetError = (name: string) => string;
export type SetErrors = (newErrors: UseErrorsState, rewrite?: boolean) => void;

export type UseErrors = {
  addError: AddError;
  errors: UseErrorsState;
  getError: GetError;
  setErrors: SetErrors;
};
