import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header, PageWrapper } from "src/components";

import { Guest } from "./guest";

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />

      <PageWrapper>
        <Guest />
      </PageWrapper>
    </BrowserRouter>
  );
}

export default Router;
