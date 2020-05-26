import React from "react";
import { ThemeProvider } from "styled-components";

import "./i18n";

import { Theme, GlobalStyles } from "./assets";
import { AuthProvider } from "./context";
import { Router } from "./pages";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme.defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
