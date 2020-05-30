/* eslint-disable max-len */

import React from "react";

import { GlyphProps } from "./Glyphs.types";

function FilledPhoto(props: GlyphProps): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.2C13.7674 15.2 15.2 13.7674 15.2 12C15.2 10.2327 13.7674 8.80005 12 8.80005C10.2327 8.80005 8.80005 10.2327 8.80005 12C8.80005 13.7674 10.2327 15.2 12 15.2Z" />
      <path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" />
    </svg>
  );
}

FilledPhoto.defaultProps = {
  width: "24px",
  height: "24px",
  fill: "black",
};

export default FilledPhoto;
