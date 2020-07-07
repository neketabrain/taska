import React, { useCallback, useMemo, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Input, UploadAvatar } from "src/components";
import { useForm } from "src/hooks";
import { ApplicationStore } from "src/store";
import { OnSubmitEvent } from "src/types";
import { getUserInitials } from "src/utils";

import {
  AvatarContainer,
  AvatarLabel,
  FlexContainer,
  Form,
  InputContainer,
  InputsContainer,
  MockAvatar,
  Picture,
  SubmitButton,
  UserAvatar,
} from "./EditProfileForm.styles";
import { EditProfileFormProps } from "./EditProfileForm.types";

const EditProfileForm: FC<EditProfileFormProps> = (props) => {
  const { className, initialValues, onSubmit } = props;

  const { t } = useTranslation("settings");
  const { t: tCommon } = useTranslation("common");

  const { onChange, values } = useForm(initialValues);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (event: OnSubmitEvent) => {
      event.preventDefault();

      setSubmitting(true);
      await onSubmit(values);
      setSubmitting(false);
    },
    [onSubmit, setSubmitting, values]
  );

  const user = useSelector((state: ApplicationStore) => state.user);
  const userAvatar = useMemo(() => user?.photoURL, [user]);
  const userName = useMemo(() => user?.displayName || "", [user]);
  const userInitials = useMemo(() => getUserInitials(userName), [userName]);

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <FlexContainer>
        <AvatarContainer>
          <AvatarLabel htmlFor="profileAvatar">
            {t("profilePage.form.photoURL")}
          </AvatarLabel>

          <Picture>
            <UploadAvatar name="profileAvatar" />

            {!!userAvatar && (
              <UserAvatar alt={tCommon("imageAlts.avatar")} src={userAvatar} />
            )}
            {!userAvatar && <MockAvatar>{userInitials}</MockAvatar>}
          </Picture>
        </AvatarContainer>

        <InputsContainer>
          <InputContainer>
            <Input
              disabled={isSubmitting}
              label={t("profilePage.form.firstName")}
              name="firstName"
              onChange={onChange}
              required={true}
              type="text"
              value={values.firstName}
            />
          </InputContainer>

          <InputContainer>
            <Input
              disabled={isSubmitting}
              label={t("profilePage.form.lastName")}
              name="lastName"
              onChange={onChange}
              required={true}
              type="text"
              value={values.lastName}
            />
          </InputContainer>
        </InputsContainer>
      </FlexContainer>

      <SubmitButton disabled={isSubmitting} type="submit" variant="primary">
        {t("profilePage.form.submit")}
      </SubmitButton>
    </Form>
  );
};

export default EditProfileForm;
