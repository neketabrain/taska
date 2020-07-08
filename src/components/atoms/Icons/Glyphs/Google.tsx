/* eslint-disable max-len */

import React, { FC } from "react";

import { GlyphProps } from "./Glyphs.types";

const Google: FC<GlyphProps> = (props) => (
  <svg {...props} viewBox="0 0 20 20" fill="none">
    <path
      d="M20 10.2c0-.8 0-1.4-.2-2h-9.6v3.6h5.6c-.1 1-.7 2.4-2 3.3v.1l3 2.3h.2c1.9-1.7 3-4.3 3-7.3z"
      fill="#4285F4"
    />
    <path
      d="M10.1 20c2.8 0 5-.9 6.8-2.4L13.6 15c-.8.6-2 1-3.5 1-2.7 0-5-1.7-5.8-4.1h-.1L1 14.4v.1c1.7 3.3 5.1 5.5 9.1 5.5z"
      fill="#34A853"
    />
    <path
      d="M4.4 12a6 6 0 010-4v-.1L1.2 5.4h-.1a9.8 9.8 0 000 9L4.4 12z"
      fill="#FBBC05"
    />
    <path
      d="M10.2 3.9c2 0 3.2.8 4 1.4L17 2.6A10 10 0 0010.2 0c-4 0-7.4 2.2-9.1 5.5L4.4 8a6.2 6.2 0 015.8-4.1z"
      fill="#EB4335"
    />
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

Google.defaultProps = {
  height: "24px",
  width: "24px",
};

export default Google;
