import React from "react";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import {
  ResetPasswordForm,
  ResetPasswordFormValues,
  Link,
} from "src/components";
import { ROUTES } from "src/constants";

import { Container, Header, Title, ChevronIcon } from "../Guest.styles";

function ResetPage(): JSX.Element {
  const { t } = useTranslation("reset");

  async function handleSubmit(values: ResetPasswordFormValues): Promise<void> {
    const { email } = values;

    Api.auth.sendPasswordResetEmail(email).then(console.log).catch(console.log);
  }

  return (
    <Container>
      <Header>
        <Title>{t("title")}</Title>
        <Link to={ROUTES.LOGIN}>
          {t("toLogin")} <ChevronIcon />
        </Link>
      </Header>

      <ResetPasswordForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default ResetPage;
