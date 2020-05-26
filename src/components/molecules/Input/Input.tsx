import React from "react";

import { InputContainer, Label, Field, Error } from "./Input.styles";
import { InputProps } from "./Input.types";

function Input(props: InputProps): JSX.Element {
  const { label, className, error, ...rest } = props;

  return (
    <InputContainer className={className}>
      <Label>
        {label}
        <Field hasError={!!error} {...rest} />
      </Label>

      {!!error && <Error>{error}</Error>}
    </InputContainer>
  );
}

export default Input;
