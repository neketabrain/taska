/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Settings: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M19.4 13a7.8 7.8 0 000-2l2.1-1.6c.2-.2.3-.4.2-.7l-2-3.4c-.2-.2-.4-.3-.7-.2l-2.4 1c-.6-.4-1.1-.8-1.7-1l-.4-2.7A.5.5 0 0014 2h-4c-.3 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7 1L5 5c-.2-.1-.4 0-.6.2l-2 3.4c0 .3 0 .5.2.7l2 1.6a8 8 0 000 2l-2 1.6c-.2.2-.3.5-.2.7l2 3.4c.2.3.4.3.6.3l2.5-1 1.7 1 .4 2.6c0 .2.2.4.5.4h4c.2 0 .5-.2.5-.4l.4-2.7c.6-.2 1.1-.6 1.7-1l2.4 1c.3.1.5 0 .7-.2l2-3.4c0-.3 0-.5-.2-.7l-2-1.6zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
  </svg>
);

Settings.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default Settings;
