import React from "react";

import { InputContainer, Label, Field } from "./Input.styles";
import { InputProps } from "./Input.types";

function Input(props: InputProps): JSX.Element {
  const { label, className, ...rest } = props;

  return (
    <InputContainer className={className}>
      <Label>
        {label}
        <Field {...rest} />
      </Label>
    </InputContainer>
  );
}

export default Input;
