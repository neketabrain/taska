/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Edit: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M3 17.5v3c0 .3.2.5.5.5h3l.4-.1 11-11L14 6.2 3 17l-.1.4zM20.7 7a1 1 0 000-1.4l-2.3-2.3a1 1 0 00-1.4 0L15 5 19 9 20.7 7z" />
  </svg>
);

Edit.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Edit;
