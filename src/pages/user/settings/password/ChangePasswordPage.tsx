import React, { useCallback, useState, FC } from "react";
import { useTranslation } from "react-i18next";

import { Api } from "src/api";
import { ChangePasswordForm, ChangePasswordFormValues } from "src/components";
import { useErrors } from "src/hooks";

import {
  AlertContainer,
  Container,
  ContentSection,
  ContentWrapper,
  Title,
} from "../SettingsPage.styles";

const initialValues: ChangePasswordFormValues = {
  newPassword: "",
  oldPassword: "",
};

const ChangePasswordPage: FC = () => {
  const { t } = useTranslation("settings");

  const { addError, getError, setErrors } = useErrors();
  const [isSuccessful, setSuccessful] = useState(false);

  const handleSubmit = useCallback(
    async (values: ChangePasswordFormValues, resetValues: VoidFunction) => {
      const { email } = Api.auth.currentUser || {};
      if (!email) return;

      const { newPassword, oldPassword } = values;

      setErrors({}, true);
      setSuccessful(false);

      await Api.auth
        .signInWithEmailAndPassword(email, oldPassword)
        .then((res) =>
          res.user?.updatePassword(newPassword).then(() => {
            resetValues();
            setSuccessful(true);
          })
        )
        .catch((err) => {
          if (err?.code === "auth/weak-password") {
            addError(err?.code, "newPassword");
          } else {
            addError(err?.code, "oldPassword");
          }
          resetValues();
        });
    },
    [addError, setErrors]
  );

  return (
    <ContentSection>
      <Container>
        <Title decreasedMargin={isSuccessful}>{t("passwordPage.title")}</Title>

        {isSuccessful && (
          <AlertContainer>{t("passwordPage.successful")}</AlertContainer>
        )}

        <ContentWrapper>
          <ChangePasswordForm
            getError={getError}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            setErrors={setErrors}
          />
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
};

export default ChangePasswordPage;
