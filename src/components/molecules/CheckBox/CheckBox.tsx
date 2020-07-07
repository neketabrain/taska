import React, { FC } from "react";

import {
  CheckBoxContainer,
  CheckIcon,
  CustomCheckbox,
  Label,
  NativeCheckbox,
} from "./CheckBox.styles";
import { CheckBoxProps } from "./CheckBox.types";

const CheckBox: FC<CheckBoxProps> = (props) => {
  const { className, label, ...rest } = props;

  return (
    <CheckBoxContainer className={className}>
      <Label>
        <NativeCheckbox type="checkbox" {...rest} />
        <CustomCheckbox />
        <CheckIcon />
        {label}
      </Label>
    </CheckBoxContainer>
  );
};

export default CheckBox;
