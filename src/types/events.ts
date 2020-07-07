import { ChangeEvent, FormEvent } from "react";

export type InputOnChangeEvent = ChangeEvent<HTMLInputElement>;

export type TextAreaOnChangeEvent = ChangeEvent<HTMLTextAreaElement>;

export type OnChangeEvent = InputOnChangeEvent | TextAreaOnChangeEvent;

export type OnSubmitEvent = FormEvent<HTMLFormElement>;
