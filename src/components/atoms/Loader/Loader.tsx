import React from "react";

import { LoaderContainer } from "./Loader.styles";

function Loader(props: { className?: string }): JSX.Element {
  const { className } = props;

  return (
    <LoaderContainer className={className}>
      <span />
      <span />
      <span />
      <span />
    </LoaderContainer>
  );
}

export default Loader;
