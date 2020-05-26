import React, { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input, Link, CheckBox } from "src/components";
import { ROUTES } from "src/constants";
import { useForm } from "src/hooks";

import {
  Form,
  InputContainer,
  ButtonContainer,
  SubmitButton,
  CheckBoxContainer,
} from "./LoginForm.styles";
import { LoginFormProps, LoginFormValues } from "./LoginForm.types";

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
  isRemembered: false,
};

function LoginForm(props: LoginFormProps): JSX.Element {
  const { onSubmit, getError, clearError } = props;

  const { t } = useTranslation("login");

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

      <InputContainer>
        <Input
          required
          error={getError ? getError("password") : ""}
          label={t("password.label")}
          name="password"
          type="password"
          value={values.password}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <CheckBoxContainer>
        <CheckBox
          name="isRemembered"
          label={t("remember")}
          checked={values.isRemembered}
          onChange={onChange}
        />
      </CheckBoxContainer>

      <ButtonContainer>
        <SubmitButton variant="primary" type="submit" disabled={isSubmitting}>
          {t("button")}
        </SubmitButton>

        <Link to={ROUTES.RESET}>{t("forgot")}</Link>
      </ButtonContainer>
    </Form>
  );
}

export default LoginForm;
