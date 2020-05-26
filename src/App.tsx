import React from "react";
import { ThemeProvider } from "styled-components";

import "./i18n";

import { defaultTheme, GlobalStyles } from "./assets";
import { AuthProvider } from "./context";
import Router from "./pages";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
