import React, { useContext } from "react";

import { AuthContext } from "src/context";

import {
  Container,
  UserAvatar,
  UserName,
  UserEmail,
  Picture,
} from "./ProfileCard.styles";
import { ProfileCardProps } from "./ProfileCard.types";

function ProfileCard(props: ProfileCardProps): JSX.Element {
  const { className } = props;

  const user = useContext(AuthContext);
  const userName = user?.displayName || "";
  const userEmail = user?.email || "";
  const userAvatar = user?.photoURL;

  return (
    <Container className={className}>
      {!!userAvatar && (
        <Picture>
          <UserAvatar src={userAvatar} alt="Profile avatar" />
        </Picture>
      )}

      <UserName title={userName}>{userName}</UserName>
      <UserEmail title={userEmail}>{userEmail}</UserEmail>
    </Container>
  );
}

export default ProfileCard;
