import React, { createContext, useState, FC } from "react";
import { DefaultTheme } from "styled-components";

import { darkTheme, lightTheme } from "src/assets";
import { isDarkMode } from "src/utils";

type ThemeContextType = {
  darkMode: boolean;
  theme: DefaultTheme;
  toggleTheme(): void;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: isDarkMode(),
  theme: isDarkMode() ? darkTheme : lightTheme,
  toggleTheme: () => null,
});

export const ThemeContextProvider: FC = (props) => {
  const { children } = props;

  const [darkMode, setDarkMode] = useState(isDarkMode());
  const [theme, setTheme] = useState(isDarkMode() ? darkTheme : lightTheme);

  const toggleTheme = (): void => {
    const newTheme = darkMode ? lightTheme : darkTheme;

    localStorage.setItem("theme", darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
    setTheme(newTheme);
  };

  const value = {
    darkMode,
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
