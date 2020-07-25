import { test, expect } from '@jest/globals';
import { binarySearch } from '../../src/chapter1/binarySearch';

test('Binary search', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  expect(binarySearch([], 3)).toBe(-1);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 0)).toBe(-1);
});
