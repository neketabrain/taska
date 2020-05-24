import React from "react";

import { GlyphProps } from "./Glyphs.types";

function ChevronRight(props: GlyphProps): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.59009 16.58L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.58Z" />
    </svg>
  );
}

ChevronRight.defaultProps = {
  width: "24px",
  height: "24px",
  fill: "black",
};

export default ChevronRight;
