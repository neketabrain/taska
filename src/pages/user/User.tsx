import loadable from "@loadable/component";
import React, { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Redirect, Route, Switch } from "react-router-dom";

import { ProfileCard } from "src/components";
import { ROUTES } from "src/constants";

import { LeftSideContainer, Menu, Wrapper } from "./User.styles";

const LogoutPage = loadable(
  () => import(/* webpackPrefetch: true */ "./logout")
);
const SettingsPage = loadable(
  () => import(/* webpackPrefetch: true */ "./settings")
);
const TasksPage = loadable(() => import(/* webpackPrefetch: true */ "./tasks"));

const User: FC = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Taska</title>
      </Helmet>

      <LeftSideContainer>
        <ProfileCard />
        <Menu />
      </LeftSideContainer>

      <Switch>
        <Route component={TasksPage} path={ROUTES.TASKS} />
        <Route component={SettingsPage} path={ROUTES.SETTINGS} />
        <Route component={LogoutPage} exact={true} path={ROUTES.LOGOUT} />

        <Redirect to={ROUTES.TASKS} />
      </Switch>
    </Wrapper>
  );
};

export default User;
