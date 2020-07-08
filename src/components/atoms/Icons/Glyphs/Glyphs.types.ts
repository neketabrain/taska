import { ClassName, OnClickEvent } from "src/types";

export type GlyphProps = ClassName & {
  fill?: string;
  height?: string;
  onClick?: <T>(event: OnClickEvent<T>) => void;
  width?: string;
};
