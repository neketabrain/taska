/* eslint-disable max-len */

import React from "react";

import { GlyphProps } from "./Glyphs.types";

function Google(props: GlyphProps): JSX.Element {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M19.9865 10.1871C19.9865 9.3677 19.9184 8.76977 19.7712 8.14969H10.1992V11.848H15.8178C15.7045 12.7671 15.0928 14.1512 13.7335 15.0813L13.7144 15.2051L16.7409 17.4969L16.9506 17.5174C18.8763 15.7789 19.9865 13.2211 19.9865 10.1871Z"
          fill="#4285F4"
        />
        <path
          d="M10.1076 19.9947C12.8602 19.9947 15.1711 19.1088 16.859 17.5808L13.6418 15.1447C12.781 15.7315 11.6255 16.1412 10.1076 16.1412C7.41159 16.1412 5.12339 14.4028 4.30771 12L4.18815 12.0099L1.04115 14.3906L1 14.5024C2.6765 17.7579 6.12017 19.9947 10.1076 19.9947Z"
          fill="#34A853"
        />
        <path
          d="M4.39906 11.9366C4.18383 11.3166 4.05927 10.6521 4.05927 9.96565C4.05927 9.27909 4.18383 8.61473 4.38773 7.99466L4.38203 7.8626L1.19561 5.44366L1.09135 5.49214C0.400384 6.84305 0.00390625 8.36008 0.00390625 9.96565C0.00390625 11.5712 0.400384 13.0882 1.09135 14.4391L4.39906 11.9366Z"
          fill="#FBBC05"
        />
        <path
          d="M10.1989 3.85336C12.1133 3.85336 13.4046 4.66168 14.141 5.33718L17.0182 2.59107C15.2511 0.985496 12.9515 0 10.1989 0C6.21147 0 2.76781 2.23672 1.09131 5.49214L4.38769 7.99466C5.2147 5.59183 7.5029 3.85336 10.1989 3.85336Z"
          fill="#EB4335"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

Google.defaultProps = {
  height: "24px",
  width: "24px",
};

export default Google;
