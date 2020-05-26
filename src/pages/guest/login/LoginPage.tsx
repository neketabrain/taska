import React from "react";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import { LoginForm, LoginFormValues, Text, Button, Link } from "src/components";
import { ROUTES } from "src/constants";
import { useErrors } from "src/hooks";

import {
  Container,
  Header,
  Title,
  ChevronIcon,
  DividerContainer,
  Divider,
  GoogleIcon,
} from "../Guest.styles";

function LoginPage(): JSX.Element {
  const { t } = useTranslation("login");

  const { clearError, getError, addError, clearAllErrors } = useErrors();

  async function handleSubmit(values: LoginFormValues): Promise<void> {
    const { email, password, isRemembered } = values;
    const { LOCAL, NONE } = Api.persistence;

    clearAllErrors();

    Api.auth
      .setPersistence(isRemembered ? LOCAL : NONE)
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
    <Container>
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
        <Text>{t("divider")}</Text>
        <Divider />
      </DividerContainer>

      <Button type="button" variant="secondary" onClick={signInWithGoogle}>
        <GoogleIcon />
        {t("withGoogle")}
      </Button>
    </Container>
  );
}

export default LoginPage;
