import loadable from "@loadable/component";
import React, { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Redirect, Route, Switch } from "react-router-dom";

import { SettingsMenu } from "src/components";

import { ROUTES } from "../../../constants";

import {
  Container,
  DesktopContainer,
  MenuSection,
  MobileContainer,
  Title,
} from "./SettingsPage.styles";

const ChangeEmailPage = loadable(
  () => import(/* webpackPrefetch: true */ "./email")
);
const ChangePasswordPage = loadable(
  () => import(/* webpackPrefetch: true */ "./password")
);
const PreferencesPage = loadable(
  () => import(/* webpackPrefetch: true */ "./preferences")
);
const ProfilePage = loadable(
  () => import(/* webpackPrefetch: true */ "./profile")
);

const SettingsPage: FC = () => {
  const { t } = useTranslation("settings");

  return (
    <>
      <Helmet>
        <title>{t("pageTitle")}</title>
      </Helmet>

      <DesktopContainer>
        <MenuSection>
          <Container>
            <Title>{t("title")}</Title>
            <SettingsMenu />
          </Container>
        </MenuSection>

        <Switch>
          <Route component={ChangeEmailPage} path={ROUTES.SETTINGS_EMAIL} />
          <Route
            component={ChangePasswordPage}
            path={ROUTES.SETTINGS_PASSWORD}
          />
          <Route
            component={ProfilePage}
            exact={true}
            path={ROUTES.SETTINGS_PROFILE}
          />
          <Route
            component={PreferencesPage}
            exact={true}
            path={ROUTES.SETTINGS_PREFERENCES}
          />

          <Redirect to={ROUTES.SETTINGS} />
        </Switch>
      </DesktopContainer>

      <MobileContainer>
        <Switch>
          <Route exact={true} path={ROUTES.SETTINGS}>
            <MenuSection>
              <Container>
                <Title>{t("title")}</Title>
                <SettingsMenu />
              </Container>
            </MenuSection>
          </Route>
          <Route
            exact={true}
            component={ChangeEmailPage}
            path={ROUTES.SETTINGS_EMAIL}
          />
          <Route
            exact={true}
            component={ChangePasswordPage}
            path={ROUTES.SETTINGS_PASSWORD}
          />
          <Route
            component={ProfilePage}
            exact={true}
            path={ROUTES.SETTINGS_PROFILE}
          />
          <Route
            component={PreferencesPage}
            exact={true}
            path={ROUTES.SETTINGS_PREFERENCES}
          />

          <Redirect to={ROUTES.SETTINGS} />
        </Switch>
      </MobileContainer>
    </>
  );
};

export default SettingsPage;
