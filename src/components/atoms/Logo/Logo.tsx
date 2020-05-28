import React from "react";

import { LogoText } from "./Logo.styles";
import { LogoProps } from "./Logo.types";

function Logo(props: LogoProps): JSX.Element {
  return <LogoText {...props}>Taska</LogoText>;
}

export default Logo;
