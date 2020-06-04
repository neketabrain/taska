import i18next from "i18next";
import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Switch } from "src/components";
import { i18n } from "src/i18n";

import {
  ContentSection,
  Container,
  ContentWrapper,
  Title,
  FieldContainer,
  FieldLabel,
  FieldHandler,
} from "../SettingsPage.styles";

function PreferencesPage(): JSX.Element {
  const { t } = useTranslation("settings");

  const [isRussian, setRussian] = useState(
    /ru/.test(window.localStorage.getItem("i18nextLng") || i18next.language)
  );

  const handleChangeLanguage = useCallback(async () => {
    const newLanguage = isRussian ? "en" : "ru";
    setRussian((prevState) => !prevState);

    await i18n.changeLanguage(newLanguage);
  }, [isRussian]);

  return (
    <ContentSection>
      <Container>
        <Title>{t("preferencesPage.title")}</Title>

        <ContentWrapper>
          <FieldContainer>
            <FieldLabel>{t("preferencesPage.language")}</FieldLabel>

            <FieldHandler>
              <Switch
                name="language"
                checked={isRussian}
                onChange={handleChangeLanguage}
                leftLabel={t("preferencesPage.english")}
                rightLabel={t("preferencesPage.russian")}
              />
            </FieldHandler>
          </FieldContainer>

          <FieldContainer>
            <FieldLabel>{t("preferencesPage.darkMode")}</FieldLabel>

            <FieldHandler>
              <Switch
                disabled={true}
                name="darkMode"
                leftLabel={t("preferencesPage.off")}
                rightLabel={t("preferencesPage.on")}
              />
            </FieldHandler>
          </FieldContainer>
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
}

export default PreferencesPage;
