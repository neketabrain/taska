/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Clock: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM9.8 5c-.5 0-.8.3-.8.7v4.7c0 .4.2.7.5.9l4.1 2.5a.7.7 0 001.1-.5.7.7 0 00-.3-.7l-3.9-2.3V5.7c0-.4-.3-.7-.7-.7z" />
  </svg>
);

Clock.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Clock;
