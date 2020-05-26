import React from "react";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import {
  RegistrationForm,
  RegistrationFormValues,
  Text,
  Button,
  Link,
} from "src/components";
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
  const { t } = useTranslation("registration");

  async function handleSubmit(values: RegistrationFormValues): Promise<void> {
    const { firstName, lastName, email, password } = values;
    const displayName = `${firstName} ${lastName}`;

    Api.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => res.user?.updateProfile({ displayName }))
      .catch(console.log);
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
        <Link to={ROUTES.LOGIN}>
          {t("toLogin")} <ChevronIcon />
        </Link>
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
