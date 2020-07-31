import { recSum } from '../src/chapter4/recSum';
import { recCount } from '../src/chapter4/recCount';
import { recFinder } from '../src/chapter4/recFinder';
import { quickSort } from '../src/chapter4/quickSort';
import { binarySearchRec } from '../src/chapter4/binarySearchRec';

test('Recursive summ', () => {
  expect(recSum([5, 5, 70])).toBe(80);
  expect(recSum([10])).toBe(10);
  expect(recSum([])).toBe(0);
});

test('Recursive count', () => {
  expect(recCount([1, 2, 3, 4])).toBe(4);
  expect(recCount([1])).toBe(1);
});

test('Recursive finder biggest digit', () => {
  expect(recFinder([1, 5, 2, 6, 1, 2, 3])).toBe(6);
  expect(recFinder([5])).toBe(5);
});

test('Quick sort', () => {
  expect(quickSort([1, 4, 0])).toEqual([0, 1, 4]);
  expect(quickSort([9, 8, 7, 6, 5, 4])).toEqual([4, 5, 6, 7, 8, 9]);
  expect(quickSort([])).toEqual([]);
});

test('Recursive binary search', () => {
  expect(binarySearchRec([1, 2, 3, 4, 9, 20, 29], 4)).toBe(3);
  expect(binarySearchRec([], 1)).toBe(-1);
  expect(binarySearchRec([100], 0)).toBe(-1);
});
