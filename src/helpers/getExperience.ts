export const getExperience = (date: string): string => {
  if (!date) {
    return 'Have no experience yet';
  }

  const dateNow = new Date();
  const month = dateNow.getMonth();
  const year = dateNow.getFullYear();

  const currYear = Number(date.slice(0, 4));
  const currMonth = Number(date.slice(5, 7));

  const fullYears = year - currYear;
  const fullMonths = Math.abs(month - currMonth);

  const finalString: string[] = ['of experience'];

  if (!fullYears && !fullMonths) {
    return 'Have no experience yet';
  }

  if (fullMonths) {
    finalString.unshift(`${fullMonths} months`);
  }

  if (fullYears) {
    finalString.unshift(`${fullYears} years`);
  }

  return finalString.join(' ');
};
