type Options = {
  day: 'numeric';
  weekday: 'long';
  month: 'long';
  year: 'numeric';
};

export const formatDate = (date: Date): string => {
  const options: Options = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options); // returns the date in the format we specified
};
