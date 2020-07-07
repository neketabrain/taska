import React, { FC } from "react";

import { Error, Field, Label, TextAreaContainer } from "./TextArea.styles";
import { TextAreaProps } from "./TextArea.types";

const TextArea: FC<TextAreaProps> = (props) => {
  const { className, error, label, ...rest } = props;

  return (
    <TextAreaContainer className={className}>
      <Label>
        {label}
        <Field hasError={!!error} {...rest} />
      </Label>

      {!!error && <Error>{error}</Error>}
    </TextAreaContainer>
  );
};

export default TextArea;
