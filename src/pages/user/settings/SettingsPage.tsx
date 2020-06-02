import loadable from "@loadable/component";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";

import { SettingsMenu } from "src/components";

import { ROUTES } from "../../../constants";

import {
  Wrapper,
  MenuSection,
  MenuContainer,
  MenuTitle,
} from "./SettingsPage.styles";

const ChangeEmailPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./email")
);

function SettingsPage(): JSX.Element {
  const { t } = useTranslation("settings");

  return (
    <Wrapper>
      <Helmet>
        <title>{t("pageTitle")}</title>
      </Helmet>

      <MenuSection>
        <MenuContainer>
          <MenuTitle>{t("title")}</MenuTitle>
          <SettingsMenu />
        </MenuContainer>
      </MenuSection>

      <Switch>
        <Route path={ROUTES.SETTINGS_EMAIL} component={ChangeEmailPage} />
        <Route path={ROUTES.SETTINGS_PASSWORD} />
        <Route exact path={ROUTES.SETTINGS_PROFILE} />
        <Route exact path={ROUTES.SETTINGS_PREFERENCES} />

        <Redirect to={ROUTES.SETTINGS_EMAIL} />
      </Switch>
    </Wrapper>
  );
}

export default SettingsPage;
