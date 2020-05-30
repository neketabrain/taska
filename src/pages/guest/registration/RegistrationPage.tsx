import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Api } from "src/api";
import {
  RegistrationForm,
  RegistrationFormValues,
  Button,
  Link,
} from "src/components";
import { ROUTES } from "src/constants";
import { useErrors } from "src/hooks";
import { UserTypes } from "src/store";

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

function RegistrationPage(): JSX.Element {
  const dispatch = useDispatch();
  const { t } = useTranslation("registration");

  const { clearError, getError, addError, clearAllErrors } = useErrors();

  async function handleSubmit(values: RegistrationFormValues): Promise<void> {
    const { firstName, lastName, email, password } = values;
    const displayName = `${firstName} ${lastName}`;

    clearAllErrors();

    Api.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) =>
        res.user
          ?.updateProfile({ displayName })
          .then(() =>
            dispatch({ type: UserTypes.UPDATE, payload: { displayName } })
          )
      )
      .catch((err) => addError(err.code));
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

export default RegistrationPage;
