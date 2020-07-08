import React, { useCallback, useContext, useState, FC } from "react";
import { useTranslation } from "react-i18next";

import { Switch } from "src/components";
import { ThemeContext } from "src/context";
import { i18n } from "src/i18n";
import { getLocale } from "src/utils";

import {
  Container,
  ContentSection,
  ContentWrapper,
  FieldContainer,
  FieldHandler,
  FieldLabel,
  Title,
} from "../SettingsPage.styles";

const PreferencesPage: FC = () => {
  const { t } = useTranslation("settings");

  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isRussian, setRussian] = useState(/ru/.test(getLocale()));

  const handleChangeLanguage = useCallback(async () => {
    const newLanguage = isRussian ? "en" : "ru";
    setRussian((prevState) => !prevState);

    await i18n.changeLanguage(newLanguage);
  }, [isRussian, setRussian]);

  const handleChangeTheme = useCallback(() => toggleTheme(), [toggleTheme]);

  return (
    <ContentSection>
      <Container>
        <Title>{t("preferencesPage.title")}</Title>

        <ContentWrapper>
          <FieldContainer>
            <FieldLabel>{t("preferencesPage.language")}</FieldLabel>

            <FieldHandler>
              <Switch
                checked={isRussian}
                leftLabel={t("preferencesPage.english")}
                name="language"
                onChange={handleChangeLanguage}
                rightLabel={t("preferencesPage.russian")}
              />
            </FieldHandler>
          </FieldContainer>

          <FieldContainer>
            <FieldLabel>{t("preferencesPage.darkMode")}</FieldLabel>

            <FieldHandler>
              <Switch
                checked={darkMode}
                leftLabel={t("preferencesPage.off")}
                name="darkMode"
                onChange={handleChangeTheme}
                rightLabel={t("preferencesPage.on")}
              />
            </FieldHandler>
          </FieldContainer>
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
};

export default PreferencesPage;
