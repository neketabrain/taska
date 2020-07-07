/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const AddFilled: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-3 10h-3v3c0 .6-.4 1-1 1a1 1 0 01-1-1v-3H8a1 1 0 01-1-1c0-.6.5-1 1-1h3V8c0-.5.4-1 1-1s1 .5 1 1v3h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
  </svg>
);

AddFilled.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default AddFilled;
