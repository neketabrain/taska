import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "src/constants";

import { LoginPage } from "./login";
import { RegistrationPage } from "./registration";
import { ResetPage } from "./reset";

function Guest(): JSX.Element {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LoginPage} />
      <Route exact path={ROUTES.REGISTRATION} component={RegistrationPage} />
      <Route exact path={ROUTES.RESET} component={ResetPage} />

      <Redirect to={ROUTES.LOGIN} />
    </Switch>
  );
}

export default Guest;
