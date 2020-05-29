import i18next from "i18next";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { AuthContext } from "src/context";
import { i18n } from "src/i18n";

import {
  Wrapper,
  Container,
  Button,
  MobileButton,
  HeaderLogo,
} from "./Header.styles";

function Header(): JSX.Element {
  const { t } = useTranslation("common");

  const user = useContext(AuthContext);

  async function switchLanguage(): Promise<void> {
    const currentLanguage =
      window.localStorage.getItem("i18nextLng") || i18next.language || "en";
    const newLanguage = /ru/.test(currentLanguage) ? "en" : "ru";
    await i18n.changeLanguage(newLanguage);
  }

  return (
    <Wrapper>
      <Container>
        <HeaderLogo isAuthorized={!!user} />

        {!user && (
          <>
            <Button onClick={switchLanguage}>{t("switchLanguage")}</Button>
            <MobileButton onClick={switchLanguage}>
              {t("mobileSwitchLanguage")}
            </MobileButton>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

export default Header;
