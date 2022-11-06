const DATE_OPTIONS: Intl.DateTimeFormatOptions = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

export const getLocaleDateStringFromLong = (date: number): string => {
  return new Date(date).toLocaleDateString("en-US", DATE_OPTIONS);
}

export const getISOStringFromLong = (date: number): string => {
  let dateVar = new Date(date), pad = (num: number) => (num < 10 ? '0' : '') + num;
  return `${dateVar.getFullYear()}-${pad(dateVar.getMonth() + 1)}-${pad(dateVar.getDate())}T${pad(dateVar.getHours())}:${pad(dateVar.getMinutes())}`
}

export const parseDateToLong = (dateString: string): number => {
  return Date.parse(dateString);
}


