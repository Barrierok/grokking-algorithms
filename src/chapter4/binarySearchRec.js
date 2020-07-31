export const binarySearchRec = (array, searchItem, startIndex = 0, endIndex = array.length - 1) => {
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const guess = array[midIndex];

  if (searchItem > guess) {
    return binarySearchRec(array, searchItem, midIndex + 1, endIndex);
  }
  if (searchItem < guess) {
    return binarySearchRec(array, searchItem, startIndex, midIndex - 1);
  }
  if (guess === searchItem) {
    return midIndex;
  }
  return -1;
};
