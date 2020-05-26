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

function RegistrationPage(): JSX.Element {
  const { t } = useTranslation("registration");

  const { clearError, getError, addError, clearAllErrors } = useErrors();

  async function handleSubmit(values: RegistrationFormValues): Promise<void> {
    const { firstName, lastName, email, password } = values;
    const displayName = `${firstName} ${lastName}`;

    clearAllErrors();

    Api.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => res.user?.updateProfile({ displayName }))
      .catch((err) => addError(err.code));
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
        <Link to={ROUTES.LOGIN}>
          {t("toLogin")} <ChevronIcon />
        </Link>
      </Header>

      <RegistrationForm
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

export default RegistrationPage;
