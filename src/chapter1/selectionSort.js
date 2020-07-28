const findIndexSmallestItem = (array) => {
  let [smallest] = array;
  let index = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (smallest > array[i]) {
      smallest = array[i];
      index = i;
    }
  }

  return index;
};

export const selectionSort = (array) => {
  const sortedArray = [];

  while (array.length) {
    const index = findIndexSmallestItem(array);
    const deleteCount = 1;
    sortedArray.push(...array.splice(index, deleteCount));
  }

  return sortedArray;
};
