import React, { FC } from "react";

import { ClassName } from "src/types";

import { LogoText } from "./Logo.styles";

const Logo: FC<ClassName> = (props) => {
  const { className } = props;

  return <LogoText className={className}>Taska</LogoText>;
};

export default Logo;
