import React, { useEffect } from "react";

import { Api } from "src/api";

function LogoutPage(): JSX.Element {
  useEffect(() => {
    Api.auth.signOut();
  }, []);
  return <></>;
}

export default LogoutPage;
