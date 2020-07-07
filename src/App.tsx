import React, { useMemo, FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "./i18n";

import { darkTheme, GlobalStyles, lightTheme } from "./assets";
import Router from "./pages";
import { configureStore } from "./store";
import { getLocale } from "./utils";

const store = configureStore();

const App: FC = () => {
  const language = useMemo(() => getLocale(), []);

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={language} />
      </Helmet>

      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
