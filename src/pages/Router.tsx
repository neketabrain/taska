import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import { Header, PageWrapper } from "src/components";
import { AuthContext } from "src/context";

import { Guest } from "./guest";
import { User } from "./user";

function Router(): JSX.Element {
  const profile = useContext(AuthContext);

  return (
    <>
      <Header />

      <PageWrapper>
        <BrowserRouter>
          {!!profile && <User />}
          {!profile && <Guest />}
        </BrowserRouter>
      </PageWrapper>
    </>
  );
}

export default Router;
