import { Location } from "history";
import { FC } from "react";
import { match } from "react-router";
import { NavLinkProps } from "react-router-dom";

import { ClassName } from "src/types";

type ActiveFunc = <Params extends { [K in keyof Params]?: string | undefined }>(
  _: match<Params>,
  location: Location
) => boolean;

export interface NavItemProps extends ClassName, NavLinkProps {
  label: string;
  to: string;

  Icon?: FC;
  isActive?: ActiveFunc;
}
