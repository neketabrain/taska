import React, { useCallback, useContext, FC } from "react";
import { Scrollbars, ScrollbarProps } from "react-custom-scrollbars";

import { ThemeContext } from "src/context";

const Scrollable: FC<ScrollbarProps> = (props) => {
  const { children, ...rest } = props;

  const { theme } = useContext(ThemeContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderThumb = useCallback(
    (props) => {
      const { style, ...rest } = props;

      const thumbStyle = {
        backgroundColor: theme.colors.textSecondary,
        borderRadius: "10px",
        opacity: 0.3,
      };

      return <div style={{ ...style, ...thumbStyle }} {...rest} />;
    },
    [theme.colors.textSecondary]
  );

  return (
    <Scrollbars
      {...rest}
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollable;
