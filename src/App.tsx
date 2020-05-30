import i18next from "i18next";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "./i18n";

import { defaultTheme, GlobalStyles } from "./assets";
import Router from "./pages";
import { configureStore } from "./store";

function App(): JSX.Element {
  const store = configureStore();

  const language =
    window.localStorage.getItem("i18nextLng") || i18next.language || "en";

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={language} />
      </Helmet>

      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
