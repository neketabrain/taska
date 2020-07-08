import { ClassName } from "src/types";

export type CheckButtonProps = ClassName & {
  checked: boolean;
  onChange: (checked: boolean) => void;

  disabled?: boolean;
};
