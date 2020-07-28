import { test, expect } from '@jest/globals';
import { binarySearch } from '../src/chapter1/binarySearch';
import { selectionSort } from '../src/chapter1/selectionSort';

test('Binary search', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  expect(binarySearch([], 3)).toBe(-1);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 0)).toBe(-1);
});

test('Selection sort', () => {
  expect(selectionSort([6, 7, 1, 3, 9, 10])).toEqual([1, 3, 6, 7, 9, 10]);
  expect(selectionSort([1, 3, 5])).toEqual([1, 3, 5]);
  expect(selectionSort([1, 3, 5])).not.toEqual([5, 3, 1]);
  expect(selectionSort([])).toEqual([]);
});
