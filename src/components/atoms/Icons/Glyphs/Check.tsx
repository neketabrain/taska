import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Check: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M9 16.2l-3.5-3.5a1 1 0 00-1.4 1.4l4.2 4.2c.4.4 1 .4 1.4 0L20.3 7.7a1 1 0 10-1.4-1.4L9 16.2z" />
  </svg>
);

Check.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Check;
