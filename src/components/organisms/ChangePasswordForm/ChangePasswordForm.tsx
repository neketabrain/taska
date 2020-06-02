import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "src/components";
import { useForm } from "src/hooks";

import {
  Form,
  InputContainer,
  SubmitButton,
} from "./ChangePasswordForm.styles";
import {
  ChangePasswordFormProps,
  ChangePasswordFormValues,
} from "./ChangePasswordForm.types";

const defaultValues: ChangePasswordFormValues = {
  oldPassword: "",
  newPassword: "",
};

function ChangePasswordForm(props: ChangePasswordFormProps): JSX.Element {
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
          error={getError ? getError("oldPassword") : ""}
          label={t("passwordPage.form.oldPassword")}
          name="oldPassword"
          type="password"
          value={values.oldPassword}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <InputContainer>
        <Input
          required
          error={getError ? getError("newPassword") : ""}
          label={t("passwordPage.form.newPassword")}
          name="newPassword"
          type="password"
          value={values.newPassword}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <SubmitButton variant="primary" type="submit" disabled={isSubmitting}>
        {t("passwordPage.form.submit")}
      </SubmitButton>
    </Form>
  );
}

export default ChangePasswordForm;
