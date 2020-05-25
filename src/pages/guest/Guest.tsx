import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "src/constants";

import { RegistrationPage } from "./registration";

function Guest(): JSX.Element {
  return (
    <Switch>
      <Route path={ROUTES.REGISTRATION} component={RegistrationPage} />

      <Redirect to={ROUTES.REGISTRATION} />
    </Switch>
  );
}

export default Guest;
