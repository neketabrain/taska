import loadable from "@loadable/component";
import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { ROUTES } from "src/constants";

const LoginPage = loadable(() => import(/* webpackPrefetch: true */ "./login"));
const RegistrationPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./registration")
);
const ResetPage = loadable(() => import(/* webpackPrefetch: true */ "./reset"));

const Guest: FC = () => {
  return (
    <Switch>
      <Route component={LoginPage} exact={true} path={ROUTES.LOGIN} />
      <Route
        component={RegistrationPage}
        exact={true}
        path={ROUTES.REGISTRATION}
      />
      <Route component={ResetPage} exact={true} path={ROUTES.RESET} />

      <Redirect to={ROUTES.LOGIN} />
    </Switch>
  );
};

export default Guest;
