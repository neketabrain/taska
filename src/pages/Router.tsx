import loadable from "@loadable/component";
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import { Header, PageWrapper } from "src/components";
import { AuthContext } from "src/context";

const Guest = loadable(() => import("./guest"));
const User = loadable(() => import("./user"));

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
