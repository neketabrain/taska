import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { EditProfileForm, EditProfileFormValues } from "src/components";
import { ApplicationStore, UserTypes } from "src/store";

import { Api } from "../../../../api";
import {
  ContentSection,
  Container,
  ContentWrapper,
  Title,
  AlertContainer,
} from "../SettingsPage.styles";

function ProfilePage(): JSX.Element {
  const { t } = useTranslation("settings");

  const dispatch = useDispatch();
  const user = useSelector((state: ApplicationStore) => state.user);

  const [isSuccessful, setSuccessful] = useState(false);

  const [firstName, lastName] = user?.displayName?.split(" ") || [];

  const initialState: EditProfileFormValues = {
    firstName: firstName || "",
    lastName: lastName || "",
  };

  async function handleSubmit(values: EditProfileFormValues): Promise<void> {
    const { currentUser } = Api.auth;
    if (!currentUser) return;

    const { firstName, lastName } = values;
    const displayName = `${firstName} ${lastName}`;

    setSuccessful(false);

    return currentUser.updateProfile({ displayName }).then(() => {
      dispatch({ type: UserTypes.UPDATE, payload: { displayName } });
      setSuccessful(true);
    });
  }

  return (
    <ContentSection>
      <Container>
        <Title decreasedMargin={isSuccessful}>{t("profilePage.title")}</Title>

        {isSuccessful && (
          <AlertContainer>{t("profilePage.successful")}</AlertContainer>
        )}

        <ContentWrapper>
          <EditProfileForm
            initialState={initialState}
            onSubmit={handleSubmit}
          />
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
}

export default ProfilePage;
