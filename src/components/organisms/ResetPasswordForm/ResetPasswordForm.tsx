import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "src/components";
import { useForm } from "src/hooks";

import { Form, InputContainer, SubmitButton } from "./ResetPasswordForm.styles";
import {
  ResetPasswordFormValues,
  ResetPasswordFormProps,
} from "./ResetPasswordForm.types";

const defaultValues: ResetPasswordFormValues = {
  email: "",
};

function ResetPasswordForm(props: ResetPasswordFormProps): JSX.Element {
  const { onSubmit, getError, clearError } = props;

  const { t } = useTranslation("reset");

  const { values, onChange } = useForm(defaultValues, clearError);
  const [isSubmitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          required
          error={getError ? getError("email") : ""}
          label={t("email.label")}
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <SubmitButton variant="primary" type="submit" disabled={isSubmitting}>
        {t("button")}
      </SubmitButton>
    </Form>
  );
}

export default ResetPasswordForm;
