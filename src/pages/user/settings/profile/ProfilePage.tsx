import React, { useCallback, useMemo, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { Api } from "src/api";
import { EditProfileForm, EditProfileFormValues } from "src/components";
import { ApplicationStore, UserTypes } from "src/store";

import {
  AlertContainer,
  Container,
  ContentSection,
  ContentWrapper,
  Title,
} from "../SettingsPage.styles";

const ProfilePage: FC = () => {
  const { t } = useTranslation("settings");

  const dispatch = useDispatch();
  const user = useSelector((state: ApplicationStore) => state.user);

  const [isSuccessful, setSuccessful] = useState(false);

  const [firstName, lastName] = user?.displayName?.split(" ") || [];

  const initialValues: EditProfileFormValues = useMemo(
    () => ({
      firstName: firstName || "",
      lastName: lastName || "",
    }),
    [firstName, lastName]
  );

  const handleSubmit = useCallback(
    async (values: EditProfileFormValues) => {
      const { currentUser } = Api.auth;
      if (!currentUser) return;

      const { firstName, lastName } = values;
      const displayName = `${firstName} ${lastName}`;

      setSuccessful(false);

      await currentUser.updateProfile({ displayName }).then(() => {
        dispatch({ type: UserTypes.UPDATE, payload: { displayName } });
        setSuccessful(true);
      });
    },
    [dispatch, setSuccessful]
  );

  return (
    <ContentSection>
      <Container>
        <Title decreasedMargin={isSuccessful}>{t("profilePage.title")}</Title>

        {isSuccessful && (
          <AlertContainer>{t("profilePage.successful")}</AlertContainer>
        )}

        <ContentWrapper>
          <EditProfileForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
};

export default ProfilePage;
