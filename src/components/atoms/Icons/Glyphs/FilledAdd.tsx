/* eslint-disable max-len */

import React from "react";

import { GlyphProps } from "./Glyphs.types";

function FilledAdd(props: GlyphProps): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 13H13V17H11V13H7V11H11V7H13V11H17V13ZM19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z" />
    </svg>
  );
}

FilledAdd.defaultProps = {
  width: "24px",
  height: "24px",
  fill: "black",
};

export default FilledAdd;
