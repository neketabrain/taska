import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const ChevronRight: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M9.3 6.7a1 1 0 000 1.4l3.9 3.9-4 3.9a1 1 0 001.5 1.4l4.6-4.6a1 1 0 000-1.4l-4.6-4.6a1 1 0 00-1.4 0z" />
  </svg>
);

ChevronRight.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default ChevronRight;
