import React, { FC } from "react";

import {
  LeftLabel,
  NativeInput,
  RightLabel,
  SwitchContainer,
  Switcher,
  Wrapper,
} from "./Switch.styles";
import { SwitchProps } from "./Switch.types";

const Switch: FC<SwitchProps> = (props) => {
  const { className, leftLabel, rightLabel, ...rest } = props;

  return (
    <Wrapper className={className}>
      {!!leftLabel && <LeftLabel>{leftLabel}</LeftLabel>}

      <SwitchContainer>
        <NativeInput type="checkbox" {...rest} />
        <Switcher />
      </SwitchContainer>

      {!!rightLabel && <RightLabel>{rightLabel}</RightLabel>}
    </Wrapper>
  );
};

export default Switch;
