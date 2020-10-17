const getLocaleTime = (
  str: string,
  locales?: string | string[],
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(str);

  return date.toLocaleTimeString(locales, options);
};

export default getLocaleTime;
