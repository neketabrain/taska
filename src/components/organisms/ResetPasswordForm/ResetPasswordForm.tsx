import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "src/components";

import { Form, InputContainer, SubmitButton } from "./ResetPasswordForm.styles";
import {
  ResetPasswordFormValues,
  ResetPasswordFormProps,
} from "./ResetPasswordForm.types";

function ResetPasswordForm(props: ResetPasswordFormProps): JSX.Element {
  const { onSubmit } = props;

  const { t } = useTranslation("reset");

  const [email, setEmail] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setSubmitting(true);

    const values: ResetPasswordFormValues = {
      email,
    };
    await onSubmit(values);

    setSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          required
          label={t("email.label")}
          name="email"
          type="email"
          value={email}
          onChange={(e): void => setEmail(e.target.value)}
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
