import loadable from "@loadable/component";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Switch, Route, Redirect } from "react-router-dom";

import { ProfileCard } from "src/components";
import { ROUTES } from "src/constants";

import { Wrapper, LeftSideContainer, Menu } from "./User.styles";

const TasksPage = loadable(() => import(/* webpackPrefetch: true */ "./tasks"));
const SettingsPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./settings")
);
const LogoutPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./logout")
);

function User(): JSX.Element {
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
        <Route path={ROUTES.TASKS} component={TasksPage} />
        <Route path={ROUTES.SETTINGS} component={SettingsPage} />
        <Route exact path={ROUTES.LOGOUT} component={LogoutPage} />

        <Redirect to={ROUTES.TASKS} />
      </Switch>
    </Wrapper>
  );
}

export default User;
