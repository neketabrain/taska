/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const ListFilled: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M21 3H3a2 2 0 00-2 2v14c0 1.1.9 2 2 2h18a2 2 0 002-2V5a2 2 0 00-2-2zm-10 8H4a1 1 0 01-1-1c0-.6.5-1 1-1h7c.6 0 1 .4 1 1s-.4 1-1 1zm0-4H4a1 1 0 01-1-1c0-.5.5-1 1-1h7c.6 0 1 .5 1 1s-.4 1-1 1z" />
  </svg>
);

ListFilled.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default ListFilled;
