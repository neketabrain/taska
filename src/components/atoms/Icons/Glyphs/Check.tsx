import React from "react";

import { GlyphProps } from "./Glyphs.types";

function Check(props: GlyphProps): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" />
    </svg>
  );
}

Check.defaultProps = {
  width: "24px",
  height: "24px",
  fill: "black",
};

export default Check;
