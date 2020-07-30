export const recFinder = (array, biggest = null) => {
  const [first, ...rest] = array;
  const newBiggest = biggest < first ? first : biggest;
  return !first ? biggest : recFinder(rest, newBiggest);
};
