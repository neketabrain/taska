/* eslint-disable max-len */

import React from "react";

import { GlyphProps } from "./Glyphs.types";

function FilledPin(props: GlyphProps): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.00903C7.238 2.00903 5 4.23803 5 6.99903C5 11.773 10 17.999 10 17.999C10 17.999 15 11.772 15 6.99903C15 4.23903 12.762 2.00903 10 2.00903ZM10 9.76003C9.28392 9.76003 8.59716 9.47557 8.09081 8.96922C7.58446 8.46287 7.3 7.77612 7.3 7.06003C7.3 6.34395 7.58446 5.65719 8.09081 5.15084C8.59716 4.6445 9.28392 4.36003 10 4.36003C10.7161 4.36003 11.4028 4.6445 11.9092 5.15084C12.4155 5.65719 12.7 6.34395 12.7 7.06003C12.7 7.77612 12.4155 8.46287 11.9092 8.96922C11.4028 9.47557 10.7161 9.76003 10 9.76003Z" />
    </svg>
  );
}

FilledPin.defaultProps = {
  width: "24px",
  height: "24px",
  fill: "black",
};

export default FilledPin;
