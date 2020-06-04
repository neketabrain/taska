import React from "react";

import {
  Wrapper,
  SwitchContainer,
  LeftLabel,
  RightLabel,
  Switcher,
  NativeInput,
} from "./Switch.styles";
import { SwitchProps } from "./Switch.types";

function Switch(props: SwitchProps): JSX.Element {
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
}

export default Switch;
