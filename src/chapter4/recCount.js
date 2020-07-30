export const recCount = (array) => {
  const [first, ...rest] = array;
  if (!first) {
    return 0;
  }
  return 1 + recCount(rest);
};
