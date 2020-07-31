export const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const [supportItem, ...rest] = array;
  const leftArray = rest.filter((item) => item <= supportItem);
  const rigthArray = rest.filter((item) => item > supportItem);
  return [...quickSort(leftArray), supportItem, ...quickSort(rigthArray)];
};
