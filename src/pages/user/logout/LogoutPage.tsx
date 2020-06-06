import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Api } from "src/api";
import { TasksTypes } from "src/store";

function LogoutPage(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    Api.auth.signOut().then(() => dispatch({ type: TasksTypes.CLEAN }));
  }, [dispatch]);
  return <></>;
}

export default LogoutPage;
