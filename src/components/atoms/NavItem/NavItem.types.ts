import { Location } from "history";
import { match } from "react-router";
import { NavLinkProps } from "react-router-dom";

export type ActiveFunc = <
  Params extends { [K in keyof Params]?: string | undefined }
>(
  _: match<Params>,
  location: Location
) => boolean;

export interface NavItemProps extends NavLinkProps {
  label: string;
  to: string;
  isActive?: ActiveFunc;
  className?: string;
  Icon?: <T>(props: T) => JSX.Element;
}
