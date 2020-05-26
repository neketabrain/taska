import { User } from "firebase/app";
import React, { useEffect, useState, createContext, ReactElement } from "react";

import { Api } from "src/api";

export const AuthContext = createContext<User | null>(null);

export function AuthProvider(props: { children: ReactElement }): JSX.Element {
  const { children } = props;

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    Api.auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setFetching(false);
    });
  }, []);

  if (isFetching) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
}
