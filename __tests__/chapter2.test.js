import { selectionSort } from '../src/chapter2/selectionSort';

test('Selection sort', () => {
  expect(selectionSort([6, 7, 1, 3, 9, 10])).toEqual([1, 3, 6, 7, 9, 10]);
  expect(selectionSort([1, 3, 5])).toEqual([1, 3, 5]);
  expect(selectionSort([1, 3, 5])).not.toEqual([5, 3, 1]);
  expect(selectionSort([])).toEqual([]);
});
