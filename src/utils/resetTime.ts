type ResetTime = Date | null;

const resetTime = (date: ResetTime): ResetTime => {
  const newDate = date && new Date(date);

  if (newDate) {
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
  }

  return newDate;
};

export default resetTime;
