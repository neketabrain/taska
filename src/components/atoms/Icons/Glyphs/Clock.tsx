/* eslint-disable max-len */

import React from "react";

import { GlyphProps } from "./Glyphs.types";

function Clock(props: GlyphProps): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.48486 2.98438H7.48486V8.55034L11.0978 10.2675L11.5271 9.36428L8.48486 7.91841V2.98438Z" />
      <path d="M8 0.5C3.85787 0.5 0.5 3.85787 0.5 8C0.5 12.1421 3.85787 15.5 8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85787 12.1421 0.5 8 0.5ZM8 14.5C4.41016 14.5 1.5 11.5898 1.5 8C1.5 4.41016 4.41016 1.5 8 1.5C11.5898 1.5 14.5 4.41016 14.5 8C14.5 11.5898 11.5898 14.5 8 14.5Z" />
    </svg>
  );
}

Clock.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Clock;
