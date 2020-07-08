/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const ExitFilled: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M10.8 16.3c.4.4 1 .4 1.4 0l3.6-3.6a1 1 0 000-1.4l-3.6-3.6a1 1 0 00-1.4 1.4l1.9 1.9H4a1 1 0 00-1 1c0 .6.5 1 1 1h8.7l-2 1.9a1 1 0 000 1.4zM19 3H5a2 2 0 00-2 2v3c0 .6.5 1 1 1s1-.4 1-1V6c0-.5.5-1 1-1h12c.6 0 1 .5 1 1v12c0 .6-.4 1-1 1H6a1 1 0 01-1-1v-2c0-.6-.5-1-1-1a1 1 0 00-1 1v3c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
  </svg>
);

ExitFilled.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default ExitFilled;
