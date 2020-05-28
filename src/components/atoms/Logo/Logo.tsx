import React from "react";

import { LogoText } from "./Logo.styles";
import { LogoProps } from "./Logo.types";

function Logo(props: LogoProps): JSX.Element {
  const { className } = props;

  return <LogoText className={className}>Taska</LogoText>;
}

export default Logo;
