import { InputHTMLAttributes } from "react";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  leftLabel?: string;
  rightLabel?: string;
}
