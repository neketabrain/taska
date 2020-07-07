/* eslint-disable max-len */

import React from "react";

import { GlyphProps } from "./Glyphs.types";

function FilledExit(props: GlyphProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.00195 21H19.002C20.105 21 21.002 20.103 21.002 19V5C21.002 3.897 20.105 3 19.002 3H5.00195C3.89895 3 3.00195 3.897 3.00195 5V11.001H9.99995V7L16 12L9.99995 17V13.001H3.00195V19C3.00195 20.103 3.89895 21 5.00195 21Z" />
    </svg>
  );
}

FilledExit.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default FilledExit;
