import React from "react";
import { Helmet } from "react-helmet-async";
import { Switch, Route, Redirect } from "react-router-dom";

import { ProfileCard } from "src/components";
import { ROUTES } from "src/constants";

import { Wrapper, LeftSideContainer, Menu } from "./User.styles";

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
        <Route exact path={ROUTES.TASKS} />
        <Route exact path={ROUTES.NEW_TASK} />
        <Route exact path={ROUTES.SETTINGS} />
        <Route exact path={ROUTES.LOGOUT} />

        <Redirect to={ROUTES.TASKS} />
      </Switch>
    </Wrapper>
  );
}

export default User;
