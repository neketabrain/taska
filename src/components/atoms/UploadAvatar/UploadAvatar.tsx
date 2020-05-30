import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Api } from "src/api";
import { UserTypes } from "src/store";

import {
  Wrapper,
  Container,
  FileInput,
  PhotoIcon,
} from "./UploadAvatar.styles";

function UploadAvatar(): JSX.Element {
  const [isUploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  function handleUpload(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const user = Api.auth.currentUser;

    Api.storage
      .ref(`${user}/profilePicture/${file.name}`)
      .put(file)
      .then((res) =>
        res.ref.getDownloadURL().then((photoURL) => {
          Api.auth.currentUser?.updateProfile({ photoURL });
          dispatch({ type: UserTypes.UPDATE, payload: { photoURL } });
        })
      )
      .finally(() => setUploading(false));
  }

  return (
    <Wrapper>
      <FileInput
        type="file"
        name="avatar"
        accept="image/jpeg,image/png"
        onChange={handleUpload}
        disabled={isUploading}
      />
      <Container>
        <PhotoIcon />
      </Container>
    </Wrapper>
  );
}

export default UploadAvatar;
