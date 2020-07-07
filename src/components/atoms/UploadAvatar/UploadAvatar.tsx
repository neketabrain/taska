import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { Api } from "src/api";
import { UserTypes } from "src/store";
import { InputOnChangeEvent } from "src/types";

import {
  Container,
  FileInput,
  PhotoIcon,
  Wrapper,
} from "./UploadAvatar.styles";
import { UploadAvatarProps } from "./UploadAvatar.types";

const UploadAvatar: FC<UploadAvatarProps> = (props) => {
  const { className, name } = props;

  const [isUploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const handleUpload = useCallback(
    (event: InputOnChangeEvent): void => {
      const file = event.target.files?.[0];
      const user = Api.auth.currentUser;

      if (!file || !user) return;

      setUploading(true);

      Api.storage
        .ref(`${user.uid}/profileAvatar/${file.name}`)
        .put(file)
        .then((res) =>
          res.ref.getDownloadURL().then((photoURL) => {
            Api.auth.currentUser?.updateProfile({ photoURL });
            dispatch({ type: UserTypes.UPDATE, payload: { photoURL } });
          })
        )
        .finally(() => setUploading(false));
    },
    [dispatch, setUploading]
  );

  return (
    <Wrapper className={className}>
      <FileInput
        accept="image/jpeg,image/png"
        disabled={isUploading}
        name={name || "avatar"}
        onChange={handleUpload}
        type="file"
      />
      <Container>
        <PhotoIcon />
      </Container>
    </Wrapper>
  );
};

export default UploadAvatar;
