import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import { LoginForm, LoginFormValues, Button, Link } from "src/components";
import { ROUTES } from "src/constants";
import { useErrors } from "src/hooks";

import {
  Main,
  Container,
  Header,
  Title,
  ChevronIcon,
  DividerContainer,
  Divider,
  DividerText,
  GoogleIcon,
} from "../Guest.styles";

function LoginPage(): JSX.Element {
  const { t } = useTranslation("login");

  const { clearError, getError, addError, clearAllErrors } = useErrors();

  async function handleSubmit(values: LoginFormValues): Promise<void> {
    const { email, password, isRemembered } = values;
    const { LOCAL, SESSION } = Api.persistence;

    clearAllErrors();

    Api.auth
      .setPersistence(isRemembered ? LOCAL : SESSION)
      .then(() =>
        Api.auth
          .signInWithEmailAndPassword(email, password)
          .catch((err) => addError(err.code))
      );
  }

  function signInWithGoogle(): void {
    Api.auth
      .signInWithPopup(Api.googleAuthProvider)
      .catch((err) => addError(err.code));
  }

  return (
    <Main>
      <Container>
        <Helmet>
          <title>{t("pageTitle")}</title>
        </Helmet>

        <Header>
          <Title>{t("title")}</Title>
          <Link to={ROUTES.REGISTRATION}>
            {t("toRegistration")} <ChevronIcon />
          </Link>
        </Header>

        <LoginForm
          onSubmit={handleSubmit}
          clearError={clearError}
          getError={getError}
        />

        <DividerContainer>
          <Divider />
          <DividerText>{t("divider")}</DividerText>
          <Divider />
        </DividerContainer>

        <Button type="button" variant="secondary" onClick={signInWithGoogle}>
          <GoogleIcon />
          {t("withGoogle")}
        </Button>
      </Container>
    </Main>
  );
}

export default LoginPage;
