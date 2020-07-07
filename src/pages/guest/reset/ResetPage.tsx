import React, { useCallback, FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import {
  Link,
  ResetPasswordForm,
  ResetPasswordFormValues,
} from "src/components";
import { ROUTES } from "src/constants";
import { useErrors } from "src/hooks";

import { ChevronIcon, Container, Header, Main, Title } from "../Guest.styles";

const initialValues: ResetPasswordFormValues = {
  email: "",
};

const ResetPage: FC = () => {
  const { t } = useTranslation("reset");

  const { addError, getError, setErrors } = useErrors();

  const handleSubmit = useCallback(
    async (values: ResetPasswordFormValues, resetValues: VoidFunction) => {
      const { email } = values;

      setErrors({}, true);

      await Api.auth.sendPasswordResetEmail(email).catch((err) => {
        addError(err?.code);
        resetValues();
      });
    },
    [addError, setErrors]
  );

  return (
    <Main>
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
          getError={getError}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          setErrors={setErrors}
        />
      </Container>
    </Main>
  );
};

export default ResetPage;
