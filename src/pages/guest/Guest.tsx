import loadable from "@loadable/component";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "src/constants";

const LoginPage = loadable(() => import(/* webpackPrefetch: true */ "./login"));
const RegistrationPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./registration")
);
const ResetPage = loadable(() => import(/* webpackPrefetch: true */ "./reset"));

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
