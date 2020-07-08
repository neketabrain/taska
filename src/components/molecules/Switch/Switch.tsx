import React, { FC } from "react";
import { useTranslation } from "react-i18next";

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
  const { className, leftLabel, name, rightLabel, ...rest } = props;

  const { t } = useTranslation("accessibility");

  return (
    <Wrapper className={className}>
      {!!leftLabel && <LeftLabel>{leftLabel}</LeftLabel>}

      <SwitchContainer>
        <NativeInput
          aria-label={t(name)}
          name={name}
          type="checkbox"
          {...rest}
        />
        <Switcher />
      </SwitchContainer>

      {!!rightLabel && <RightLabel>{rightLabel}</RightLabel>}
    </Wrapper>
  );
};

export default Switch;
