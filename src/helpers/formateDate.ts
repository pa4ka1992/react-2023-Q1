export const formateDate = (date?: string) => {
  return date?.slice(0, 10).split('-').reverse().join('-') || '';
};
