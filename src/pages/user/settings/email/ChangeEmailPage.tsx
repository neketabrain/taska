import React, { useCallback, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Api } from "src/api";
import { ChangeEmailForm, ChangeEmailFormValues } from "src/components";
import { useErrors } from "src/hooks";
import { UserTypes } from "src/store";

import {
  AlertContainer,
  Container,
  ContentSection,
  ContentWrapper,
  Title,
} from "../SettingsPage.styles";

const initialValues: ChangeEmailFormValues = {
  email: "",
  password: "",
};

const ChangeEmailPage: FC = () => {
  const { t } = useTranslation("settings");

  const dispatch = useDispatch();

  const { addError, getError, setErrors } = useErrors();
  const [isSuccessful, setSuccessful] = useState(false);

  const handleSubmit = useCallback(
    async (values: ChangeEmailFormValues, resetValues: VoidFunction) => {
      const { email } = Api.auth.currentUser || {};
      if (!email) return;

      const { email: newEmail, password } = values;

      setErrors({}, true);
      setSuccessful(false);

      Api.auth
        .signInWithEmailAndPassword(email, password)
        .then((res) =>
          res.user?.updateEmail(newEmail).then(() => {
            dispatch({ type: UserTypes.UPDATE, payload: { email: newEmail } });
            resetValues();
            setSuccessful(true);
          })
        )
        .catch((err) => {
          addError(err?.code);
          resetValues();
        });
    },
    [addError, dispatch, setErrors]
  );

  return (
    <ContentSection>
      <Container>
        <Title decreasedMargin={isSuccessful}>{t("emailPage.title")}</Title>

        {isSuccessful && (
          <AlertContainer>{t("emailPage.successful")}</AlertContainer>
        )}

        <ContentWrapper>
          <ChangeEmailForm
            getError={getError}
            onSubmit={handleSubmit}
            initialValues={initialValues}
            setErrors={setErrors}
          />
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
};

export default ChangeEmailPage;
