/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Calendar: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 22 22">
    <path d="M19 2h-1V1c0-.6-.4-1-1-1a1 1 0 00-1 1v1H6V1c0-.6-.5-1-1-1a1 1 0 00-1 1v1H3a2 2 0 00-2 2v16c0 1.1.9 2 2 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-1 18H4a1 1 0 01-1-1V7h16v12c0 .6-.4 1-1 1z" />
  </svg>
);

Calendar.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Calendar;
