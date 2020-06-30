import React, { FC } from "react";

import { ClassName } from "src/types";

import { LoaderContainer } from "./Loader.styles";

const Loader: FC<ClassName> = (props) => {
  const { className } = props;

  return (
    <LoaderContainer className={className}>
      <span />
      <span />
      <span />
      <span />
    </LoaderContainer>
  );
};

export default Loader;
