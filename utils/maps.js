export const getLocationField = (addComponents, field) => {
  for (let comp of addComponents) {
    if (comp.types.includes(field)) {
      return comp['long_name'];
    }
  }
};
