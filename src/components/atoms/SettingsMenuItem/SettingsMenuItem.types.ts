import { ClassName } from "src/types";

export type SettingsMenuItemProps = ClassName & {
  label: string;
  path: string;

  exact?: boolean;
};
