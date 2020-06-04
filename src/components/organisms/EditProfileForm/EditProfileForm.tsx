import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Input, UploadAvatar } from "src/components";
import { useForm } from "src/hooks";
import { ApplicationStore } from "src/store";

import {
  Form,
  FlexContainer,
  InputContainer,
  SubmitButton,
  InputsContainer,
  AvatarContainer,
  Picture,
  AvatarLabel,
  MockAvatar,
  UserAvatar,
} from "./EditProfileForm.styles";
import { EditProfileFormProps } from "./EditProfileForm.types";

function EditProfileForm(props: EditProfileFormProps): JSX.Element {
  const { onSubmit, initialState } = props;

  const { t } = useTranslation("settings");

  const user = useSelector((state: ApplicationStore) => state.user);

  const { values, onChange } = useForm(initialState);
  const [isSubmitting, setSubmitting] = useState(false);

  const userName = user?.displayName || "";
  const userAvatar = user?.photoURL;

  const [firstName = [""], lastName = [""]] = userName.split(" ");
  const avatarText = firstName[0] + lastName[0];

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FlexContainer>
        <AvatarContainer>
          <AvatarLabel htmlFor="profileAvatar">
            {t("profilePage.form.photoURL")}
          </AvatarLabel>

          <Picture>
            <UploadAvatar name="profileAvatar" />

            {!!userAvatar && <UserAvatar src={userAvatar} alt="User avatar" />}
            {!userAvatar && <MockAvatar>{avatarText}</MockAvatar>}
          </Picture>
        </AvatarContainer>

        <InputsContainer>
          <InputContainer>
            <Input
              required
              label={t("profilePage.form.firstName")}
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </InputContainer>

          <InputContainer>
            <Input
              required
              label={t("profilePage.form.lastName")}
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </InputContainer>
        </InputsContainer>
      </FlexContainer>

      <SubmitButton variant="primary" type="submit" disabled={isSubmitting}>
        {t("profilePage.form.submit")}
      </SubmitButton>
    </Form>
  );
}

export default EditProfileForm;
