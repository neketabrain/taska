import { InputHTMLAttributes } from "react";

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};
