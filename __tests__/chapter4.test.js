import { recSum } from '../src/chapter4/recSum';
import { recCount } from '../src/chapter4/recCount';

test('Recursive summ', () => {
  expect(recSum([5, 5, 70])).toBe(80);
  expect(recSum([10])).toBe(10);
  expect(recSum([])).toBe(0);
});

test('Recursive count', () => {
  expect(recCount([1, 2, 3, 4])).toBe(4);
  expect(recCount([1])).toBe(1);
});
