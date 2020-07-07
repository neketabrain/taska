import React, { useCallback, FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import { Button, Link, LoginForm, LoginFormValues } from "src/components";
import { ROUTES } from "src/constants";
import { useErrors } from "src/hooks";

import {
  ChevronIcon,
  Container,
  Divider,
  DividerContainer,
  DividerText,
  GoogleIcon,
  Header,
  Main,
  Title,
} from "../Guest.styles";

const initialValues: LoginFormValues = {
  email: "",
  isRemembered: false,
  password: "",
};

const LoginPage: FC = () => {
  const { t } = useTranslation("login");

  const { addError, getError, setErrors } = useErrors();

  const handleSubmit = useCallback(
    async (values: LoginFormValues, resetValues: VoidFunction) => {
      const { email, isRemembered, password } = values;
      const { LOCAL, SESSION } = Api.persistence;

      setErrors({}, true);

      await Api.auth.setPersistence(isRemembered ? LOCAL : SESSION).then(() =>
        Api.auth.signInWithEmailAndPassword(email, password).catch((err) => {
          addError(err?.code);
          resetValues();
        })
      );
    },
    [addError, setErrors]
  );

  const signInWithGoogle = useCallback(
    () =>
      Api.auth
        .signInWithPopup(Api.googleAuthProvider)
        .catch((err) => addError(err.code)),
    [addError]
  );

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
          getError={getError}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          setErrors={setErrors}
        />

        <DividerContainer>
          <Divider />
          <DividerText>{t("divider")}</DividerText>
          <Divider />
        </DividerContainer>

        <Button onClick={signInWithGoogle} type="button" variant="basic">
          <GoogleIcon />
          {t("withGoogle")}
        </Button>
      </Container>
    </Main>
  );
};

export default LoginPage;
