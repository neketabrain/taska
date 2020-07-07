import React, { useCallback, FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { i18n } from "src/i18n";
import { ApplicationStore } from "src/store";
import { ClassName } from "src/types";
import { getLocale } from "src/utils";

import {
  Button,
  Container,
  HeaderLogo,
  MobileButton,
  Wrapper,
} from "./Header.styles";

const Header: FC<ClassName> = (props) => {
  const { className } = props;

  const { t } = useTranslation("common");

  const { user } = useSelector((state: ApplicationStore) => state);

  const switchLanguage = useCallback(async () => {
    const newLanguage = /ru/gim.test(getLocale()) ? "en" : "ru";
    await i18n.changeLanguage(newLanguage);
  }, []);

  return (
    <Wrapper className={className}>
      <Container>
        <HeaderLogo isAuthorized={!!user?.uid} />

        {!user?.uid && (
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
};

export default Header;
