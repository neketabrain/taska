import React from "react";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import { LoginForm, LoginFormValues, Text, Button, Link } from "src/components";
import { ROUTES } from "src/constants";

import {
  Container,
  Header,
  Title,
  ChevronIcon,
  DividerContainer,
  Divider,
  GoogleIcon,
} from "../Guest.styles";

function RegistrationPage(): JSX.Element {
  const { t } = useTranslation("login");

  async function handleSubmit(values: LoginFormValues): Promise<void> {
    const { email, password, isRemembered } = values;
    const { LOCAL, NONE } = Api.persistence;

    Api.auth
      .setPersistence(isRemembered ? LOCAL : NONE)
      .then(() =>
        Api.auth
          .signInWithEmailAndPassword(email, password)
          .then(console.log)
          .catch(console.log)
      );
  }

  function signInWithGoogle(): void {
    Api.auth
      .signInWithPopup(Api.googleAuthProvider)
      .then(console.log)
      .catch(console.log);
  }

  return (
    <Container>
      <Header>
        <Title>{t("title")}</Title>
        <Link to={ROUTES.REGISTRATION}>
          {t("toRegistration")} <ChevronIcon />
        </Link>
      </Header>

      <LoginForm onSubmit={handleSubmit} />

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

export default RegistrationPage;
