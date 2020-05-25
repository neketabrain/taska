import React from "react";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import {
  RegistrationForm,
  RegistrationFormValues,
  Text,
  Button,
} from "src/components";

import {
  Container,
  Header,
  Title,
  LoginLink,
  ChevronIcon,
  DividerContainer,
  Divider,
  GoogleIcon,
} from "./RegistrationPage.styles";

function RegistrationPage(): JSX.Element {
  const { t } = useTranslation("registration");
  async function handleSubmit(values: RegistrationFormValues): Promise<void> {
    const { firstName, lastName, email, password } = values;
    const displayName = `${firstName} ${lastName}`;

    Api.createUserWithEmailAndPassword(email, password)
      .then((res) => res.user?.updateProfile({ displayName }))
      .catch(console.log);
  }

  function signInWithGoogle(): void {
    Api.signInWithGoogle().then(console.log).catch(console.log);
  }

  return (
    <Container>
      <Header>
        <Title>{t("title")}</Title>
        <LoginLink to="/">
          {t("toLogin")} <ChevronIcon />
        </LoginLink>
      </Header>

      <RegistrationForm onSubmit={handleSubmit} />

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
