/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Camera: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M20 4h-3.2l-1.2-1.4A2 2 0 0014 2H10a2 2 0 00-1.5.6L7.2 4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-8 13a5 5 0 110-10 5 5 0 010 10z" />
  </svg>
);

Camera.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Camera;
