import { recSum } from '../src/chapter4/recSum';

test('Recursive summ', () => {
  expect(recSum([5, 5, 70])).toBe(80);
  expect(recSum([10])).toBe(10);
  expect(recSum([])).toBe(0);
});
