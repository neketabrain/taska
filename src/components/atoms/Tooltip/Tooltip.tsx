import ReactTooltip from "rc-tooltip";
import React, { FC } from "react";

import { TooltipProps } from "./Tooltip.types";

const Tooltip: FC<TooltipProps> = (props) => {
  const { children, overlay, placement = "top" } = props;

  return (
    <ReactTooltip placement={placement} overlay={overlay}>
      {children}
    </ReactTooltip>
  );
};

export default Tooltip;
