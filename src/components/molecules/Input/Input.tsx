import React, { forwardRef, FC } from "react";

import { Error, Field, InputContainer, Label } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = forwardRef((props, _) => {
  const { className, error, label, ...rest } = props;

  return (
    <InputContainer className={className}>
      <Label>
        {label}
        <Field hasError={!!error} {...rest} />
      </Label>

      {!!error && <Error>{error}</Error>}
    </InputContainer>
  );
});

export default Input;
