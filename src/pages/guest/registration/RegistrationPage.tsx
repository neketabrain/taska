import React, { useCallback, FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Api } from "src/api";
import {
  Button,
  Link,
  RegistrationForm,
  RegistrationFormValues,
} from "src/components";
import { ROUTES } from "src/constants";
import { useErrors } from "src/hooks";
import { UserTypes } from "src/store";

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

const initialValues: RegistrationFormValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

const RegistrationPage: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("registration");

  const { addError, getError, setErrors } = useErrors();

  const handleSubmit = useCallback(
    async (values: RegistrationFormValues, resetValues: VoidFunction) => {
      const { email, firstName, lastName, password } = values;
      const displayName = `${firstName} ${lastName}`;

      setErrors({}, true);

      await Api.auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) =>
          res.user
            ?.updateProfile({ displayName })
            .then(() =>
              dispatch({ type: UserTypes.UPDATE, payload: { displayName } })
            )
        )
        .catch((err) => {
          addError(err?.code);
          resetValues();
        });
    },
    [addError, dispatch, setErrors]
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
          <Link to={ROUTES.LOGIN}>
            {t("toLogin")} <ChevronIcon />
          </Link>
        </Header>

        <RegistrationForm
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

        <Button onClick={signInWithGoogle} type="button" variant="secondary">
          <GoogleIcon />
          {t("withGoogle")}
        </Button>
      </Container>
    </Main>
  );
};

export default RegistrationPage;
