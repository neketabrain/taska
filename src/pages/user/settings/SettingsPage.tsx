import React from "react";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";

import { SettingsMenu } from "src/components";

import { ROUTES } from "../../../constants";

import {
  Wrapper,
  MenuSection,
  MenuContainer,
  Title,
} from "./SettingsPage.styles";

function SettingsPage(): JSX.Element {
  const { t } = useTranslation("settings");

  return (
    <Wrapper>
      <MenuSection>
        <MenuContainer>
          <Title>{t("title")}</Title>
          <SettingsMenu />
        </MenuContainer>
      </MenuSection>

      <Switch>
        <Route path={ROUTES.SETTINGS_EMAIL} />
        <Route path={ROUTES.SETTINGS_PASSWORD} />
        <Route exact path={ROUTES.SETTINGS_PROFILE} />
        <Route exact path={ROUTES.SETTINGS_PREFERENCES} />

        <Redirect to={ROUTES.SETTINGS_EMAIL} />
      </Switch>
    </Wrapper>
  );
}

export default SettingsPage;
