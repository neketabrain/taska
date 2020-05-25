import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input, Link } from "src/components";
import { ROUTES } from "src/constants";

import {
  Form,
  InputContainer,
  ButtonContainer,
  SubmitButton,
} from "./LoginForm.styles";
import { LoginFormProps, LoginFormValues } from "./LoginForm.types";

function LoginForm(props: LoginFormProps): JSX.Element {
  const { onSubmit } = props;

  const { t } = useTranslation("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setRemembered] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setSubmitting(true);

    const values: LoginFormValues = {
      email,
      password,
      isRemembered,
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

      <InputContainer>
        <Input
          required
          label={t("password.label")}
          name="password"
          type="password"
          value={password}
          onChange={(e): void => setPassword(e.target.value)}
          disabled={isSubmitting}
        />
      </InputContainer>

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
