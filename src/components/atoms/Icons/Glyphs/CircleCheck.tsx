/* eslint-disable max-len */

import React from "react";

import { GlyphProps } from "./Glyphs.types";

function CircleCheck(props: GlyphProps): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15V15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9702 4.97004C11.1101 4.83131 11.299 4.75323 11.4961 4.75269C11.6931 4.75214 11.8825 4.82918 12.0232 4.96713C12.1639 5.10508 12.2447 5.29288 12.248 5.4899C12.2514 5.68693 12.1771 5.87737 12.0412 6.02004L8.04916 11.01C7.98055 11.0839 7.89774 11.1432 7.80569 11.1844C7.71364 11.2256 7.61423 11.2477 7.51341 11.2496C7.41259 11.2515 7.31243 11.233 7.21891 11.1953C7.1254 11.1575 7.04046 11.1013 6.96916 11.03L4.32416 8.38404C4.25047 8.31537 4.19137 8.23257 4.15038 8.14057C4.10938 8.04858 4.08734 7.94926 4.08557 7.84856C4.08379 7.74786 4.10231 7.64783 4.14004 7.55444C4.17776 7.46105 4.2339 7.37622 4.30512 7.305C4.37634 7.23378 4.46117 7.17763 4.55456 7.13991C4.64795 7.10219 4.74798 7.08367 4.84868 7.08544C4.94938 7.08722 5.0487 7.10926 5.1407 7.15026C5.2327 7.19125 5.3155 7.25035 5.38416 7.32404L7.47816 9.41704L10.9512 4.99204C10.9574 4.98429 10.964 4.97694 10.9712 4.97004H10.9702Z"
      />
    </svg>
  );
}

CircleCheck.defaultProps = {
  fill: "black",
  height: "24px",
  width: "24px",
};

export default CircleCheck;
