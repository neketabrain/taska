import loadable from "@loadable/component";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";

import { SettingsMenu } from "src/components";

import { ROUTES } from "../../../constants";

import { Wrapper, MenuSection, Container, Title } from "./SettingsPage.styles";

const ChangeEmailPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./email")
);
const ChangePasswordPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./password")
);
const ProfilePage = loadable(() =>
  import(/* webpackPrefetch: true */ "./profile")
);
const PreferencesPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./preferences")
);

function SettingsPage(): JSX.Element {
  const { t } = useTranslation("settings");

  return (
    <Wrapper>
      <Helmet>
        <title>{t("pageTitle")}</title>
      </Helmet>

      <MenuSection>
        <Container>
          <Title>{t("title")}</Title>
          <SettingsMenu />
        </Container>
      </MenuSection>

      <Switch>
        <Route path={ROUTES.SETTINGS_EMAIL} component={ChangeEmailPage} />
        <Route path={ROUTES.SETTINGS_PASSWORD} component={ChangePasswordPage} />
        <Route exact path={ROUTES.SETTINGS_PROFILE} component={ProfilePage} />
        <Route
          exact
          path={ROUTES.SETTINGS_PREFERENCES}
          component={PreferencesPage}
        />

        <Redirect to={ROUTES.SETTINGS_EMAIL} />
      </Switch>
    </Wrapper>
  );
}

export default SettingsPage;
