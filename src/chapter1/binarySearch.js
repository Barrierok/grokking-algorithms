export const binarySearch = (list, value) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.ceil((low + high) / 2);
    const guess = list[mid];
    if (guess === value) {
      return mid;
    }
    if (guess < value) {
      low = mid + 1;
    }
    if (guess > value) {
      high = mid - 1;
    }
  }
  return -1;
};
