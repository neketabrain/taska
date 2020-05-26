import React from "react";

import {
  CheckBoxContainer,
  CheckIcon,
  Label,
  NativeCheckbox,
  CustomCheckbox,
} from "./CheckBox.styles";
import { CheckBoxProps } from "./CheckBox.types";

function CheckBox(props: CheckBoxProps): JSX.Element {
  const { className, label, checked, disabled, ...rest } = props;

  return (
    <CheckBoxContainer className={className}>
      <Label disabled={disabled}>
        <NativeCheckbox
          type="checkbox"
          checked={checked}
          disabled={disabled}
          {...rest}
        />
        <CustomCheckbox />
        {checked && <CheckIcon />}
        {label}
      </Label>
    </CheckBoxContainer>
  );
}

export default CheckBox;
