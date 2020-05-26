import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Api } from "src/api";
import { Button } from "src/components";
import { ROUTES } from "src/constants";

function LogoutComponent(): JSX.Element {
  async function logout(): Promise<void> {
    await Api.auth.signOut();
  }

  return (
    <Button variant="primary" onClick={logout}>
      Log out
    </Button>
  );
}

function User(): JSX.Element {
  return (
    <Switch>
      <Route exact path={ROUTES.ROOT} component={LogoutComponent} />

      <Redirect to={ROUTES.ROOT} />
    </Switch>
  );
}

export default User;
