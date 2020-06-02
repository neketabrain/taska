import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Card, ChangeEmailForm, ChangeEmailFormValues } from "src/components";
import { useErrors } from "src/hooks";
import { UserTypes } from "src/store";

import { Api } from "../../../../api";
import { ContentSection, Title } from "../SettingsPage.styles";

function ChangeEmailPage(): JSX.Element {
  const { t } = useTranslation("settings");
  const dispatch = useDispatch();

  const { clearError, getError, addError, clearAllErrors } = useErrors();

  async function handleSubmit(values: ChangeEmailFormValues): Promise<void> {
    const { email } = Api.auth.currentUser || {};
    if (!email) return;

    const { email: newEmail, password } = values;

    clearAllErrors();

    return Api.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) =>
        res.user?.updateEmail(newEmail).then(() => {
          dispatch({ type: UserTypes.UPDATE, payload: { email: newEmail } });
        })
      )
      .catch((err) => addError(err.code));
  }

  return (
    <ContentSection>
      <Card>
        <Title>{t("emailPage.title")}</Title>

        <ChangeEmailForm
          onSubmit={handleSubmit}
          clearError={clearError}
          getError={getError}
        />
      </Card>
    </ContentSection>
  );
}

export default ChangeEmailPage;
