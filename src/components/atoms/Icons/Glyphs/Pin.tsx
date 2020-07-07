/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Pin: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M18 8A6 6 0 006 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2a2 2 0 011.4 3.4A2 2 0 0110 8zM5 20v2h14v-2H5z" />
  </svg>
);

Pin.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Pin;
