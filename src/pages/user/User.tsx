import React from "react";
import { Helmet } from "react-helmet-async";
import { Switch, Route, Redirect } from "react-router-dom";

import { Api } from "src/api";
import { Box, Button, ProfileCard } from "src/components";
import { ROUTES } from "src/constants";

import { Wrapper, LeftSideContainer } from "./User.styles";

function LogoutComponent(): JSX.Element {
  async function logout(): Promise<void> {
    await Api.auth.signOut();
  }

  return (
    <Box width={128}>
      <Button variant="primary" onClick={logout}>
        Log out
      </Button>
    </Box>
  );
}

function User(): JSX.Element {
  return (
    <Wrapper>
      <Helmet>
        <title>Taska</title>
      </Helmet>

      <LeftSideContainer>
        <ProfileCard />
      </LeftSideContainer>

      <Switch>
        <Route exact path={ROUTES.ROOT} component={LogoutComponent} />

        <Redirect to={ROUTES.ROOT} />
      </Switch>
    </Wrapper>
  );
}

export default User;
