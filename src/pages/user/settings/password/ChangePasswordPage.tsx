import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { ChangePasswordForm, ChangePasswordFormValues } from "src/components";
import { useErrors } from "src/hooks";

import { Api } from "../../../../api";
import {
  ContentSection,
  Container,
  ContentWrapper,
  Title,
  AlertContainer,
} from "../SettingsPage.styles";

function ChangePasswordPage(): JSX.Element {
  const { t } = useTranslation("settings");

  const { clearError, getError, addError, clearAllErrors } = useErrors();
  const [isSuccessful, setSuccessful] = useState(false);

  async function handleSubmit(
    values: ChangePasswordFormValues,
    resetValues: () => void
  ): Promise<void> {
    const { email } = Api.auth.currentUser || {};
    if (!email) return;

    const { oldPassword, newPassword } = values;

    clearAllErrors();
    setSuccessful(false);

    return Api.auth
      .signInWithEmailAndPassword(email, oldPassword)
      .then((res) =>
        res.user?.updatePassword(newPassword).then(() => {
          resetValues();
          setSuccessful(true);
        })
      )
      .catch(({ code }) => {
        if (code === "auth/weak-password") {
          addError(code, "newPassword");
        } else {
          addError(code, "oldPassword");
        }
      });
  }

  return (
    <ContentSection>
      <Container>
        <Title decreasedMargin={isSuccessful}>{t("passwordPage.title")}</Title>

        {isSuccessful && (
          <AlertContainer>{t("passwordPage.successful")}</AlertContainer>
        )}

        <ContentWrapper>
          <ChangePasswordForm
            onSubmit={handleSubmit}
            clearError={clearError}
            getError={getError}
          />
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
}

export default ChangePasswordPage;
