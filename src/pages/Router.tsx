import loadable from "@loadable/component";
import React, { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Api } from "src/api";
import { Header, PageWrapper } from "src/components";
import { UserTypes, ApplicationStore } from "src/store";

const Guest = loadable(() => import(/* webpackPrefetch: true */ "./guest"));
const User = loadable(() => import(/* webpackPrefetch: true */ "./user"));

const Router: FC = () => {
  const [isFetching, setFetching] = useState(true);

  const dispatch = useDispatch();
  const { user } = useSelector((state: ApplicationStore) => state);

  useEffect(() => {
    Api.auth.onAuthStateChanged((user) => {
      dispatch({ type: UserTypes.SET, payload: user });
      setFetching(false);
    });
  }, [dispatch, setFetching]);

  if (isFetching) {
    return <></>;
  }

  return (
    <>
      <Header />

      <PageWrapper>
        <BrowserRouter>
          {!user && <Guest />}
          {!!user && <User />}
        </BrowserRouter>
      </PageWrapper>
    </>
  );
};

export default Router;
