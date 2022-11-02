const DATE_OPTIONS: Intl.DateTimeFormatOptions = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

export const getDateTime = (date: number): string => {
  return new Date(date).toLocaleDateString("en-US", DATE_OPTIONS);
}