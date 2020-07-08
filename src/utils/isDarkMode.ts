const isDarkMode = (): boolean => {
  const localTheme = localStorage.getItem("theme");

  if (localTheme) {
    return localTheme === "dark";
  } else if (window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } else {
    return false;
  }
};

export default isDarkMode;
