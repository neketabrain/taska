import i18next from "i18next";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

import "./i18n";

import { defaultTheme, GlobalStyles } from "./assets";
import { AuthProvider } from "./context";
import Router from "./pages";

function App(): JSX.Element {
  const language =
    window.localStorage.getItem("i18nextLng") || i18next.language || "en";

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={language} />
      </Helmet>

      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
