import { ReactElement, ReactNode } from "react";

export type TooltipProps = {
  children: ReactElement;
  overlay: (() => ReactNode) | ReactNode;
  placement?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
};
