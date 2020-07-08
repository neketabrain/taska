/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Delete: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M6 19c0 1.1.9 2 2 2h8a2 2 0 002-2V9a2 2 0 00-2-2H8a2 2 0 00-2 2v10zM18 4h-2.5l-.7-.7A1 1 0 0014 3H9.9a1 1 0 00-.7.3l-.7.7H6a1 1 0 00-1 1c0 .5.5 1 1 1h12c.6 0 1-.5 1-1s-.4-1-1-1z" />
  </svg>
);

Delete.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Delete;
