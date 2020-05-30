import loadable from "@loadable/component";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Api } from "src/api";
import { Header, PageWrapper } from "src/components";
import { ApplicationStore, UserTypes } from "src/store";

const Guest = loadable(() => import(/* webpackPrefetch: true */ "./guest"));
const User = loadable(() => import(/* webpackPrefetch: true */ "./user"));

function Router(): JSX.Element {
  const [isFetching, setFetching] = useState(true);

  const dispatch = useDispatch();
  const { user } = useSelector((state: ApplicationStore) => state);

  useEffect(() => {
    Api.auth.onAuthStateChanged((user) => {
      // eslint-disable-next-line no-restricted-globals
      if (!/registration/.test(location.pathname)) {
        dispatch({ type: UserTypes.UPDATE, payload: user });
      }

      setFetching(false);
    });
  }, [dispatch]);

  if (isFetching) {
    return <></>;
  }

  return (
    <>
      <Header />

      <PageWrapper>
        <BrowserRouter>
          {!!user && <User />}
          {!user && <Guest />}
        </BrowserRouter>
      </PageWrapper>
    </>
  );
}

export default Router;
