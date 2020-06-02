import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "src/components";
import { useForm } from "src/hooks";

import { Form, InputContainer, SubmitButton } from "./ChangeEmailForm.styles";
import {
  ChangeEmailFormValues,
  ChangeEmailFormProps,
} from "./ChangeEmailForm.types";

const defaultValues: ChangeEmailFormValues = {
  email: "",
  password: "",
};

function ChangeEmailForm(props: ChangeEmailFormProps): JSX.Element {
  const { onSubmit, getError, clearError } = props;

  const { t } = useTranslation("settings");

  const { values, onChange, resetValues } = useForm(defaultValues, clearError);
  const [isSubmitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setSubmitting(true);
    await onSubmit(values, resetValues);
    setSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          required
          error={getError ? getError("email") : ""}
          label={t("emailPage.form.email")}
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <InputContainer>
        <Input
          required
          error={getError ? getError("password") : ""}
          label={t("emailPage.form.password")}
          name="password"
          type="password"
          value={values.password}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <SubmitButton variant="primary" type="submit" disabled={isSubmitting}>
        {t("emailPage.form.submit")}
      </SubmitButton>
    </Form>
  );
}

export default ChangeEmailForm;
