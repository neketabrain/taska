import i18next from "i18next";

const getLocale = (): string =>
  window.localStorage.getItem("i18nextLng") || i18next.language || "en";

export default getLocale;
