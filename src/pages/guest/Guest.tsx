import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { RegistrationPage } from "./registration";

function Guest(): JSX.Element {
  return (
    <Switch>
      <Route path="/registration" component={RegistrationPage} />

      <Redirect to="/login" />
    </Switch>
  );
}

export default Guest;
