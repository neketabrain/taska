import { InputHTMLAttributes } from "react";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  className?: string;
}
