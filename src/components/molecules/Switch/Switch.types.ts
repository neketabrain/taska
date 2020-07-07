import { InputHTMLAttributes } from "react";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;

  leftLabel?: string;
  rightLabel?: string;
};
