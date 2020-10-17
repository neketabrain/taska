const getLocaleDate = (
  str: string,
  locales?: string | string[],
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(str);

  return date.toLocaleDateString(locales, options);
};

export default getLocaleDate;
