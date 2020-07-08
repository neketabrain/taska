/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const CheckCircleFilled: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zM7.3 14.3l-3.6-3.6a1 1 0 011.4-1.4L8 12.2l6.9-7a1 1 0 011.4 1.5l-7.6 7.6a1 1 0 01-1.4 0z" />
  </svg>
);

CheckCircleFilled.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default CheckCircleFilled;
