import React, { useMemo, FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { UploadAvatar } from "src/components";
import { ApplicationStore } from "src/store";
import { ClassName } from "src/types";
import { getUserInitials } from "src/utils";

import {
  Container,
  MockAvatar,
  Picture,
  UserAvatar,
  UserName,
  UserEmail,
} from "./ProfileCard.styles";

const ProfileCard: FC<ClassName> = (props) => {
  const { className } = props;

  const { t } = useTranslation("common");

  const user = useSelector((state: ApplicationStore) => state.user);
  const userAvatar = useMemo(() => user?.photoURL, [user]);
  const userEmail = useMemo(() => user?.email || "", [user]);
  const userName = useMemo(() => user?.displayName || "", [user]);
  const userInitials = useMemo(() => getUserInitials(userName), [userName]);

  return (
    <Container className={className}>
      <Picture>
        <UploadAvatar />

        {!!userAvatar && (
          <UserAvatar alt={t("imageAlts.avatar")} src={userAvatar} />
        )}
        {!userAvatar && <MockAvatar>{userInitials}</MockAvatar>}
      </Picture>

      <UserName title={userName}>{userName}</UserName>
      <UserEmail title={userEmail}>{userEmail}</UserEmail>
    </Container>
  );
};

export default ProfileCard;
