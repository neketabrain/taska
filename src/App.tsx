import React from "react";
import { ThemeProvider } from "styled-components";

import "./i18n";

import { Theme, GlobalStyles } from "./assets";
import { Router } from "./pages";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme.defaultTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
