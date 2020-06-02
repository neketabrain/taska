import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { ChangeEmailForm, ChangeEmailFormValues } from "src/components";
import { useErrors } from "src/hooks";
import { UserTypes } from "src/store";

import { Api } from "../../../../api";
import {
  ContentSection,
  Container,
  FormWrapper,
  Title,
  AlertContainer,
} from "../SettingsPage.styles";

function ChangeEmailPage(): JSX.Element {
  const { t } = useTranslation("settings");
  const dispatch = useDispatch();

  const { clearError, getError, addError, clearAllErrors } = useErrors();
  const [isSuccessful, setSuccessful] = useState(false);

  async function handleSubmit(
    values: ChangeEmailFormValues,
    resetValues: () => void
  ): Promise<void> {
    const { email } = Api.auth.currentUser || {};
    if (!email) return;

    const { email: newEmail, password } = values;

    clearAllErrors();
    setSuccessful(false);

    return Api.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) =>
        res.user?.updateEmail(newEmail).then(() => {
          dispatch({ type: UserTypes.UPDATE, payload: { email: newEmail } });
          resetValues();
          setSuccessful(true);
        })
      )
      .catch((err) => addError(err.code));
  }

  return (
    <ContentSection>
      <Container>
        <Title decreasedMargin={isSuccessful}>{t("emailPage.title")}</Title>

        {isSuccessful && (
          <AlertContainer>{t("emailPage.successful")}</AlertContainer>
        )}

        <FormWrapper>
          <ChangeEmailForm
            onSubmit={handleSubmit}
            clearError={clearError}
            getError={getError}
          />
        </FormWrapper>
      </Container>
    </ContentSection>
  );
}

export default ChangeEmailPage;
