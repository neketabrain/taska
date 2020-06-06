import React from "react";

import { TextAreaContainer, Label, Field, Error } from "./TextArea.styles";
import { TextAreaProps } from "./TextArea.types";

function TextArea(props: TextAreaProps): JSX.Element {
  const { label, className, error, ...rest } = props;

  return (
    <TextAreaContainer className={className}>
      <Label>
        {label}
        <Field hasError={!!error} {...rest} />
      </Label>

      {!!error && <Error>{error}</Error>}
    </TextAreaContainer>
  );
}

export default TextArea;
