import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import {
  ResetPasswordForm,
  ResetPasswordFormValues,
  Link,
} from "src/components";
import { ROUTES } from "src/constants";
import { useErrors } from "src/hooks";

import { Container, Header, Title, ChevronIcon } from "../Guest.styles";

function ResetPage(): JSX.Element {
  const { t } = useTranslation("reset");

  const { clearError, getError, addError, clearAllErrors } = useErrors();

  async function handleSubmit(values: ResetPasswordFormValues): Promise<void> {
    const { email } = values;

    clearAllErrors();

    Api.auth.sendPasswordResetEmail(email).catch((err) => addError(err.code));
  }

  return (
    <Container>
      <Helmet>
        <title>{t("pageTitle")}</title>
      </Helmet>

      <Header>
        <Title>{t("title")}</Title>
        <Link to={ROUTES.LOGIN}>
          {t("toLogin")} <ChevronIcon />
        </Link>
      </Header>

      <ResetPasswordForm
        onSubmit={handleSubmit}
        clearError={clearError}
        getError={getError}
      />
    </Container>
  );
}

export default ResetPage;
