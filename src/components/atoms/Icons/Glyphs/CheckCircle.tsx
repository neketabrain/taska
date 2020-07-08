/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const CheckCircle: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm3.9-11.7L8 12.2l-1.9-2a1 1 0 10-1.4 1.5l2.6 2.6c.4.4 1 .4 1.4 0l6.6-6.6a1 1 0 000-1.4 1 1 0 00-1.4 0z" />
  </svg>
);

CheckCircle.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default CheckCircle;
