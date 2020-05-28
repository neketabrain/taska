import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

import { Logo } from "src/components";
import { i18n } from "src/i18n";

import { Wrapper, Container, Button } from "./Header.styles";

function Header(): JSX.Element {
  const { t } = useTranslation("header");

  async function switchLanguage(): Promise<void> {
    const currentLanguage =
      window.localStorage.getItem("i18nextLng") || i18next.language || "en";
    const newLanguage = /ru/.test(currentLanguage) ? "en" : "ru";
    await i18n.changeLanguage(newLanguage);
  }

  return (
    <Wrapper>
      <Container>
        <Logo />
        <Button onClick={switchLanguage}>{t("switchLanguage")}</Button>
      </Container>
    </Wrapper>
  );
}

export default Header;
