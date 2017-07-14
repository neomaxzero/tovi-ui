export const get31 = () => {
  const days = [];
  for(let i = 1; i<=31; i++) {
    days.push({ value: i, label: i});
  }
  return days;
};

export const getMonths = [
  { value: 1, label: 'Enero'},
  { value: 2, label: 'Febrero'},
  { value: 3, label: 'Marzo'},
  { value: 4, label: 'Abril'},
  { value: 5, label: 'Mayo'},
  { value: 6, label: 'Junio'},
  { value: 7, label: 'Julio'},
  { value: 8, label: 'Agosto'},
  { value: 9, label: 'Septiembre'},
  { value: 10, label: 'Octubre'},
  { value: 11, label: 'Noviembre'},
  { value: 12, label: 'Diciembre'},
]

export const getYearForm = (from) => {
  const current = new Date().getFullYear();
  const years = [];
  for(let i = from; i<=current; i++) {
    years.push({ value: i, label: i});
  }
  return years.reverse();
}