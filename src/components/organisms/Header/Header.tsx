import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { i18n } from "src/i18n";
import { ApplicationStore } from "src/store";

import {
  Wrapper,
  Container,
  Button,
  MobileButton,
  HeaderLogo,
} from "./Header.styles";

function Header(): JSX.Element {
  const { t } = useTranslation("common");

  const { user } = useSelector((state: ApplicationStore) => state);

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
