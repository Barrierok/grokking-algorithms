export const recSum = (array) => {
  if (array.length < 1) {
    return 0;
  }
  const [first, ...rest] = array;
  return first + recSum(rest);
};
