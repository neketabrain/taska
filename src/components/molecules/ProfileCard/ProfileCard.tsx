import React from "react";
import { useSelector } from "react-redux";

import { UploadAvatar } from "src/components";
import { ApplicationStore } from "src/store";

import {
  Container,
  UserAvatar,
  UserName,
  UserEmail,
  Picture,
  MockAvatar,
} from "./ProfileCard.styles";
import { ProfileCardProps } from "./ProfileCard.types";

function ProfileCard(props: ProfileCardProps): JSX.Element {
  const { className } = props;

  const user = useSelector((state: ApplicationStore) => state.user);

  const userName = user?.displayName || "";
  const userEmail = user?.email || "";
  const userAvatar = user?.photoURL;

  const [firstName, lastName] = userName.split(" ");
  const avatarText = firstName[0] + lastName[0];

  return (
    <Container className={className}>
      <Picture>
        <UploadAvatar />

        {!!userAvatar && <UserAvatar src={userAvatar} alt="User avatar" />}
        {!userAvatar && <MockAvatar>{avatarText}</MockAvatar>}
      </Picture>

      <UserName title={userName}>{userName}</UserName>
      <UserEmail title={userEmail}>{userEmail}</UserEmail>
    </Container>
  );
}

export default ProfileCard;
